export default async function Page({ params }) {
  const { slug } = await params;
  const { default: Blog } = await import(`@/blogs/${slug}.md`);

  return (
    <section>
      <Blog />
    </section>
  );
}

export function generateStaticParams() {
  return [{ slug: "welcome" }];
}

export const dynamicParams = false;
