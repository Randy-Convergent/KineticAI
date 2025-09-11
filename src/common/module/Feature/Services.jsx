// Rename this file to "Services.js"
import Card from "@/common/component/element/Card";
import H1 from "@/common/component/element/H1";
import SectionText from "@/common/component/element/SectionText";
import { ServicesItem } from "@/common/constant/ServicesItem"; // Assuming you will create this
import React from "react";
import { FaStarOfLife } from "react-icons/fa";
import CardVariantBig from "./components/CardVariantBig";
import CardIcon from "@/common/component/element/CardIcon";
import { HowItsWorkItem } from "@/common/constant/HowItsWorkItem";

export default function Services() {
  return (
    <div className="h-auto max-w-[1500px] relative flex flex-col justify-center px-5 lg:px-10 py-10 w-full">
      <div className="flex w-full  relative justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center">
          <SectionText title="Services" />
          <H1
            title="Explore Our Suite of AI Automation Services"
            className="!text-2xl lg:!text-5xl w-full lg:w-[40%] font-semibold !text-center justify-center items-center"
            textColor="normal"
          />
          <H1
            title="We deliver custom AI solutions to streamline your operations in weeks, not months."
            className="!text-sm lg:!text-base w-full !mt-5 !text-center justify-center items-center"
            textColor="opacity"
          />
          <div className="w-full">
            <CardVariantBig />
            <CardIcon item={HowItsWorkItem} />
          </div>
        </div>
      </div>
    </div>
  );
}
