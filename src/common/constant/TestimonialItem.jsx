import { FaStar } from "react-icons/fa";
// Import new, more professional icons
import { IoBusinessOutline } from "react-icons/io5";
import { HiOutlineSpeakerphone, HiOutlineChartPie } from "react-icons/hi";
import { GoGear } from "react-icons/go";
import { BsGraphUpArrow } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

const stars = Array.from({ length: 5 }, (_, index) => (
  <FaStar key={index} size={20} className="!text-yellow-500" />
));

export const TestimonialItem = [
  {
    name: "Mark Chen",
    testi:
      "Working with Kinetic was a pivotal moment for our operations. Their AI solution automated over 20 hours of manual data entry a week, freeing up our team to focus on strategic growth. The efficiency gains were immediate and substantial.",
    className:
      "w-full lg:w-[400px] lg:h-[400px] items-start justify-start flex-col",
    icon: <GoGear size={50} className="text-[#7D7F78]" />,
    jobTitle: "COO, Innovate Logistics",
    star: stars,
  },
  {
    name: "Laura Evans",
    testi:
      "Kinetic's marketing automation is phenomenal. We've seen a 40% increase in qualified leads since implementing their AI-powered nurturing system. It's like having a marketing strategist working for us 24/7.",
    className:
      "w-full lg:w-[400px] lg:h-[400px] items-start justify-start flex-col",
    icon: <HiOutlineSpeakerphone size={50} className="text-[#7D7F78]" />,
    jobTitle: "Marketing Director, Summit Retail",
    star: stars,
  },
  {
    name: "David Kim",
    testi:
      "As a startup founder, every minute counts. Kinetic built a custom workflow that automated our entire client onboarding process. This has allowed us to scale rapidly without compromising on the customer experience. A true game-changer.",
    className:
      "w-full lg:w-[400px] lg:h-[400px] items-start justify-start flex-col",
    icon: <BsGraphUpArrow size={50} className="text-[#7D7F78]" />,
    jobTitle: "CEO, Apex Financial Tech",
    star: stars,
  },
  {
    name: "Samantha Patel",
    testi:
      "The AI-driven analytics dashboard Kinetic developed for us provides insights we never thought possible. Our decision-making is now faster, smarter, and backed by real-time data. The ROI was clear within the first quarter.",
    className:
      "w-full lg:w-[400px] lg:h-[400px] items-start justify-start flex-col",
    icon: <HiOutlineChartPie size={50} className="text-[#7D7F78]" />,
    jobTitle: "Head of Analytics, Horizon Media",
    star: stars,
  },
  {
    name: "Brian Miller",
    testi:
      "Our customer support response times have been slashed by 60% thanks to the AI chatbot and ticketing system from Kinetic. Customer satisfaction is at an all-time high, and our support team can now handle more complex issues.",
    className:
      "w-full lg:w-[400px] lg:h-[400px] items-start justify-start flex-col",
    icon: <BiSupport size={50} className="text-[#7D7F78]" />,
    jobTitle: "VP of Customer Experience, CareFirst Health",
    star: stars,
  },
  {
    name: "Rachel Garcia",
    testi:
      "The team at Kinetic are not just developers; they are true strategic partners. They took the time to deeply understand our business before proposing a solution. Their professionalism and expertise are second to none.",
    className:
      "w-full lg:w-[400px] lg:h-[400px] items-start justify-start flex-col",
    icon: <IoBusinessOutline size={50} className="text-[#7D7F78]" />,
    jobTitle: "Owner, Garcia Manufacturing",
    star: stars,
  },
];
