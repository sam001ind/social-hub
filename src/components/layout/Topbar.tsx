"use client";

import { Bell, Search, Plus } from "lucide-react";
import { useState } from "react";
import UniversalComposer from "../publishing/UniversalComposer";

export function Topbar() {
  const [isComposerOpen, setIsComposerOpen] = useState(false);

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
          <button className="relative text-slate-400 hover:text-slate-600">
            <Bell className="h-5 w-5" />
            <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
          </button>
          
          <div className="h-8 w-px bg-slate-200"></div>
          
          <button 
            onClick={() => setIsComposerOpen(true)}
            className="flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors shadow-sm"
          >
            <Plus className="h-4 w-4" />
            New Post
          </button>
          
          <div className="h-8 w-8 rounded-full bg-slate-200 ml-2 overflow-hidden border border-slate-300 cursor-pointer">
            <img src="https://ui-avatars.com/api/?name=Admin+User&background=6366f1&color=fff" alt="User avatar" />
          </div>
        </div>
      </header>

      {isComposerOpen && (
        <UniversalComposer onClose={() => setIsComposerOpen(false)} />
      )}
    </>
  );
}
