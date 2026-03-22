import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3 } from "lucide-react";

import type { BlogPost } from "@/src/data/blog-posts";
import { Card, CardContent } from "@/components/ui/card";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Card className="overflow-hidden border-primary/10">
      <div className="relative aspect-[16/9]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
          <span>{post.category}</span>
          <span>{new Date(post.publishedAt).toLocaleDateString("tr-TR")}</span>
          <span className="inline-flex items-center gap-1">
            <Clock3 className="h-3.5 w-3.5" />
            {post.readingTime}
          </span>
        </div>
        <h3 className="mt-4 text-xl font-semibold tracking-tight text-primary">
          {post.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{post.description}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary"
        >
          Yazıyı oku
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
}
