import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, firstName } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const PRIVATE_KEY = process.env.KLAVIYO_PRIVATE_KEY;
    const LIST_ID = process.env.KLAVIYO_LIST_ID;

    if (!PRIVATE_KEY || !LIST_ID) {
      return NextResponse.json(
        { error: "Klaviyo is not configured" },
        { status: 500 }
      );
    }

    const res = await fetch(
      "https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs/",
      {
        method: "POST",
        headers: {
          Authorization: `Klaviyo-API-Key ${PRIVATE_KEY}`,
          accept: "application/vnd.api+json",
          "content-type": "application/vnd.api+json",
          revision: "2026-04-15",
        },
        body: JSON.stringify({
          data: {
            type: "profile-subscription-bulk-create-job",
            attributes: {
              profiles: {
                data: [
                  {
                    type: "profile",
                    attributes: {
                      email,
                      first_name: firstName,
                    },
                  },
                ],
              },
            },
            relationships: {
              list: {
                data: {
                  type: "list",
                  id: LIST_ID,
                },
              },
            },
          },
        }),
      }
    );

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.errors?.[0]?.detail || "Failed to push to Klaviyo");
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
