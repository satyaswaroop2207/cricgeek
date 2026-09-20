"use client";

import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import AdSlot from "@/components/ads/AdSlot";
import { Community, Post } from "../../../mockData";

export default function PostDetailClient({ community, post }: { community: Community; post: Post }) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.08),transparent_40%),linear-gradient(180deg,#060606,#0a0a0a)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div className="mb-6">
          <Link href={`/communities/${community.slug}`} className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-cg-green transition-all">
            <ArrowLeft size={16} /> Back to {community.name}
          </Link>
        </div>

        <div className="xl:grid xl:grid-cols-[150px_1fr_300px] xl:gap-8 flex flex-col">
          
          <aside className="hidden xl:flex flex-col gap-6 sticky top-24 h-max">
            {/* Breathing room for left rail in reading view */}
          </aside>

          <main className="flex-1 w-full max-w-3xl mx-auto flex flex-col gap-8">
            <article className="bg-white/[0.02] border border-gray-800 rounded-3xl p-6 sm:p-10 shadow-sm">
              <div className="mb-8">
                <div className="inline-flex rounded-full border border-cg-green/20 bg-cg-green/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-cg-green mb-4">
                  {post.category}
                </div>
                <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-6 leading-tight">
                  {post.title}
                </h1>
                
                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 border-t border-b border-gray-800 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-cg-dark-2 border border-gray-700 flex items-center justify-center text-xs font-bold text-cg-green">
                      {post.author.charAt(0).toUpperCase()}
                    </div>
                    <span className="font-semibold text-gray-200">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                  <div className="text-gray-500">
                    {post.readTime}
                  </div>
                </div>
              </div>

              <div className="max-w-none">
                <p className="text-lg text-gray-300 font-medium mb-8 leading-relaxed">
                  {post.summary}
                </p>
                
                {post.content ? (
                  post.content.map((paragraph, idx) => (
                    <p key={idx} className="text-gray-400 leading-loose mb-6 text-base tracking-wide">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p className="text-gray-500 italic">No full content provided for this post.</p>
                )}
              </div>
            </article>
            
            <div className="xl:hidden w-full flex justify-center my-4">
               <AdSlot slot="post-detail-mobile-1" size="mobile-banner" placeholder />
            </div>

          </main>

          <aside className="hidden xl:flex flex-col gap-6 sticky top-24 h-max">
            <AdSlot slot="post-detail-right-1" size="rectangle" placeholder />
            <AdSlot slot="post-detail-right-2" size="half-page" placeholder />
          </aside>
          
        </div>
      </div>
    </div>
  );
}
