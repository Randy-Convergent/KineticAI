"use client";
import H1 from "@/common/component/element/H1";
import React from "react";
import HeroText from "@/common/component/element/HeroText";
import SliderTechLeader from "./components/SliderTechLeader";
import KineticButton from "@/common/component/element/KineticButton";
import LottieAnimation from "@/common/component/element/LottieAnimation";

export default function Hero() {
  return (
    <div className="h-auto max-w-[1500px]  flex flex-col justify-start px-5 lg:px-10  w-full mt-20 overflow-hidden ">
      <div className="w-full gap-10 flex lg:flex-row flex-col justify-center mt-5">
        <div className="w-full z-[9] flex-col py-10 px-8 flex bg-[#E8E8E8] rounded-3xl justify-center">
          {/* Main Headline */}
          <div className="w-full">
            <HeroText
              texts="Unlock Your Business's Kinetic Potential."
              className="leading-[0.95em]"
            />
          </div>

          {/* Sub-headline / Description */}
          <H1
            delay={0.2}
            className="mt-6 w-full lg:!w-[90%] justify-start !text-lg text-start"
            title="We build custom AI solutions that automate your workflows, eliminate bottlenecks, and accelerate growth—freeing your team to focus on what matters most."
            textColor="normal"
          />

          <div className="w-full mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <KineticButton title="Book a Free Consultation" />
          </div>
        </div>

        <div className="basis-[70%] flex w-full relative justify-center items-center">
          <div className="w-full h-[600px] overflow-hidden relative rounded-3xl">
            <div className="absolute inset-0 w-full z-[-9]">
              <LottieAnimation src="/robot-automation.json" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:mt-10">
        <SliderTechLeader />
      </div>
    </div>
  );
}
