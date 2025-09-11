import PricingPage from "@/common/module/Pricing/PricingPage";
import React from "react";

export const metadata = {
  title: "Pricing - Kinetic",
  description: "Kinetic Pricing Page",
};

export default function page() {
  return (
    <div className="w-full flex justify-center items-center">
      <PricingPage />
    </div>
  );
}
