import ComponentTransition from "@/common/component/element/ComponentTransition";
import H1 from "@/common/component/element/H1";
import HeroText from "@/common/component/element/HeroText";
import React from "react";
import LatestCard from "./LatestCard";
import BlogCard from "./BlogCard";
import { getAllPosts } from "@/common/lib/blog"; // Import the new function

export default function BlogPage() {
  const allPosts = getAllPosts();
  const latestPost = allPosts[0]; // The first post is the latest
  const otherPosts = allPosts.slice(1); // The rest of the posts

  return (
    <div className="h-auto max-w-[1500px] flex flex-col justify-center px-5 lg:px-10 mb-20 w-full mt-28 md:mt-32 overflow-hidden">
      <div className="w-full relative z-[9]">
        <div className="w-full relative items-start gap-5 mb-10 justify-center grid">
          <div className="flex flex-col w-full items-start justify-start">
            <HeroText texts="From the Convergent Team" className="" />
            <H1
              title="Insights on AI, Automation, and the Future of Business."
              className="text-lg lg:text-xl text-[#7D7F78] !px-0 !tracking-[-0.04em]"
            />
          </div>
        </div>
        <div className="w-full mb-10">
          <h2 className="text-3xl font-bold mb-5">Latest Post</h2>
          <LatestCard latestPost={latestPost} />
        </div>
        <div className="w-full relative overflow-hidden">
          <h2 className="text-3xl font-bold mb-5">All Posts</h2>
          <BlogCard posts={otherPosts} />
        </div>
      </div>
    </div>
  );
}
