import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="flex justify-center px-4 pt-4 pb-20">
      <div className="w-full max-w-3xl">
        <div className="prose dark:prose-invert prose-a:no-underline">
          {allPosts.map((post) => (
            <article key={post._id} className="mb-8">
              <Link href={post.slug}>
                <h2 className="mb-1 text-black dark:text-white no-underline hover:text-purple-600 transition-colors cursor-pointer">
                  {post.title}
                </h2>
              </Link>
              <p className="text-sm text-muted-foreground mb-1 flex flex-wrap items-center gap-x-2">
                <span>
                  {new Intl.DateTimeFormat("ru-RU").format(new Date(post.date))}
                </span>
                {post.description && (
                  <>
                    <span className="text-gray-400">|</span>
                    <span>{post.description}</span>
                  </>
                )}
              </p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
