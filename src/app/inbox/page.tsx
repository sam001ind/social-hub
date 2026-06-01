"use client";

import { MessageSquare, Twitter, Facebook, Instagram, Linkedin, Search, Filter, MoreVertical, Reply, CheckCircle2, CornerDownRight } from "lucide-react";
import { useState } from "react";

export default function InboxPage() {
  const [activeMsg, setActiveMsg] = useState(1);
  const [replyText, setReplyText] = useState("");

  const messages = [
    { id: 1, user: 'Sarah Jenkins', handle: '@sarahj', platform: 'Twitter', icon: Twitter, color: 'text-sky-500', time: '10m ago', text: 'Do you offer enterprise pricing for the new tool? Looking to deploy this across 50 team members.', status: 'unread' },
    { id: 2, user: 'TechReview Blog', handle: 'techreview', platform: 'LinkedIn', icon: Linkedin, color: 'text-blue-700', time: '1h ago', text: 'Great launch today! Would love to schedule a quick interview with your founder.', status: 'read' },
    { id: 3, user: 'Mark D.', handle: 'markd123', platform: 'Facebook', icon: Facebook, color: 'text-blue-600', time: '3h ago', text: 'I am having trouble connecting my instagram account. It keeps giving me an OAuth error.', status: 'escalated' },
    { id: 4, user: 'DesignStudio', handle: '@design_hq', platform: 'Instagram', icon: Instagram, color: 'text-pink-600', time: 'Yesterday', text: 'Love the new UI! 🔥🔥🔥', status: 'read' },
  ];

  return (
    <div className="h-full flex flex-col -m-6"> {/* Negative margin to fill main area entirely */}
      <div className="px-6 py-4 border-b border-slate-200 bg-white flex justify-between items-center shrink-0">
        <div>
          <h1 className="text-xl font-bold text-slate-900">Unified Inbox</h1>
          <p className="text-sm text-slate-500">Manage all your messages, comments, and mentions.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 text-sm font-medium bg-slate-100 text-slate-700 rounded-md hover:bg-slate-200">
            Mark all read
          </button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Pane: Filters & Channels */}
        <div className="w-64 border-r border-slate-200 bg-slate-50 flex flex-col hidden md:flex shrink-0">
          <div className="p-4 border-b border-slate-200">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Smart Views</h3>
            <div className="space-y-1">
              <button className="w-full flex justify-between items-center px-3 py-2 bg-indigo-100 text-indigo-700 rounded-md font-medium text-sm">
                <span>All Messages</span>
                <span className="bg-indigo-200 text-indigo-800 text-xs px-2 py-0.5 rounded-full">12</span>
              </button>
              <button className="w-full flex justify-between items-center px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-md font-medium text-sm">
                <span>Unread</span>
                <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full">4</span>
              </button>
              <button className="w-full flex justify-between items-center px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-md font-medium text-sm">
                <span>Assigned to me</span>
              </button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Networks</h3>
            <div className="space-y-1">
              <label className="flex items-center gap-3 px-3 py-2 hover:bg-slate-100 rounded cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                <Twitter className="h-4 w-4 text-sky-500" />
                <span className="text-sm font-medium text-slate-700">X (Twitter)</span>
              </label>
              <label className="flex items-center gap-3 px-3 py-2 hover:bg-slate-100 rounded cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                <Facebook className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-slate-700">Facebook</span>
              </label>
              <label className="flex items-center gap-3 px-3 py-2 hover:bg-slate-100 rounded cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                <Instagram className="h-4 w-4 text-pink-600" />
                <span className="text-sm font-medium text-slate-700">Instagram</span>
              </label>
              <label className="flex items-center gap-3 px-3 py-2 hover:bg-slate-100 rounded cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                <Linkedin className="h-4 w-4 text-blue-700" />
                <span className="text-sm font-medium text-slate-700">LinkedIn</span>
              </label>
            </div>
          </div>
        </div>

        {/* Middle Pane: Message List */}
        <div className="w-full md:w-80 lg:w-96 border-r border-slate-200 bg-white flex flex-col shrink-0">
          <div className="p-3 border-b border-slate-200">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search messages..."
                className="w-full bg-slate-100 border-transparent focus:border-indigo-500 focus:bg-white focus:ring-0 rounded-md py-2 pl-9 pr-3 text-sm"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {messages.map(msg => (
              <div 
                key={msg.id} 
                onClick={() => setActiveMsg(msg.id)}
                className={`p-4 border-b border-slate-100 cursor-pointer transition-colors relative ${activeMsg === msg.id ? 'bg-indigo-50 border-l-2 border-l-indigo-600' : 'hover:bg-slate-50 border-l-2 border-l-transparent'}`}
              >
                {msg.status === 'unread' && <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-blue-500"></div>}
                
                <div className="flex justify-between items-start mb-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm text-slate-900">{msg.user}</span>
                    <msg.icon className={`h-3 w-3 ${msg.color}`} />
                  </div>
                  <span className="text-xs text-slate-400 whitespace-nowrap ml-2">{msg.time}</span>
                </div>
                <p className={`text-sm line-clamp-2 ${msg.status === 'unread' ? 'text-slate-800 font-medium' : 'text-slate-500'}`}>
                  {msg.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Pane: Thread & Reply */}
        <div className="flex-1 bg-white flex flex-col hidden lg:flex">
          {activeMsg ? (() => {
            const msg = messages.find(m => m.id === activeMsg)!;
            return (
              <>
                {/* Thread Header */}
                <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center bg-slate-50 shrink-0">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-slate-200 overflow-hidden shrink-0">
                      <img src={`https://ui-avatars.com/api/?name=${msg.user}&background=random`} alt={msg.user} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 flex items-center gap-2">
                        {msg.user}
                        <msg.icon className={`h-4 w-4 ${msg.color}`} />
                      </h3>
                      <p className="text-xs text-slate-500">{msg.handle} • {msg.platform}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 text-xs font-medium text-emerald-700 bg-emerald-100 hover:bg-emerald-200 rounded flex items-center gap-1 transition-colors">
                      <CheckCircle2 className="h-3 w-3" /> Resolve
                    </button>
                    <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded transition-colors">
                      <MoreVertical className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Thread Body */}
                <div className="flex-1 overflow-y-auto p-6 bg-white space-y-6">
                  <div className="flex gap-4">
                    <div className="h-8 w-8 rounded-full bg-slate-200 overflow-hidden shrink-0 mt-1">
                      <img src={`https://ui-avatars.com/api/?name=${msg.user}&background=random`} alt={msg.user} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="font-bold text-sm text-slate-900">{msg.user}</span>
                        <span className="text-xs text-slate-500">{msg.time}</span>
                      </div>
                      <div className="p-3 bg-slate-100 rounded-2xl rounded-tl-none text-sm text-slate-800 inline-block">
                        {msg.text}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Reply Box */}
                <div className="p-4 border-t border-slate-200 bg-slate-50 shrink-0">
                  <div className="bg-white border border-slate-200 rounded-xl focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 transition-all overflow-hidden flex flex-col">
                    <textarea
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      placeholder={`Reply to ${msg.user}...`}
                      className="w-full p-3 outline-none resize-none text-sm text-slate-700 min-h-[100px]"
                    />
                    <div className="px-3 py-2 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
                      <div className="flex gap-1 text-slate-400">
                        {/* Formatting icons could go here */}
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="text-xs font-medium text-slate-500 hover:text-slate-700 px-2">
                          Add Internal Note
                        </button>
                        <button className="flex items-center gap-1 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-1.5 rounded-lg text-sm font-medium transition-colors shadow-sm">
                          <Reply className="h-3 w-3" />
                          Send Reply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })() : (
            <div className="flex-1 flex flex-col items-center justify-center text-slate-400">
              <MessageSquare className="h-12 w-12 mb-4 text-slate-200" />
              <p>Select a message to view the thread</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
