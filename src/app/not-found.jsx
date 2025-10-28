"use client";
import Link from "next/link";
import LottieAnimation from "@/common/component/element/LottieAnimation";
import ConvergentButton from "@/common/component/element/ConvergentButton";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-5">
      <div className="max-w-md w-full flex flex-col items-center gap-6">
        {/* Lottie Animation */}
        <div className="w-80 h-80">
          <LottieAnimation src="/error-404.json" />
        </div>

        {/* Headline */}
        <h1 className="text-3xl lg:text-4xl font-bold">Page Not Found</h1>

        {/* Helpful Message */}
        <p className="text-lg text-gray-400">
          It seems you&apos;ve taken a wrong turn. The page you&apos;re looking
          for has either been moved or doesn&apos;t exist.
        </p>

        {/* Call to Action Button */}
        <div className="mt-4">
          <Link href="/">
            <ConvergentButton title="Return to Homepage" />
          </Link>
        </div>
      </div>
    </div>
  );
}
