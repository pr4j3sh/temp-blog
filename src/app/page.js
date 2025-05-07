import BlogCard from "@/components/blog-card";
import { getBlogs } from "@/lib/utils";
import Link from "next/link";

export default async function Home() {
  const blogs = (await getBlogs()).slice(0, 3);
  return (
    <main>
      <section>
        <article>
          <b>Hey there,</b>
          <p>
            This is a Blog app template built using NextJs + Tailwind CSS,
            @next/mdx template with router, dark/light theme mode, svg icons
            support with Icones, pre-styled components, fully responsive and SEO
            friendly.
          </p>
        </article>
        <article>
          <p>
            Use this template via <code>@pr4j3sh/frames</code>
          </p>
          <pre>
            <code>npm create @pr4j3sh/frames@latest temp-blog myapp</code>
          </pre>
          <blockquote>
            You can replace <code>myapp</code> with the choice of your name.
          </blockquote>
        </article>
        <article>
          <p>Run the app using</p>
          <pre>
            <code>npm run dev</code>
          </pre>
        </article>
        <article className="btns">
          <Link href="/blogs">
            <button>Read blogs</button>
          </Link>
          <a href="https://github.com/pr4j3sh/temp-blog" target="_blank">
            <button className="secondary">Github</button>
          </a>
        </article>
        <section>
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
        </section>
        <article>
          <b>Read more</b>
          <ul>
            <li>
              <a className="link" href="https://nextjs.org/" target="_blank">
                Next Documentation
              </a>
            </li>
            <li>
              <a
                className="link"
                href="https://nextjs.org/docs/app/guides/mdx"
                target="_blank"
              >
                @next/mdx Documentation
              </a>
            </li>
            <li>
              <a
                className="link"
                href="https://tailwindcss.com/docs/utility-first"
                target="_blank"
              >
                Tailwind CSS Documentation
              </a>
            </li>
            <li>
              <a className="link" href="https://icones.js.org/" target="_blank">
                Icones
              </a>
            </li>
            <li>
              <a
                className="link"
                href="https://github.com/pr4j3sh/frames"
                target="_blank"
              >
                @pr4j3sh/frames
              </a>
            </li>
          </ul>
        </article>
      </section>
    </main>
  );
}
