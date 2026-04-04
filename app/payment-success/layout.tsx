import type { Metadata } from "next";
import { ogImageUrl } from "@/lib/ogImage";

const ogUrl = ogImageUrl("Payment Successful | Oravo", "Welcome to Oravo Pro", "default");

export const metadata: Metadata = {
  title: "Payment Successful | Oravo",
  description:
    "Your payment has been processed successfully. Welcome to Oravo Pro!",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Payment Successful | Oravo",
    description: "Welcome to Oravo Pro",
    url: "https://oravo.ai/payment-success",
    type: "website",
    images: [{ url: ogUrl, width: 1200, height: 630, alt: "Payment Successful | Oravo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Payment Successful | Oravo",
    description: "Welcome to Oravo Pro",
    images: [ogUrl],
  },
};

export default function PaymentSuccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
