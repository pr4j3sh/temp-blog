import fs from "node:fs/promises";
import path from "node:path";

export async function getBlogs() {
  const dirPath = path.join(process.cwd(), "src", "blogs");
  const files = await fs.readdir(dirPath);
  const blogs = files
    .map((f) => {
      const slug = f.split(".")[0];
      const [title, date] = slug.split("_");
      const cleanTitle = title
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
      return { slug, title: cleanTitle, date };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
  return blogs;
}
