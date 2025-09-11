import ComponentTransition from "@/common/component/element/ComponentTransition";
import H1 from "@/common/component/element/H1";
import React from "react";

export default function Functionalities() {
  return (
    <div className="w-full py-10 flex flex-col">
      <div className="w-full justify-start items-start">
        <H1
          className=" !justify-start !text-3xl text-start "
          title="Powered by Core AI Automation Services"
          textColor="normal"
        />
      </div>
      <div className="w-full py-20">
        <ComponentTransition className="grid  md:grid-cols-2 lg:grid-cols-4 w-full">
          <ComponentTransition className="w-full flex justify-start md:border-e-[1px] md:border-[#727267] px-5 py-4 gap-5 items-start flex-col">
            <H1
              className=" !justify-start !text-2xl text-start "
              title="Intelligent Workflow Automation"
              textColor="normal"
            />
            <H1
              className=" !justify-start !text-base text-start "
              title="We analyze your business processes and implement AI-powered workflows to automate repetitive tasks, boosting efficiency and freeing up your team for more strategic work."
              textColor="normal"
            />
          </ComponentTransition>
          <ComponentTransition
            delay={0.1}
            className="w-full flex justify-start lg:border-e-[1px] lg:border-[#727267] px-5 py-4 gap-5 items-start flex-col"
          >
            <H1
              className=" !justify-start !text-2xl text-start "
              title="Custom AI Chatbot Development"
              textColor="normal"
            />
            <H1
              className=" !justify-start !text-base text-start "
              title="Engage your customers 24/7 with intelligent, conversational AI chatbots designed to handle inquiries, generate leads, and provide instant support."
              textColor="normal"
            />
          </ComponentTransition>
          <ComponentTransition
            delay={0.1}
            className="w-full flex justify-start md:border-e-[1px] md:border-[#727267] px-5 py-4 gap-5 items-start flex-col"
          >
            <H1
              className=" !justify-start !text-2xl text-start "
              title="Data-Driven Decision Making"
              textColor="normal"
            />
            <H1
              className=" !justify-start !text-base text-start "
              title="Leverage the power of your data. We implement AI systems that provide predictive analytics and actionable insights to inform your business strategy."
              textColor="normal"
            />
          </ComponentTransition>
          <ComponentTransition
            delay={0.1}
            className="w-full flex justify-start  px-5 py-4 gap-5 items-start flex-col"
          >
            <H1
              className=" !justify-start !text-2xl text-start "
              title="Personalized Marketing Automation"
              textColor="normal"
            />
            <H1
              className=" !justify-start !text-base text-start "
              title="Deliver tailored experiences to your customers. We use AI to automate and personalize your marketing campaigns, improving engagement and conversion rates. [1]"
              textColor="normal"
            />
          </ComponentTransition>
        </ComponentTransition>
      </div>
    </div>
  );
}
