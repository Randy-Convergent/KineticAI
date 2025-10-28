"use client";
import React from "react";
import H1 from "./H1";
import Image from "./Image";
import clsx from "clsx";
import ComponentTransition from "./ComponentTransition";
import KineticButton from "./KineticButton";
import LottieAnimation from "./LottieAnimation";

export default function CardEndOffer({ className }) {
  return (
    <ComponentTransition
      className={clsx(
        className,
        `h-auto max-w-[1500px] flex flex-col py-10 px-5 lg:px-10  w-full  overflow-hidden `
      )}
    >
      <div className="w-full relative bg-gradient-to-b from-[#141414] to-[#141414] rounded-3xl border-[1px] border-[#262626] z-[9]  items-start h-auto lg:h-[500px] overflow-hidden lg:flex-row flex-col flex justify-center ">
        <div className="lg:w-[150%] gap-8 px-4 lg:px-10 py-20 flex flex-col justify-center items-start">
          <H1
            className="!items-start !w-full !justify-start text-3xl lg:!text-5xl font-semibold text-start "
            title="Ready to put your business in motion?"
            textColor="white"
          />
          <H1
            className=" !justify-start !text-lg text-start lg:w-[90%]"
            title="Book a free, no-obligation discovery call with our experts. We'll help you identify the most impactful automation opportunities for your business."
            textColor="white"
          />
          <div className="w-full relative mt-4">
            <KineticButton title="Book a Free Consultation" />
          </div>
        </div>
        <div className="w-full h-full  relative flex justify-center items-center">
          <LottieAnimation src="/contact-us.json" />
        </div>
      </div>
    </ComponentTransition>
  );
}
