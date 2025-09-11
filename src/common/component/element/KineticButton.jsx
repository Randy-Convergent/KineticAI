import React from "react";
import { RiArrowRightLine } from "react-icons/ri";
import clsx from "clsx";

export default function KineticButton({ title, className }) {
  return (
    <button
      className={clsx(
        // Base Styles
        "group flex items-center justify-center gap-3 bg-[#141414] text-white font-semibold text-lg px-8 py-4 rounded-full shadow-md transition-all duration-300 ease-in-out",

        // Hover State
        "hover:bg-[#333] hover:-translate-y-1 hover:shadow-xl",

        // Active State (while clicking)
        "active:scale-95 active:shadow-sm",

        className
      )}
    >
      <span>{title}</span>
      <RiArrowRightLine
        size={22}
        // Icon Animation on Parent Hover
        className="transition-transform duration-300 ease-in-out group-hover:translate-x-2"
      />
    </button>
  );
}
