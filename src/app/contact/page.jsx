import ContactPage from "@/common/module/Contact/ContactPage";
import React from "react";

export const metadata = {
  title: "Contact - Kinetic",
  description: "Kinetic Contact Page",
};

export default function page() {
  return (
    <div className="w-full flex justify-center items-center">
      <ContactPage />
    </div>
  );
}
