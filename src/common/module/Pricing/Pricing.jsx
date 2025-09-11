import H1 from "@/common/component/element/H1";
import React from "react";
import PricingCard from "./components/PricingCard";
import { PricingItem } from "@/common/constant/PricingItem";
import SectionText from "@/common/component/element/SectionText";

export default function Pricing() {
  return (
    <div className="h-auto max-w-[1500px] bg-[#F2F2F2]  flex flex-col justify-center px-5 mt-10 lg:px-10  w-full  overflow-hidden">
      <div className="w-full  flex-col items-center flex justify-center ">
        <SectionText title="Pricing" />
        <H1
          title="Simple and flexible pricing"
          className="!text-2xl lg:!text-4xl !text-center"
          textColor="colorShadowWhite"
        />
      </div>
      <div className="w-full pb-20">
        <PricingCard item={PricingItem} />
      </div>
    </div>
  );
}
