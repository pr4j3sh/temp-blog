import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section>
        <article>
          <p className="font-semibold">Hey there,</p>
          <p>
            This is NextJs + Tailwind CSS template with router, dark/light theme
            mode, svg icons support with Icones, pre-styled components, fully
            responsive and SEO friendly.
          </p>
        </article>
        <article>
          <p>
            Use this template via <code>@pr4j3sh/frames</code>
          </p>
          <pre>
            <code>npm create @pr4j3sh/frames@latest next-tw myapp</code>
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
        <Link href="/blog/welcome">
          <button>Get Started</button>
        </Link>
        <article>
          <p className="font-semibold">Read more</p>
          <ul>
            <li>
              <a className="link" href="https://nextjs.org/" target="_blank">
                Next Documentation
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
