import { compareDesc } from "date-fns";
import { allBlogs } from "contentlayer/generated";
import BlogCard from "@/components/blog-card";

export default function Home() {
  const blogs = allBlogs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <div className="container flex-col gap-4">
      {blogs.map((blog, idx) => (
        <BlogCard key={idx} {...blog} />
      ))}
    </div>
  );
}
