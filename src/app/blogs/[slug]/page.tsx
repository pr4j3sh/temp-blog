import { format, parseISO } from "date-fns";
import { allBlogs } from "contentlayer/generated";

export const generateStaticParams = async () =>
  allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath }));

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  if (!blog) throw new Error(`Blog not found for slug: ${params.slug}`);
  return { title: blog.title };
};

const BlogLayout = ({ params }: { params: { slug: string } }) => {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  if (!blog) throw new Error(`Blog not found for slug: ${params.slug}`);

  return (
    <article className="container flex-col gap-4">
      <div className="mb-8 flex flex-col gap-1">
        <time dateTime={blog.date} className="text-xs text-gray-600">
          {format(parseISO(blog.date), "LLLL d, yyyy")}
        </time>
        <h1>{blog.title}</h1>
        <p>{blog.description}</p>
      </div>
      <div
        className="[&>*]:mb-3 [&>*:last-child]:mb-0"
        dangerouslySetInnerHTML={{ __html: blog.body.html }}
      />
    </article>
  );
};

export default BlogLayout;
