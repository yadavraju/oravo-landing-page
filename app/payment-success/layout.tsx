import type { Metadata } from "next";

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
  },
  twitter: {
    card: "summary_large_image",
    title: "Payment Successful | Oravo",
    description: "Welcome to Oravo Pro",
  },
};

export default function PaymentSuccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
