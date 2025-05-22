import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"
import Link from "next/link"
import { Metadata } from "next"
import { Mdx } from "@/components/mdx-components"

interface PostProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/")
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    return null
  }

  return post
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
  }
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }))
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  return (
    <main className="flex px-4 pt-6 pb-20 max-w-7xl mx-auto">
        {/* 左侧：目录 + 返回按钮 */}
        <aside className="w-64 shrink-0 pr-6 sticky top-20 self-start space-y-6">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border hover:bg-muted transition"
          >
            ←
          </Link>

          <nav className="space-y-2 text-sm">
            <h2 className="font-bold">目录</h2>
            
          </nav>
        </aside>

        {/* 右侧：文章内容 */}
        <article className="flex-1 prose dark:prose-invert max-w-none">
          <h1 id="post-title">{post.title}</h1>
          <p className="text-muted-foreground text-sm">{post.description}</p>
          <hr />
          <Mdx code={post.body.code} />
        </article>
      </main>

  )
}
