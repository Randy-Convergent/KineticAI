import H1 from "@/common/component/element/H1";
import React from "react";
import FeatureCardIcon from "./FeatureCardIcon";
import { CoreCapabilityItems } from "@/common/constant/CoreCapabilityItems"; // You'll need to create this

export default function CoreCapabilities() {
  return (
    <div className="w-full py-20">
      <div className="w-full flex flex-col justify-center items-center">
        <H1
          className="!text-3xl lg:!text-5xl !justify-center"
          title="Loaded with Core Capabilities"
          textColor="white"
        />
        <H1
          className="md:mt-5 mt-10 w-[80%]  sm:!w-[60%] !justify-center !text-xl  lg:text-center "
          title="Transforming your business operations into intelligent, automated workflows has never been easier. With our expertise, unleash a world of possibilities and elevate your business to new heights."
          textColor="normal"
        />
        <div className="w-full">
          <FeatureCardIcon item={CoreCapabilityItems} />
        </div>
      </div>
    </div>
  );
}
