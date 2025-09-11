"use client";
import H1 from "@/common/component/element/H1";
import React from "react";
import dynamic from "next/dynamic";
import HeroText from "@/common/component/element/HeroText";
import Image from "@/common/component/element/Image";
import SliderTechLeader from "./components/SliderTechLeader";
import KineticButton from "@/common/component/element/KineticButton";

const FusionApp = dynamic(() => import("./components/FusionApp"), {
  ssr: false,
});

export default function Hero() {
  return (
    <div className="h-auto max-w-[1500px]  flex flex-col justify-start px-5 lg:px-10  w-full mt-20 overflow-hidden ">
      <div className="w-full gap-10 flex lg:flex-row flex-col justify-center mt-5">
        {/* LEFT COLUMN: Content & CTA */}
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

          {/* Restructured CTA and Social Proof Section */}
          <div className="w-full mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <KineticButton title="Book a Free Consultation" />
          </div>
        </div>

        {/* RIGHT COLUMN: Visual Element */}
        <div className="basis-[70%] flex w-full relative justify-center items-center">
          <div className="w-full h-[600px] overflow-hidden relative rounded-3xl">
            <FusionApp />
            <div className="absolute inset-0 w-full z-[-9]">
              <Image
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Kinetic AI in Action"
                height={600}
                width={400}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Full-width Social Proof (Client Logos) */}
      <div className="w-full lg:mt-10">
        <SliderTechLeader />
      </div>
    </div>
  );
}
