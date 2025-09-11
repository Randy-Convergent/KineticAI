import ComponentTransition from "@/common/component/element/ComponentTransition";
import clsx from "clsx";
import React from "react";

export default function PlatformCard({ item }) {
  return (
    <div className="flex lg:flex-row flex-wrap w-full gap-5 py-10 justify-center items-center">
      {item.map((items, index) => (
        <ComponentTransition
          delay={index * 0.1}
          key={index}
          className={clsx(
            items.className,
            ` flex h-auto items-center gap-5 p-5 border-[1px] border-transparent hover:border-[#262626] hover:bg-[#1C1C1C] rounded-3xl transition-all duration-300`
          )}
        >
          {/* The background color is now a subtle dark gray */}
          {items.icon && (
            <div className="p-3 bg-[#262626] rounded-2xl">{items.icon}</div>
          )}
          <div className="w-full flex flex-col gap-5">
            <h1 className="text-xl text-[#CCCCCC]">{items.title}</h1>
            <p className="text-sm text-[#7A7A7A]">{items.desc}</p>
          </div>
        </ComponentTransition>
      ))}
    </div>
  );
}
