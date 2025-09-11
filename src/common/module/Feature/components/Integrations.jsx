import H1 from "@/common/component/element/H1";
import React from "react";
import PlatformCard from "./PlatformCard";
import { IntegrationItem } from "@/common/constant/ServicesItem"; // Assuming you create this

export default function Integrations() {
  return (
    <div className="w-full py-20">
      <div className="w-full flex flex-col justify-center items-center">
        <H1
          className="!text-3xl lg:!text-5xl !justify-center"
          title="Seamless Integration With Your Tech Stack"
          textColor="white"
        />
        <H1
          className="md:mt-5 mt-10 w-[80%]  sm:!w-[60%] !justify-center !text-xl lg:text-center "
          title="Unlock the full potential of your business by effortlessly connecting our AI solutions with the industry's leading platforms."
          textColor="normal"
        />
        <div className="w-full">
          <PlatformCard item={IntegrationItem} />
        </div>
      </div>
    </div>
  );
}
