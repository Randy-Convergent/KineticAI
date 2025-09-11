import ComponentTransition from "@/common/component/element/ComponentTransition";
import Image from "@/common/component/element/Image";
import clsx from "clsx";
import React from "react";
// Import new, more relevant icons
import { IoRocketOutline } from "react-icons/io5";
import { FiZap } from "react-icons/fi";
import { HiOutlineChartPie } from "react-icons/hi";

export default function CardVariantBig() {
  return (
    <div className="flex flex-col h-auto w-full gap-10 py-5 justify-center items-center">
      <div className="w-full flex flex-col lg:flex-row gap-5">
        {/* Card 1: Business Growth */}
        <ComponentTransition
          className={clsx(
            `w-full h-[700px] flex flex-col justify-start items-start gap-5 p-10 bg-gradient-to-b from-[#E8E8E8] to-[#F4F4F2] to-80% rounded-3xl  overflow-hidden`
          )}
        >
          <div className=" w-full flex justify-start relative">
            <div className="bg-[#495464] p-2 rounded-xl">
              {/* Icon for Growth & Launching */}
              <IoRocketOutline size={40} className="text-[#E8E8E8]" />
            </div>
          </div>
          <div className="w-full">
            <h1 className="text-4xl font-semibold text-[#494949]">
              Drive business growth with our intelligent automation solutions.
            </h1>
            <p className="text-sm text-[#7A7A7A]">
              Unlock your company's potential by automating key processes,
              allowing you to focus on innovation and strategy.
            </p>
          </div>
          <div className="w-full h-full top-[200px] relative flex justify-center items-center">
            <Image
              className="w-[500px] h-auto object-cover "
              src="/FUSION.png"
              alt="AI Automation"
              height={400}
              width={400}
              priority
            />
          </div>
        </ComponentTransition>

        {/* Card 2: Productivity */}
        <ComponentTransition
          className={clsx(
            `w-full h-[700px] flex flex-col justify-start items-start gap-5 p-10 bg-gradient-to-b from-[#E8E8E8] to-[#F4F4F2] to-80% rounded-3xl  overflow-hidden`
          )}
        >
          <div className=" w-full flex justify-start relative">
            <div className="bg-[#495464] p-2 rounded-xl">
              {/* Icon for Speed & Productivity */}
              <FiZap size={40} className="text-[#E8E8E8]" />
            </div>
          </div>
          <div className="w-full">
            <h1 className="text-4xl font-semibold text-[#494949]">
              Boost your team's productivity.
            </h1>
            <p className="text-sm text-[#7A7A7A]">
              Let our AI solutions handle the repetitive work, so your team can
              focus on high-impact tasks and creative problem-solving.
            </p>
          </div>
          <div className="w-full h-full top-[100px] relative flex justify-center items-center">
            <Image
              className="w-[500px] h-auto object-cover "
              src="/chart-stat.svg"
              alt="Productivity Chart"
              height={400}
              width={400}
              priority
            />
          </div>
        </ComponentTransition>
      </div>

      {/* Card 3: Data Insights */}
      <ComponentTransition
        className={clsx(
          `w-full h-auto flex lg:flex-row flex-col justify-start items-start gap-5 p-10 bg-gradient-to-b from-[#E8E8E8] to-[#F4F4F2] to-80% rounded-3xl  overflow-hidden`
        )}
      >
        <div className="w-full flex flex-col gap-5">
          <div className=" w-full flex justify-start relative">
            <div className="bg-[#495464] p-2 rounded-xl">
              {/* Icon for Analytics & Insights */}
              <HiOutlineChartPie size={40} className="text-[#E8E8E8]" />
            </div>
          </div>
          <div className="w-full">
            <h1 className="text-4xl font-semibold text-[#494949]">
              Gain Actionable Insights From Your Data
            </h1>
            <p className="text-sm text-[#7A7A7A]">
              Leverage AI-powered analytics to make smarter, data-driven
              decisions.
            </p>
          </div>
        </div>
        <div className="w-full h-full  relative flex justify-center items-center">
          <Image
            className="w-full h-auto object-cover "
            src="/chart-sales.svg"
            alt="Sales Analytics"
            height={400}
            width={400}
            priority
          />
        </div>
      </ComponentTransition>
    </div>
  );
}
