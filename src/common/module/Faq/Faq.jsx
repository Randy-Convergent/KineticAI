import Accordian from "@/common/component/element/Accordian";
import H1 from "@/common/component/element/H1";
import SectionText from "@/common/component/element/SectionText";
// Import from the new file
import { generalFaq } from "@/common/constant/FaqItems";
import React from "react";

export default function Faq() {
  return (
    <div className="h-auto max-w-[1500px] relative flex flex-col justify-center px-5 lg:px-10 py-10 w-full">
      <div className="flex w-full  relative justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center">
          <SectionText title="FAQs" />
          <H1
            title="Your Questions, Answered"
            className="!text-2xl lg:!text-5xl w-full lg:w-[40%] font-semibold !text-center justify-center items-center"
            textColor="normal"
          />
          <div className="w-full lg:px-32">
            {/* We pass the generalFaq array, limited to the first 4 for brevity */}
            <Accordian Content={generalFaq.slice(0, 4)} />
          </div>
        </div>
      </div>
    </div>
  );
}
