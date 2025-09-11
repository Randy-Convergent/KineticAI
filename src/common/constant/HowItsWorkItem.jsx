import {
  HiOutlineChatAlt2,
  HiOutlineClipboardList,
  HiOutlineCog,
} from "react-icons/hi";

export const HowItsWorkItem = [
  {
    title: "1. Discovery & Consultation",
    desc: "We start by understanding your business, identifying your biggest challenges and opportunities for automation.",
    className: "w-full xl:w-[32%] h-[300px] items-start justify-start flex-col",
    icon: <HiOutlineChatAlt2 size={40} className="text-[#E8E8E8]" />,
  },
  {
    title: "2. Strategy & Solution Design",
    desc: "Our experts design a bespoke AI strategy and a clear roadmap for a solution tailored to your specific needs.",
    className: "w-full xl:w-[32%] h-[300px] items-start justify-start flex-col",
    icon: <HiOutlineClipboardList size={40} className="text-[#E8E8E8]" />,
  },
  {
    title: "3. Implementation & Integration",
    desc: "We build and seamlessly integrate the AI solution into your existing workflow with minimal disruption.",
    className: "w-full xl:w-[32%] h-[300px] items-start justify-start flex-col",
    icon: <HiOutlineCog size={40} className="text-[#E8E8E8]" />,
  },
];
