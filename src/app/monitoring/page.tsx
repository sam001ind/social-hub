"use client";

import { Search, Plus, Filter, MoreVertical, Twitter, RefreshCw, MessageSquare } from "lucide-react";

export default function MonitoringPage() {
  const streams = [
    {
      id: 1,
      title: "Brand Mentions",
      keyword: "@techcorp",
      platform: "Twitter",
      icon: Twitter,
      color: "text-sky-500",
      posts: [
        { id: 101, user: "DevInsider", handle: "@devinsider", time: "5m", text: "Just tried out @techcorp's new enterprise feature. Game changer for our dev team! 🚀" },
        { id: 102, user: "Sarah J.", handle: "@sarahj", time: "1h", text: "Can anyone recommend a good SMMP? Looking at @techcorp right now." },
      ]
    },
    {
      id: 2,
      title: "Industry Keywords",
      keyword: "#SocialMediaMarketing",
      platform: "Twitter",
      icon: Twitter,
      color: "text-sky-500",
      posts: [
        { id: 201, user: "MarketingPro", handle: "@mktgpro", time: "12m", text: "What's the best time to post on LinkedIn in 2026? #SocialMediaMarketing" },
        { id: 202, user: "AgencyLife", handle: "@agencylife", time: "45m", text: "We just published our Q3 report on engagement trends. #SocialMediaMarketing #Digital" },
        { id: 203, user: "TechNews", handle: "@technews", time: "2h", text: "AI is reshaping how we handle #SocialMediaMarketing." },
      ]
    },
    {
      id: 3,
      title: "Competitor Tracking",
      keyword: "@competitorapp",
      platform: "Twitter",
      icon: Twitter,
      color: "text-sky-500",
      posts: [
        { id: 301, user: "UnhappyCustomer", handle: "@user123", time: "30m", text: "@competitorapp is down again?! This is the 3rd time this week. Unacceptable." },
      ]
    }
  ];

  return (
    <div className="h-full flex flex-col -m-6">
      <div className="px-6 py-4 border-b border-slate-200 bg-white flex justify-between items-center shrink-0">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Monitoring & Listening</h1>
          <p className="text-sm text-slate-500">Track brand mentions, industry keywords, and competitors in real-time.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-3 py-2 border border-slate-200 bg-white text-slate-700 rounded-lg hover:bg-slate-50 transition-colors shadow-sm text-sm font-medium">
            <Filter className="h-4 w-4" />
            Manage Columns
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm font-medium">
            <Plus className="h-4 w-4" />
            Add Stream
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-x-auto p-6 bg-slate-100 flex gap-6 custom-scrollbar items-start">
        {streams.map(stream => (
          <div key={stream.id} className="w-80 shrink-0 flex flex-col bg-slate-100 h-full max-h-full">
            <div className="bg-white rounded-t-xl border border-slate-200 border-b-0 p-3 flex justify-between items-center shrink-0 shadow-sm">
              <div className="flex items-center gap-2">
                <stream.icon className={`h-4 w-4 ${stream.color}`} />
                <div>
                  <h3 className="font-bold text-sm text-slate-900 leading-tight">{stream.title}</h3>
                  <p className="text-xs text-slate-500">{stream.keyword}</p>
                </div>
              </div>
              <div className="flex gap-1 text-slate-400">
                <button className="p-1 hover:text-slate-700 hover:bg-slate-100 rounded transition-colors tooltip-trigger" title="Refresh">
                  <RefreshCw className="h-3.5 w-3.5" />
                </button>
                <button className="p-1 hover:text-slate-700 hover:bg-slate-100 rounded transition-colors tooltip-trigger" title="Options">
                  <MoreVertical className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto bg-slate-50 border border-slate-200 rounded-b-xl shadow-inner custom-scrollbar p-2 space-y-2">
              {stream.posts.map(post => (
                <div key={post.id} className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm hover:border-indigo-300 transition-colors cursor-pointer group">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-slate-200 overflow-hidden shrink-0">
                        <img src={`https://ui-avatars.com/api/?name=${post.user}&background=random`} alt={post.user} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 leading-none">{post.user}</h4>
                        <span className="text-xs text-slate-500">{post.handle}</span>
                      </div>
                    </div>
                    <span className="text-xs text-slate-400">{post.time}</span>
                  </div>
                  <p className="text-sm text-slate-700 mb-3">{post.text}</p>
                  
                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 opacity-60 group-hover:opacity-100 transition-opacity">
                    <button className="text-xs flex items-center gap-1 text-slate-500 hover:text-indigo-600 transition-colors">
                      <MessageSquare className="h-3.5 w-3.5" /> Reply
                    </button>
                    <button className="text-xs text-slate-500 hover:text-indigo-600 transition-colors">
                      Retweet
                    </button>
                    <button className="text-xs text-slate-500 hover:text-pink-600 transition-colors">
                      Like
                    </button>
                  </div>
                </div>
              ))}
              
              {stream.posts.length === 0 && (
                <div className="text-center py-8 text-slate-400 text-sm">
                  No recent activity found.
                </div>
              )}
            </div>
          </div>
        ))}
        
        {/* Add new stream column placeholder */}
        <div className="w-80 shrink-0 h-full border-2 border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center text-slate-500 cursor-pointer hover:bg-slate-50 hover:border-indigo-400 transition-colors">
          <Plus className="h-8 w-8 mb-2 text-indigo-400" />
          <span className="font-medium text-sm">Add New Stream</span>
        </div>
      </div>
    </div>
  );
}
