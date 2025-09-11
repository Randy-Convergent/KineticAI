"use client";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import Image from "@/common/component/element/Image";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function BlogCard({ posts }) {
  return (
    <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
      {posts.map((post, index) => (
        <ComponentTransition
          delay={index * 0.1}
          key={post.slug}
          className="flex group justify-start items-start overflow-hidden flex-col"
        >
          <Link className="w-full" href={`/blog/${post.slug}`}>
            <motion.div
              className="w-full h-[330px] overflow-hidden rounded-3xl"
              whileHover={{ scale: 0.95 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              <Image
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                src={post.coverImage}
                alt={post.title}
                height={400}
                width={400}
                loading="lazy"
              />
            </motion.div>
          </Link>
          <div className="w-full flex flex-col justify-start items-start gap-2 px-2 py-5">
            <p className="text-sm text-[#7D7F78]">{post.date}</p>
            <Link href={`/blog/${post.slug}`}>
              <h1 className="text-2xl group-hover:underline transition-transform duration-700">
                {post.title}
              </h1>
            </Link>
            <p className="mt-2 text-base text-gray-400 line-clamp-3">
              {post.excerpt}
            </p>
          </div>
        </ComponentTransition>
      ))}
    </div>
  );
}
