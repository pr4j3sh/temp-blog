import Link from "next/link";

export default function BlogCard({ blog }) {
  return (
    <article className="card">
      <article className="card-body">
        <Link href={`/blogs/${blog?.slug}`}>
          <b>{blog?.title}</b>
        </Link>
        <p>
          <small>{blog?.date}</small>
        </p>
      </article>
    </article>
  );
}
