import H1 from "@/common/component/element/H1";
import React from "react";
import FaqAccordian from "./FaqAcordian";
import CardEndOffer from "@/common/component/element/CardEndOffer";

// Import the new structured FAQ data
import {
  generalFaq,
  processFaq,
  techFaq,
  pricingFaq,
  supportFaq,
} from "@/common/constant/FaqItems";

// Import new and existing icons
import { GrIntegration } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { MdPayments } from "react-icons/md";
import { BsQuestionCircle } from "react-icons/bs";
import { VscChecklist } from "react-icons/vsc";

export default function FaqPage() {
  // Create an array of section objects to map over
  const faqSections = [
    {
      icon: <BsQuestionCircle size={30} />,
      title: "General Questions",
      content: generalFaq,
    },
    {
      icon: <VscChecklist size={30} />,
      title: "Our Services & Process",
      content: processFaq,
    },
    {
      icon: <GrIntegration size={30} />,
      title: "Technology and Compatibility",
      content: techFaq,
    },
    {
      icon: <MdPayments size={30} />,
      title: "Pricing and ROI",
      content: pricingFaq,
    },
    {
      icon: <BiSupport size={30} />,
      title: "Support and Maintenance",
      content: supportFaq,
    },
  ];

  return (
    <div className="h-auto max-w-[1500px]  flex flex-col justify-center px-5 lg:px-10  w-full mt-20 overflow-hidden">
      <div className="w-full max-sm:mt-10 mt-10  z-[9] flex-col items-center flex justify-center ">
        <div className="w-full bg-[#E8E8E8] px-5 py-8 rounded-3xl flex justify-center items-center">
          <H1
            title="Frequently Asked Questions"
            className="!text-2xl lg:!text-5xl w-full lg:w-[90%] font-semibold !text-center justify-center items-center"
            textColor="normal"
          />
        </div>
        <H1
          className="md:mt-5 mt-10 w-[80%]  sm:!w-[70%] !justify-center text-lg lg:text-xl text-center "
          title="Have a question? We've compiled answers to the most common questions we receive."
          textColor="normal"
        />
      </div>

      {/* Map over the faqSections array to render each section dynamically */}
      {faqSections.map((section, index) => (
        <div
          key={index}
          className="w-full py-10 lg:px-36 flex flex-col justify-start items-start"
        >
          <div className="flex gap-3 items-center pb-10">
            {section.icon}
            <h1 className="text-2xl font-semibold">{section.title}</h1>
          </div>
          <FaqAccordian Content={section.content} />
        </div>
      ))}

      <CardEndOffer className="!px-0" />
    </div>
  );
}
