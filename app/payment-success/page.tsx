"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const [countdown, setCountdown] = useState(8);
  const [isReturning, setIsReturning] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const [customSession, setCustomSession] = useState("");
  const [paymentDate, setPaymentDate] = useState("");

  useEffect(() => {
    // Get URL parameters
    const session = searchParams.get("session_id") || "";
    const custom = searchParams.get("custom_session") || "";

    setSessionId(session);
    setCustomSession(custom);

    // Set payment date
    const date = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    setPaymentDate(date);

    // Start countdown
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          returnToApp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [searchParams]);

  const returnToApp = () => {
    if (isReturning) return;
    setIsReturning(true);

    const sessionToUse = customSession || sessionId || "";
    const returnUrl = `http://localhost:8080/payment-success?session_id=${encodeURIComponent(
      sessionToUse
    )}&status=success`;

    console.log("Attempting to return to desktop app:", returnUrl);

    try {
      window.location.href = returnUrl;

      setTimeout(() => {
        setIsReturning(false);
      }, 2500);
    } catch (error) {
      console.error("Failed to open desktop app:", error);
      setIsReturning(false);
    }
  };

  const displaySession = customSession || sessionId || "N/A";
  const truncatedSession =
    displaySession.length > 25
      ? displaySession.substring(0, 25) + "..."
      : displaySession;

  return (
    <div className="w-full min-h-screen relative bg-gradient-to-br from-[#10b981] to-[#059669] overflow-x-hidden flex items-center justify-center p-5">
      {/* Main Container */}
      <div className="w-full max-w-[500px] bg-white rounded-[20px] p-8 md:p-10 shadow-2xl animate-fadeIn">
        {/* Success Icon with Animation */}
        <div className="relative w-[100px] h-[100px] bg-[#10b981] rounded-full flex items-center justify-center mx-auto mb-8">
          <div className="absolute inset-0 w-[120px] h-[120px] -left-[10px] -top-[10px] border-[3px] border-[#10b981] rounded-full opacity-30 animate-ping"></div>
          <svg
            className="w-12 h-12 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-[#1f2937] text-3xl md:text-4xl font-bold text-center mb-4 font-serif">
          Payment Successful!
        </h1>

        {/* Subtitle */}
        <p className="text-[#6b7280] text-base md:text-lg text-center mb-8 leading-relaxed font-sans">
          Your payment has been processed successfully.
          <br />
          Thank you for your purchase!
        </p>

        {/* Payment Info Card */}
        <div className="bg-[#f0fdf4] border-2 border-[#bbf7d0] rounded-2xl p-6 mb-8">
          <div className="space-y-3">
            {/* Status */}
            <div className="flex justify-between items-center pb-3 border-b border-[#dcfce7]">
              <span className="text-[#374151] text-sm font-medium font-sans">
                Status
              </span>
              <span className="text-[#059669] text-sm font-semibold font-sans">
                ✓ Completed
              </span>
            </div>

            {/* Date */}
            <div className="flex justify-between items-center pb-3 border-b border-[#dcfce7]">
              <span className="text-[#374151] text-sm font-medium font-sans">
                Date
              </span>
              <span className="text-[#059669] text-sm font-semibold font-sans">
                {paymentDate}
              </span>
            </div>

            {/* Session */}
            <div className="flex justify-between items-center pb-3 border-b border-[#dcfce7]">
              <span className="text-[#374151] text-sm font-medium font-sans">
                Session
              </span>
              <span className="text-[#059669] text-xs font-semibold font-mono bg-[#f3f4f6] px-2 py-1 rounded">
                {truncatedSession}
              </span>
            </div>

            {/* Transaction */}
            <div className="flex justify-between items-center">
              <span className="text-[#374151] text-sm font-medium font-sans">
                Transaction
              </span>
              <span className="text-[#059669] text-sm font-semibold font-sans">
                Stripe Checkout
              </span>
            </div>
          </div>
        </div>

        {/* Return Button */}
        <button
          onClick={returnToApp}
          disabled={isReturning}
          className="w-full bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] text-white py-4 px-9 rounded-xl font-semibold text-base font-sans transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg"
        >
          {isReturning ? "Opening Application..." : "Return to Application"}
        </button>

        {/* Auto Redirect Notice */}
        {countdown > 0 && !isReturning && (
          <div className="bg-[#eff6ff] border border-[#bfdbfe] rounded-lg p-4 mt-5 text-center">
            <p className="text-[#1e40af] text-sm font-sans">
              Automatically returning in{" "}
              <span className="font-semibold text-[#4f46e5]">{countdown}</span>{" "}
              seconds...
            </p>
          </div>
        )}

        {/* Instructions */}
        <div className="bg-[#fffbeb] border-l-4 border-[#f59e0b] rounded-lg p-5 mt-6">
          <div className="flex items-center mb-3">
            <span className="text-xl mr-2">💡</span>
            <h3 className="text-[#92400e] text-base font-semibold font-sans">
              Return to Your Desktop App
            </h3>
          </div>
          <div className="text-[#78350f] text-sm leading-relaxed font-sans">
            <ol className="list-decimal pl-5 space-y-2 my-3">
              <li>
                <strong>Click "Return to Application"</strong> above
              </li>
              <li>
                If the app doesn't open,{" "}
                <strong>manually launch your desktop application</strong>
              </li>
              <li>
                Your payment is confirmed and your account will be updated
              </li>
              <li>
                If you encounter issues, restart the desktop application
              </li>
            </ol>

            <div className="mt-4 p-3 bg-[#f0f9ff] border-l-3 border-[#0284c7] rounded-md">
              <div className="font-semibold text-[#0c4a6e] mb-1">
                ✅ Payment Confirmed
              </div>
              <div className="text-[#0369a1] text-xs">
                Your subscription is being activated. Check your account in the
                desktop app.
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }

        @keyframes ping {
          0% {
            transform: scale(1);
            opacity: 0.3;
          }
          100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }

        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="w-full min-h-screen relative bg-gradient-to-br from-[#10b981] to-[#059669] flex items-center justify-center">
          <div className="text-white text-xl">Loading...</div>
        </div>
      }
    >
      <PaymentSuccessContent />
    </Suspense>
  );
}
