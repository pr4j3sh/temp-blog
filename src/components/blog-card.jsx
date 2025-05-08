import Link from "next/link";
import { format } from "date-fns";

export default function BlogCard({ blog }) {
  const date = format(new Date(blog?.date), "MMMM do, yyyy");
  return (
    <article className="card">
      <article className="card-body">
        <Link href={`/blogs/${blog?.slug}`}>
          <b>{blog?.title}</b>
        </Link>
        <p>
          <small>{date}</small>
        </p>
      </article>
    </article>
  );
}
