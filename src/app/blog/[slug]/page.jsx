import H1 from "@/common/component/element/H1";
import Image from "@/common/component/element/Image";
import { getPostBySlug, getAllPosts } from "@/common/lib/blog"; // Your functions are correct
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { notFound } from "next/navigation";

// This function pre-builds all the static pages
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetailPage({ params }) {
  const { slug } = params;
  const blog = await getPostBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="h-auto max-w-[1500px] flex flex-col items-center justify-center mt-20 max-md:px-5 px-10 xl:px-20 pb-10 overflow-hidden">
      <div className="w-full relative z-[9]">
        <div className="flex justify-start w-full mt-20 mb-5">
          <Link
            href="/blog"
            className=" gap-2 hover:gap-5 transition-all duration-300 items-center flex"
          >
            <span>
              <BsArrowLeft size={20} className="" />
            </span>
            Back to blog
          </Link>
        </div>
        <div className="flex justify-start mt-5 relative">
          <H1
            title={blog.title}
            className="lg:!text-6xl !px-0 !text-5xl !text-start"
            textColor="normal"
          />
        </div>
        <div className="w-full mt-5">
          <p className="text-base text-[#7D7F78]">
            By {blog.author} on {blog.date}
          </p>
        </div>
        <div className="flex mt-10 w-full overflow-hidden justify-center items-center flex-col">
          <Image
            src={blog.coverImage}
            alt={blog.title}
            width={1300}
            height={600}
            priority
            className="h-auto md:h-[600px] w-full object-cover rounded-3xl"
          />
        </div>

        <div
          className="
            prose      
            prose-lg   
            max-w-none 
            py-10       
            text-lg    
            prose-headings:text-black
            prose-p:text-gray-700
            prose-strong:text-black
          "
          dangerouslySetInnerHTML={{ __html: blog.contentHtml }}
        />
      </div>
    </div>
  );
}
