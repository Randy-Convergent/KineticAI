import FaqPage from "@/common/module/Faq/components/FaqPage";
import React from "react";

export const metadata = {
  title: "Faq - Kinetic",
  description: "Kinetic faq Page",
};

export default function page() {
  return (
    <div className="w-full flex justify-center items-center">
      <FaqPage />
    </div>
  );
}
