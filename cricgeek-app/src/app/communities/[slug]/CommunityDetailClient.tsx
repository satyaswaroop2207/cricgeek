"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { Users, FileText, Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import AdSlot from "@/components/ads/AdSlot";
import { Community, SAMPLE_POSTS } from "../mockData";

interface UserSession {
  id: string;
  name: string;
  email: string;
  role: string;
}

function formatNumber(num: number): string {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
  return num.toString();
}

export default function CommunityDetailClient({ community }: { community: Community }) {
  const { data: session } = useSession();
  const user = (session?.user as UserSession | undefined) ?? null;
  const [joined, setJoined] = useState(false);

  // Derive matching posts utilizing the mocked data structure
  const posts = SAMPLE_POSTS.filter(p => p.communitySlug === community.slug);
  
  // Checking for non-reader role as per CricGeek's auth pattern
  const isWriter = !!user && user.role !== "user";

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.08),transparent_40%),linear-gradient(180deg,#060606,#0a0a0a)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div className="mb-6">
          <Link href="/communities" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-cg-green transition-all">
            <ArrowLeft size={16} /> Back to Communities
          </Link>
        </div>

        <div className="xl:grid xl:grid-cols-[300px_1fr_300px] xl:gap-8 flex flex-col">
          
          <aside className="hidden xl:flex flex-col gap-6 sticky top-24 h-max">
            <AdSlot slot="community-detail-left-1" size="rectangle" placeholder />
          </aside>

          <main className="flex-1 w-full max-w-4xl mx-auto flex flex-col gap-8">
            
            {/* Community Header Block */}
            <section className="bg-[linear-gradient(160deg,rgba(17,17,17,0.95),rgba(12,28,18,0.9))] border border-gray-800 rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
                <div>
                  <div className="inline-flex rounded-full border border-cg-green/20 bg-cg-green/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-cg-green mb-3">
                    {community.topic}
                  </div>
                  <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white mb-2">{community.name}</h1>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl">
                    {community.description}
                  </p>
                  
                  <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Users size={18} className="text-gray-500" />
                      <span><strong className="text-white text-base">{formatNumber(community.followers)}</strong> Members</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText size={18} className="text-gray-500" />
                      <span><strong className="text-white text-base">{formatNumber(community.posts)}</strong> Posts</span>
                    </div>
                  </div>
                </div>

                {isWriter && (
                  <div className="min-w-[140px]">
                    <button 
                      onClick={() => setJoined(!joined)}
                      className={`w-full py-3 px-6 rounded-xl text-sm font-bold transition-all ${
                        joined 
                          ? "bg-gray-800 text-white border border-gray-700 hover:bg-gray-700"
                          : "bg-cg-green text-black hover:bg-cg-green-dark"
                      }`}
                    >
                      {joined ? "Joined" : "Join Community"}
                    </button>
                  </div>
                )}
              </div>
            </section>
            
            {/* Mobile Banner */}
            <div className="xl:hidden w-full flex justify-center my-2">
              <AdSlot slot="community-detail-mobile-1" size="mobile-banner" placeholder />
            </div>

            {/* Popular Writers Line up */}
            <section className="bg-white/[0.02] border border-gray-800 rounded-3xl p-6">
               <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Popular Writers</h2>
               <div className="flex flex-wrap gap-4">
                 {community.topWriters.map((writer) => (
                    <div key={writer.id} className="flex items-center gap-3 bg-black/40 border border-gray-800 px-4 py-2 rounded-full">
                      <div className="w-8 h-8 rounded-full bg-cg-dark-2 border border-gray-700 flex items-center justify-center text-xs font-bold text-cg-green">
                        {writer.name.charAt(0).toUpperCase()}
                      </div>
                      <span className="text-sm font-medium text-white">{writer.name}</span>
                    </div>
                  ))}
               </div>
            </section>

            {/* Discussions / Related Content */}
            <section className="flex flex-col gap-5">
              <h2 className="text-lg font-bold uppercase tracking-wider text-gray-300 px-2 mt-4">
                Community Discussions
              </h2>

              {posts.length > 0 ? (
                posts.map(post => (
                  <Link 
                    key={post.id} 
                    href={`/communities/${community.slug}/posts/${post.id}`}
                    className="block rounded-2xl border border-gray-800 bg-black/30 p-5 hover:border-gray-700 transition-all focus-visible:ring-2 focus-visible:ring-cg-green outline-none"
                  >
                    <article>
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-semibold uppercase tracking-widest text-cg-green">{post.category}</span>
                        <span className="text-xs text-gray-500 flex items-center gap-1"><Calendar size={12}/> {post.date}</span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{post.title}</h3>
                      <p className="text-sm text-gray-400 mb-4">{post.summary}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span className="font-medium text-gray-300">By {post.author}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </article>
                  </Link>
                ))
              ) : (
                <div className="rounded-3xl border border-dashed border-gray-700 bg-white/[0.01] p-12 text-center text-gray-500">
                  <FileText size={40} className="mx-auto mb-4 opacity-50" />
                  <p>No recent discussions found nicely mapped for this community.</p>
                </div>
              )}
            </section>
          </main>

          <aside className="hidden xl:flex flex-col gap-6 sticky top-24 h-max">
            <AdSlot slot="community-detail-right-1" size="rectangle" placeholder />
            <AdSlot slot="community-detail-right-2" size="half-page" placeholder />
          </aside>
          
        </div>
      </div>
    </div>
  );
}
