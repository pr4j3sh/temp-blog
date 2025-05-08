import BlogCard from "@/components/blog-card";
import { getBlogs } from "@/lib/utils";

export default async function Page() {
  const blogs = await getBlogs();
  return (
    <main>
      <b>Recent blogs</b>
      <section>
        {blogs.length > 0 ? (
          blogs.map((b) => {
            return <BlogCard key={b?.slug} blog={b} />;
          })
        ) : (
          <p>No blogs to show.</p>
        )}
      </section>
    </main>
  );
}
