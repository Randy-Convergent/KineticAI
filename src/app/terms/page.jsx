import TermsPage from "@/common/module/Terms/TermsPage";
import React from "react";

export const metadata = {
  title: "Terms - Kinetic",
  description: "Kinetic Terms Page",
};

export default function page() {
  return (
    <div className="w-full flex justify-center items-center">
      <TermsPage />
    </div>
  );
}
