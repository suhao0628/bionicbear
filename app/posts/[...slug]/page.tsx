import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import Link from "next/link";
import { Metadata } from "next";
import { Mdx } from "@/components/mdx-components";
import { Toc } from "@/components/Toc";

interface PostProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slug);
  return post ?? null;
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);
  return post ? { title: post.title, description: post.description } : {};
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

function extractHeadings(markdown: string) {
  const lines = markdown.split("\n");
  const headings = [];
  const slugMap = new Map<string, number>();

  for (const line of lines) {
    const match = line.match(/^(#{1,6})\s+(.*)/);
    if (!match) continue;

    const level = match[1].length;
    const rawText = match[2].trim();
    let slug = rawText
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");

    const count = slugMap.get(slug) || 0;
    slugMap.set(slug, count + 1);
    if (count > 0) slug = `${slug}-${count}`;

    headings.push({ level, text: rawText, slug });
  }

  return headings;
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params);
  if (!post) notFound();

  const headings = extractHeadings(post.body.raw);

  return (
    <main className="flex flex-col px-4 pt-6 pb-20 max-w-7xl mx-auto">
      <div className="block lg:hidden mb-6 sticky top-0 z-20 bg-white dark:bg-slate-900 px-4 pt-3 pb-1 space-y-2">
        <Link href="/blog" aria-label="返回博客列表" className="inline-block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-600 hover:text-gray-900 transition"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </Link>
        <Toc headings={headings} mobile />
      </div>

      <div className="flex flex-col lg:flex-row w-full">
        <aside className="hidden lg:block w-64 shrink-0 pr-6 mb-8 sticky top-20 self-start max-h-[calc(100vh-5rem)] overflow-y-auto space-y-4">
          <Link href="/blog" aria-label="返回博客列表" className="inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-600 hover:text-gray-900 transition"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </Link>

          <Toc headings={headings} />
        </aside>

        <article className="flex-1 prose dark:prose-invert max-w-none">
          <h1 id="post-title">{post.title}</h1>
          <p className="text-muted-foreground text-sm">{post.description}</p>
          <hr />
          <Mdx code={post.body.code} />
        </article>
      </div>
    </main>
  );
}
