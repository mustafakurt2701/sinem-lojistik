"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import type { BlogPost } from "@/src/data/blog-posts";
import { BlogCard } from "@/components/blog/blog-card";
import { Input } from "@/components/ui/input";

export function BlogListClient({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState("");

  const filteredPosts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return posts;
    }

    return posts.filter((post) =>
      [post.title, post.description, post.category, ...post.keywords]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery)
    );
  }, [posts, query]);

  return (
    <div className="space-y-8">
      <div className="relative max-w-xl">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Blog içinde rota, şehir veya konu ara"
          className="pl-11"
          aria-label="Blog içinde arama"
        />
      </div>
      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {filteredPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
      {filteredPosts.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-border bg-white p-8 text-sm text-slate-600">
          Aramanızla eşleşen yazı bulunamadı.
        </div>
      ) : null}
    </div>
  );
}
