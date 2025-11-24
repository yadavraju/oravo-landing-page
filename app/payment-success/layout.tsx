import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Successful - Oravo.ai",
  description:
    "Your payment has been processed successfully. Thank you for your purchase!",
  robots: "noindex, nofollow",
};

export default function PaymentSuccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
