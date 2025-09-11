import {
  FaRobot,
  FaSlack,
  FaShopify,
  FaSalesforce,
  FaFileInvoiceDollar,
} from "react-icons/fa";
import { IoAnalyticsSharp } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { SiSap } from "react-icons/si";

// Main services offered by the agency
export const ServicesItem = [
  {
    title: "Custom AI Solutions",
    desc: "We build bespoke AI-powered applications to solve your unique business challenges and drive growth.",
    img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className:
      "w-auto xl:w-[32%] lg:h-[360px] items-start justify-start flex-col",
  },
  {
    title: "Intelligent Workflow Automation",
    desc: "Streamline your operations by automating repetitive tasks, freeing up your team to focus on strategic initiatives.",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className:
      "w-auto xl:w-[32%] lg:h-[360px] items-start justify-start   flex-col",
  },
  {
    title: "AI-Powered Data Analytics",
    desc: "Unlock actionable insights from your data to make smarter, more informed business decisions.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className:
      "w-auto xl:w-[32%] lg:h-[360px] items-start justify-start   flex-col",
  },
];

// Replaces ProFeatureitem - can be used for case studies or client results
export const ShowcaseItem = [
  {
    title: "40% Increase in Lead Conversion",
    desc: "Automated lead nurturing for a leading SaaS company.",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "50+ Hours Saved Weekly",
    desc: "Implemented intelligent document processing for a financial firm.",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "24/7 Customer Support",
    desc: "Developed a custom AI chatbot for an e-commerce brand.",
    img: "https://images.unsplash.com/photo-1556742044-53c853c14a23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// Replaces FeatuePageItem - a gallery of projects or concepts
export const ServicePageItem = [
  {
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    img: "https://images.unsplash.com/photo-1556742044-53c853c14a23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    img: "https://images.unsplash.com/photo-1620712943543-95fc636d847a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// Replaces PackedFeature - now CoreCapabilityItems, highlighting your agency's core strengths
export const CoreCapabilityItems = [
  {
    title: "Process Automation",
    desc: "We identify and automate your most time-consuming business processes, enhancing speed and accuracy.",
    link: {
      title: "Learn More",
      href: "/services/process-automation",
    },
    className: "w-full lg:w-[32%] items-start justify-start flex-col",
    icon: <FaRobot size={40} className="text-[#0D0D0D]" />,
  },
  {
    title: "AI-Powered Analytics",
    link: {
      title: "Learn More",
      href: "/services/analytics",
    },
    desc: "Engage your audience like never before with interactive features that encourage exploration and participation.",
    className: "w-full lg:w-[32%] items-start justify-start flex-col",
    icon: <IoAnalyticsSharp size={40} className="text-[#0D0D0D]" />,
  },
  {
    title: "Natural Language Processing",
    link: {
      title: "Learn More",
      href: "/services/nlp",
    },
    desc: "Implement intelligent systems that can understand, interpret, and respond to human language.",
    className: "w-full lg:w-[32%] items-start justify-start flex-col",
    icon: <AiOutlineMessage size={40} className="text-[#0D0D0D]" />,
  },
];

// Replaces Platformitem - now IntegrationItem, showcasing the business tools you can connect with
// Remember to install react-icons if you haven't: npm install react-icons

export const IntegrationItem = [
  {
    title: "Salesforce",
    desc: "Enhance your CRM with AI-powered lead scoring, automated data entry, and predictive sales forecasting.",
    className: "w-full lg:w-[32%] items-start justify-start ",
    // The icon color is now uniform
    icon: <FaSalesforce size={40} className="text-[#E8E8E8]" />,
  },
  {
    title: "QuickBooks",
    desc: "Automate your financial workflows, from intelligent invoice processing and expense categorization to generating financial reports.",
    className: "w-full lg:w-[32%] items-start justify-start ",
    icon: <FaFileInvoiceDollar size={40} className="text-[#E8E8E8]" />,
  },
  {
    title: "Shopify",
    desc: "Optimize your e-commerce store with AI-driven product recommendations, automated inventory management, and 24/7 customer support bots.",
    className: "w-full lg:w-[32%] items-start justify-start ",
    icon: <FaShopify size={40} className="text-[#E8E8E8]" />,
  },
  {
    title: "Slack",
    desc: "Build custom bots and integrations to streamline team communication, automate internal approvals, and deliver real-time notifications.",
    className: "w-full lg:w-[32%] items-start justify-start ",
    icon: <FaSlack size={40} className="text-[#E8E8E8]" />,
  },
  {
    title: "SAP",
    desc: "Integrate with your ERP to automate complex enterprise processes, from supply chain management to HR and financial operations.",
    className: "w-full lg:w-[32%] items-start justify-start ",
    icon: <SiSap size={40} className="text-[#E8E8E8]" />,
  },
  {
    title: "And Many More...",
    desc: "Our solutions can integrate with hundreds of platforms through custom APIs and middleware.",
    className: "w-full lg:w-[32%] items-start justify-start ",
    icon: <FaRobot size={40} className="text-[#E8E8E8]" />,
  },
];
