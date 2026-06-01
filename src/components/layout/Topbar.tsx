"use client";

import { Bell, Search, Plus } from "lucide-react";
import { useState } from "react";
import UniversalComposer from "../publishing/UniversalComposer";

import { useSocialHub } from "@/lib/SocialHubContext";

export function Topbar() {
  const { isComposerOpen, setComposerOpen, activeBrand } = useSocialHub();
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <>
      <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
        <div className="flex flex-1 items-center gap-4">
          <div className="relative w-96">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search posts, campaigns, or mentions..."
              className="w-full rounded-md border border-slate-200 bg-slate-50 py-2 pl-9 pr-4 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative text-slate-400 hover:text-slate-600 focus:outline-none"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
            </button>
            
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden z-50">
                <div className="p-4 border-b border-slate-100 flex justify-between items-center">
                  <h3 className="font-bold text-slate-900">Notifications</h3>
                  <button className="text-xs text-indigo-600 font-medium hover:text-indigo-700">Mark all as read</button>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {[
                    { id: 1, title: 'Post published successfully', desc: 'Your post to Twitter has been published.', time: '5m ago', unread: true },
                    { id: 2, title: 'New message from @sarah', desc: 'Hey, I have a question about admission...', time: '1h ago', unread: true },
                    { id: 3, title: 'Weekly report ready', desc: 'Your social media performance report is ready.', time: '2h ago', unread: false },
                  ].map(notif => (
                    <div key={notif.id} className={`p-4 border-b border-slate-50 hover:bg-slate-50 cursor-pointer ${notif.unread ? 'bg-indigo-50/30' : ''}`}>
                      <div className="flex justify-between items-start mb-1">
                        <h4 className={`text-sm ${notif.unread ? 'font-bold text-slate-900' : 'font-medium text-slate-700'}`}>{notif.title}</h4>
                        <span className="text-xs text-slate-400">{notif.time}</span>
                      </div>
                      <p className="text-xs text-slate-500 line-clamp-2">{notif.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="p-3 text-center border-t border-slate-100">
                  <button className="text-sm text-indigo-600 font-medium hover:text-indigo-700">View all notifications</button>
                </div>
              </div>
            )}
          </div>
          <div className="h-8 w-px bg-slate-200"></div>
          
          <button 
          onClick={() => setComposerOpen(true)}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm"
        >
          <Plus className="h-4 w-4" />
          <span>New Post</span>
        </button>
          
          <div className="h-8 w-8 rounded-full bg-slate-200 ml-2 overflow-hidden border border-slate-300 cursor-pointer">
            <img src="https://ui-avatars.com/api/?name=Admin+User&background=6366f1&color=fff" alt="User avatar" />
          </div>
        </div>
      </header>

      {isComposerOpen && (
        <UniversalComposer onClose={() => setComposerOpen(false)} />
      )}
    </>
  );
}
