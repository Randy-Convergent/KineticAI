"use client";
import React from "react";
import H1 from "./H1";
import Image from "./Image";
import clsx from "clsx";
import { motion } from "framer-motion";
import ComponentTransition from "./ComponentTransition";
import KineticButton from "./KineticButton"; // <-- Import your custom button

export default function CardEndOffer({ className }) {
  return (
    <ComponentTransition
      className={clsx(
        className,
        `h-auto max-w-[1500px] flex flex-col py-10 px-5 lg:px-10  w-full  overflow-hidden `
      )}
    >
      <div className="w-full relative bg-gradient-to-b from-[#141414] to-[#141414] rounded-3xl border-[1px] border-[#262626] z-[9]  items-start h-auto lg:h-[500px] overflow-hidden lg:flex-row flex-col flex justify-center ">
        {/* Left Column: Content & CTA (Updated) */}
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
        <motion.div
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{
            type: "tween",
            ease: [0.8, 0.2, 0, 1],
            duration: 1.5,
          }}
          viewport={{ once: true }}
          className="flex w-full z-[9] overflow-hidden justify-end items-start relative lg:top-[60px] left-[30px] lg:left-[190px]"
        >
          <Image
            className="w-full lg:w-[90%] h-auto object-cover"
            src="/FusionApp.png" // This is your original image
            alt="Kinetic AI Solutions"
            height={400}
            width={400}
            priority
          />
        </motion.div>
        <motion.div
          initial={{ y: 250 }}
          whileInView={{ y: 0 }}
          transition={{
            type: "tween",
            ease: [0.8, 0.2, 0, 1],
            duration: 1.5,
          }}
          viewport={{ once: true }}
          className="hidden lg:flex w-full overflow-hidden  justify-end items-start relative lg:top-[150px] left-[30px] lg:left-[90px]"
        >
          <Image
            className="w-full lg:w-[90%] h-auto object-cover"
            src="/FUSION.png" // This is your original image
            alt="Kinetic AI Automation"
            height={400}
            width={400}
            priority
          />
        </motion.div>
      </div>
    </ComponentTransition>
  );
}
