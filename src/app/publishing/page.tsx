"use client";

import { Plus, Search, Filter, Calendar, Clock, CheckCircle2, AlertCircle, Edit2, Trash2, MoreVertical } from "lucide-react";
import { useState } from "react";
import UniversalComposer from "@/components/publishing/UniversalComposer";

export default function PublishingPage() {
  const [isComposerOpen, setIsComposerOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('scheduled');

  const posts = {
    scheduled: [
      { id: 1, content: "🚀 We are thrilled to announce the launch of our new enterprise features! #TechLaunch #Enterprise", platforms: ["Facebook", "LinkedIn"], time: "Tomorrow, 10:00 AM", author: "Sarah J.", status: "scheduled" },
      { id: 2, content: "Behind the scenes at TechCorp headquarters. Our engineering team working hard on the next update 💻✨", platforms: ["Instagram"], time: "Jun 15, 2:30 PM", author: "Mike T.", status: "scheduled" },
    ],
    drafts: [
      { id: 3, content: "Here are 5 reasons why you should upgrade to the new system...", platforms: ["LinkedIn"], time: "No date set", author: "Sarah J.", status: "draft" },
    ],
    published: [
      { id: 4, content: "Happy Friday! What's everyone working on this weekend?", platforms: ["X", "Facebook"], time: "Yesterday, 9:00 AM", author: "Admin", status: "published", likes: 124, comments: 45 },
    ],
    failed: [
      { id: 5, content: "Quick update on our API incident earlier today...", platforms: ["X"], time: "Today, 8:00 AM", author: "DevTeam", status: "failed", error: "Rate limit exceeded" },
    ]
  };

  const getActivePosts = () => {
    switch (activeTab) {
      case 'drafts': return posts.drafts;
      case 'published': return posts.published;
      case 'failed': return posts.failed;
      default: return posts.scheduled;
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6 h-full flex flex-col">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Publishing</h1>
          <p className="text-slate-500">Manage your drafts, scheduled posts, and publishing history.</p>
        </div>
        <button 
          onClick={() => setIsComposerOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm font-medium"
        >
          <Plus className="h-4 w-4" />
          New Post
        </button>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm flex-1 flex flex-col overflow-hidden">
        {/* Toolbar */}
        <div className="px-6 py-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex space-x-1 bg-slate-100 p-1 rounded-lg">
            <button 
              onClick={() => setActiveTab('drafts')}
              className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${activeTab === 'drafts' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Drafts <span className="ml-1 text-xs text-slate-400">({posts.drafts.length})</span>
            </button>
            <button 
              onClick={() => setActiveTab('scheduled')}
              className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${activeTab === 'scheduled' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Scheduled <span className="ml-1 text-xs text-slate-400">({posts.scheduled.length})</span>
            </button>
            <button 
              onClick={() => setActiveTab('published')}
              className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${activeTab === 'published' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Published
            </button>
            <button 
              onClick={() => setActiveTab('failed')}
              className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors ${activeTab === 'failed' ? 'bg-white text-red-600 shadow-sm' : 'text-slate-600 hover:text-red-600'}`}
            >
              Failed <span className="ml-1 text-xs text-slate-400">({posts.failed.length})</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search posts..."
                className="w-full sm:w-64 rounded-md border border-slate-200 bg-white py-2 pl-9 pr-4 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <button className="p-2 border border-slate-200 rounded-md text-slate-600 hover:bg-slate-50 tooltip-trigger" title="Filter">
              <Filter className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Post List */}
        <div className="flex-1 overflow-y-auto p-6 bg-slate-50">
          <div className="space-y-4">
            {getActivePosts().map(post => (
              <div key={post.id} className="bg-white rounded-lg border border-slate-200 p-5 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      {post.platforms.map(p => (
                        <span key={p} className="text-xs font-semibold px-2 py-1 rounded bg-slate-100 text-slate-600">{p}</span>
                      ))}
                      <span className="text-slate-300">•</span>
                      <span className="text-sm font-medium text-slate-500 flex items-center gap-1">
                        {post.status === 'scheduled' && <Clock className="h-3 w-3 text-amber-500" />}
                        {post.status === 'draft' && <Edit2 className="h-3 w-3 text-slate-400" />}
                        {post.status === 'published' && <CheckCircle2 className="h-3 w-3 text-emerald-500" />}
                        {post.status === 'failed' && <AlertCircle className="h-3 w-3 text-red-500" />}
                        {post.time}
                      </span>
                    </div>
                    <p className="text-slate-800 whitespace-pre-wrap">{post.content}</p>
                    
                    {post.error && (
                      <div className="mt-3 p-2 bg-red-50 border border-red-100 rounded text-sm text-red-700 flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" /> Error: {post.error}
                      </div>
                    )}
                    
                    {post.status === 'published' && (
                      <div className="mt-4 flex items-center gap-4 text-sm text-slate-500">
                        <span className="font-medium">❤️ {post.likes}</span>
                        <span className="font-medium">💬 {post.comments}</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded transition-colors">
                      <Edit2 className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded transition-colors">
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-slate-200 overflow-hidden">
                      <img src={`https://ui-avatars.com/api/?name=${post.author}&background=random`} alt={post.author} />
                    </div>
                    <span className="text-xs text-slate-500">Created by <span className="font-medium text-slate-700">{post.author}</span></span>
                  </div>
                  
                  {post.status === 'failed' && (
                    <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">Retry Now</button>
                  )}
                </div>
              </div>
            ))}
            
            {getActivePosts().length === 0 && (
              <div className="text-center py-12">
                <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-6 w-6 text-slate-400" />
                </div>
                <h3 className="text-lg font-medium text-slate-900 mb-1">No posts found</h3>
                <p className="text-slate-500">You don&apos;t have any {activeTab} posts right now.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {isComposerOpen && <UniversalComposer onClose={() => setIsComposerOpen(false)} />}
    </div>
  );
}
