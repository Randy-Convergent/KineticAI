import BlogPage from "@/common/module/Blog/components/BlogPage";
import React from "react";

export const metadata = {
  title: "Blog - Kinetic",
  description: "Kinetic Blog Page",
};

export default function page() {
  return (
    <div className="w-full flex justify-center items-center">
      <BlogPage />
    </div>
  );
}
