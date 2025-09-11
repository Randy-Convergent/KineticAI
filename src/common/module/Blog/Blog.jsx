import H1 from "@/common/component/element/H1";
import SectionText from "@/common/component/element/SectionText";
import React from "react";
import BlogCard from "./components/BlogCard";
import { getAllPosts } from "@common/lib/blog"; // Import the new function

export default function Blog() {
  const allPosts = getAllPosts();

  return (
    <div className="h-auto max-w-[1500px] relative flex flex-col justify-center px-5 lg:px-10 pt-10 w-full">
      <div className="flex w-full  relative justify-center items-center">
        <div className="w-full flex flex-col justify-center items-center">
          <SectionText title="Our Insights" />
          <H1
            title="Actionable articles and resources on AI-driven business transformation."
            className="!text-2xl lg:!text-4xl lg:w-[70%] !text-center"
            textColor="colorShadow"
          />
          <div className="w-full ">
            {/* Displaying the 3 most recent posts */}
            <BlogCard posts={allPosts.slice(0, 3)} />
          </div>
        </div>
      </div>
    </div>
  );
}
