import Link from "next/link";
import { format, parseISO } from "date-fns";
import { Blog } from "contentlayer/generated";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function BlogCard(blog: Blog) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Link href={blog.url}>{blog.title}</Link>
        </CardTitle>
        <CardDescription>{blog.description}</CardDescription>
      </CardHeader>
      <CardFooter>
        <time dateTime={blog.date} className="mb-2 block text-xs text-gray-600">
          {format(parseISO(blog.date), "LLLL d, yyyy")}
        </time>
      </CardFooter>
    </Card>
  );
}
