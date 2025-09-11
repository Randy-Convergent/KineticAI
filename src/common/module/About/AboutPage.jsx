import H1 from "@/common/component/element/H1";
import Image from "@/common/component/element/Image";
import React from "react";
import Functionalities from "./components/Functionalities";
import OurStory from "./components/OurStory";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import { CiStar } from "react-icons/ci";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import LottieAnimation from "@/common/component/element/LottieAnimation";

export default function AboutPage() {
  return (
    <ComponentTransition className="h-auto max-w-[1500px]  flex flex-col justify-center px-5 lg:px-10  w-full mt-20 overflow-hidden">
      <div className="w-full max-sm:mt-10 mt-10  z-[9] flex-col items-center flex justify-center ">
        <div className="w-full bg-[#E8E8E8] px-5 py-8 rounded-3xl flex justify-center items-center">
          <H1
            title="We've earned recognition as a top-tier AI Automation Agency."
            className="!text-2xl lg:!text-5xl w-full lg:w-[70%] font-semibold !text-center justify-center items-center p-2"
            textColor="normal"
          />
        </div>
      </div>
      <div className="w-full lg:flex-row flex-col flex py-10 gap-5">
        <div className="lg:basis-[80%] h-[400px] lg:h-[600px] overflow-hidden px-5 py-5 relative rounded-2xl">
          <div className="w-full h-full  relative flex justify-center items-center">
            <LottieAnimation src="/ai-robot.json" />
          </div>
        </div>
        <div className="basis-[80%]">
          <div className="w-full flex flex-col gap-5  ">
            <div className="bg-[#E8E8E8] px-5 py-10">
              <h1 className="text-3xl font-semibold">
                We are dedicated to your success. As your strategic partners, we
                provide expert AI-driven solutions tailored to your needs.
              </h1>
            </div>
            <div className="w-full lg:flex-row flex-col flex gap-5">
              <ComponentTransition className="bg-[#E8E8E8] px-5 py-10 w-full flex flex-col gap-5">
                <div>
                  <CiStar size={30} />
                </div>
                <h1 className="text-3xl font-semibold">Our Mission</h1>
                <h1>
                  Our mission is to empower businesses by integrating
                  intelligent automation, streamlining operations, and fostering
                  growth through innovative and customized AI solutions.
                </h1>
              </ComponentTransition>

              <ComponentTransition className="bg-[#E8E8E8] px-5 py-10 w-full flex flex-col gap-5">
                <div>
                  <PiTelevisionSimpleLight size={30} />
                </div>
                <h1 className="text-3xl font-semibold">Our Vision.</h1>
                <h1>
                  Our vision is to create a future where businesses of all sizes
                  can leverage the power of AI to achieve operational excellence
                  and sustainable growth.
                </h1>
              </ComponentTransition>
            </div>
          </div>
        </div>
      </div>
      <Functionalities />
      <OurStory />
    </ComponentTransition>
  );
}
