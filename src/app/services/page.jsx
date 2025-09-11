import ServicesPage from "@/common/module/Feature/ServicesPage";
import React from "react";

export const metadata = {
  title: "Services - Kinetic",
  description: "Kinetic Services Page",
};

export default function page() {
  return (
    <div className="w-full flex justify-center items-center">
      <ServicesPage />
    </div>
  );
}
