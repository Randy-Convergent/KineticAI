import ButtonArrow from "@/common/component/element/ButtonArrow";
import ComponentTransition from "@/common/component/element/ComponentTransition";
import Image from "@/common/component/element/Image";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

export default function LatestCard({ latestPost }) {
  if (!latestPost) return null;

  return (
    <div className="w-full">
      <ComponentTransition
        className={clsx(
          ` group flex py-5 justify-center h-[500px] relative overflow-hidden object-cover rounded-[40px]`
        )}
      >
        <Link href={`/blog/${latestPost.slug}`} className="w-full ">
          <Image
            className="w-full h-full group-hover:scale-105 transition-transform duration-500 overflow-hidden absolute inset-0 object-cover"
            src={latestPost.coverImage}
            alt={latestPost.title}
            width={800}
            height={800}
            priority
          />
          <div className="relative flex justify-end w-[80%] md:w-[60%] xl:w-[40%] h-full right-0 px-5 ">
            <div className="py-10 px-5 overflow-hidden relative z-[9] bg-gradient-to-b from-[#1F1F1F] to-[#141414] to-95% border-[1px] border-[#262626] flex flex-col justify-between items-start w-full rounded-[35px]">
              <div className="w-full ">
                <div className="w-full mt-2">
                  <h1 className="text-sm text-[#fffff7be]">
                    {latestPost.date}
                  </h1>
                </div>
                <div className="w-full">
                  <h1 className="lg:text-4xl text-2xl text-start text-[#FFFFF7] font-semibold">
                    {latestPost.title}
                  </h1>
                </div>
                <p className="mt-4 text-lg text-[#fffff7be] line-clamp-3">
                  {latestPost.excerpt}
                </p>
              </div>
              <div className="w-full">
                <div className="mt-5 lg:mt-10 w-full flex flex-row flex-wrap gap-2">
                  {latestPost.tags?.map((tag) => (
                    <div
                      key={tag}
                      className=" outline flex justify-center items-center rounded-full outline-[#fffff7be] outline-[1px] w-auto"
                    >
                      <h1 className="text-sm text-[#fffff7be] px-5 py-1">
                        {tag}
                      </h1>
                    </div>
                  ))}
                </div>
                <div className="w-full flex items-end mt-16">
                  <ButtonArrow title="Read More" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </ComponentTransition>
    </div>
  );
}
