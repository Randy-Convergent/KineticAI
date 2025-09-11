"use client";
import { ButtonSpot } from "@/common/component/element/ButtonSpot";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import clsx from "clsx";
import React from "react";
import { CiCircleCheck } from "react-icons/ci";

export default function PricingCard({ item }) {
  return (
    <div className="w-full py-10">
      {/* The monthly/yearly toggle has been removed */}
      <div className="flex lg:flex-row flex-col gap-8 w-full justify-center">
        {item.map((items, index) => (
          <ComponentTransition
            delay={index * 0.1}
            key={index}
            className={clsx(
              items.className,
              `flex flex-col p-8 lg:w-[32%]` // Adjusted width and padding
            )}
          >
            <h2 className="text-2xl font-semibold">{items.plan}</h2>
            <div className="py-5">
              <h1 className="text-4xl font-bold">{items.price}</h1>
              <p
                className={clsx(
                  items.highlight ? "text-gray-300" : "text-gray-600",
                  "text-sm mt-1"
                )}
              >
                {items.subtext}
              </p>
            </div>

            <div className="flex flex-col gap-3 py-4 border-t border-gray-400">
              {items.features.map((feature, fIndex) => (
                <div key={fIndex} className="w-full flex items-center gap-3">
                  <CiCircleCheck
                    size={24}
                    className={clsx(
                      items.highlight ? "text-white" : "text-black"
                    )}
                  />
                  <span className="text-base">{feature}</span>
                </div>
              ))}
            </div>

            <div className="w-full mt-auto pt-5">
              <ButtonSpot
                title={items.ctaText}
                className={clsx(
                  items.highlight
                    ? `bg-white text-black`
                    : `bg-[#495464] text-white`,
                  `!py-3 w-full`
                )}
              />
            </div>
          </ComponentTransition>
        ))}
      </div>
    </div>
  );
}
