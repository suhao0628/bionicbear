import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"

export default function BlogPage() {
  return (
    <main className="flex justify-center px-4 pt-4 pb-20">
      <div className="w-full max-w-3xl">
        <div className="prose dark:prose-invert">
          {allPosts.map((post) => (
            <article key={post._id}>
              <Link href={post.slug}>
                <h2>{post.title}</h2>
              </Link>
              {post.description && <p>{post.description}</p>}
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
