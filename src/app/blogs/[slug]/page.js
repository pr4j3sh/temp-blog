import { getBlogs } from "@/lib/utils";
import Link from "next/link";

export default async function Page({ params }) {
  const { slug } = await params;
  const { default: Blog } = await import(`@/blogs/${slug}.md`);

  return (
    <main>
      <Link href="/blogs" className="btns">
        <button className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m9 18l-6-6l6-6l1.4 1.4L6.8 11H21v2H6.8l3.6 3.6z"
            />
          </svg>
        </button>
        <span>Back</span>
      </Link>
      <Blog />
    </main>
  );
}

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs;
}

export const dynamicParams = false;
