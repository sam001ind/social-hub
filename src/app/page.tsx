"use client";

import { 
  Users, 
  MessageSquare, 
  Share2, 
  Heart, 
  TrendingUp, 
  AlertCircle,
  CheckCircle2,
  Clock
} from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const growthData = [
  { name: 'Mon', followers: 4000, reach: 2400 },
  { name: 'Tue', followers: 4200, reach: 2800 },
  { name: 'Wed', followers: 4500, reach: 3200 },
  { name: 'Thu', followers: 4400, reach: 2900 },
  { name: 'Fri', followers: 4800, reach: 3800 },
  { name: 'Sat', followers: 5100, reach: 4300 },
  { name: 'Sun', followers: 5400, reach: 4800 },
];

export default function Dashboard() {
  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
          <p className="text-slate-500">Welcome back! Here&apos;s what&apos;s happening across your brands today.</p>
        </div>
        <select className="bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm font-medium text-slate-700 outline-none focus:border-indigo-500 shadow-sm cursor-pointer">
          <option>All Brands</option>
          <option>TechCorp Inc.</option>
          <option>FitnessStudio</option>
        </select>
      </div>

      {/* Social Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-slate-500">Accounts Connected</h3>
            <Users className="h-5 w-5 text-indigo-500" />
          </div>
          <div>
            <p className="text-3xl font-bold text-slate-900">12</p>
            <p className="text-xs text-emerald-500 font-medium mt-1">+2 this month</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-slate-500">Published Today</h3>
            <CheckCircle2 className="h-5 w-5 text-emerald-500" />
          </div>
          <div>
            <p className="text-3xl font-bold text-slate-900">8</p>
            <p className="text-xs text-emerald-500 font-medium mt-1">On schedule</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-slate-500">Scheduled Posts</h3>
            <Clock className="h-5 w-5 text-amber-500" />
          </div>
          <div>
            <p className="text-3xl font-bold text-slate-900">24</p>
            <p className="text-xs text-slate-400 font-medium mt-1">Next 7 days</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-slate-500">Failed Posts</h3>
            <AlertCircle className="h-5 w-5 text-red-500" />
          </div>
          <div>
            <p className="text-3xl font-bold text-slate-900">1</p>
            <p className="text-xs text-red-500 font-medium mt-1">API Error on Instagram</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Growth Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-slate-900">Growth & Reach</h2>
            <select className="bg-slate-50 border border-slate-200 rounded text-xs px-2 py-1 outline-none">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={growthData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorFollowers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorReach" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip 
                  contentStyle={{borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                />
                <Area type="monotone" dataKey="reach" stroke="#10b981" strokeWidth={2} fillOpacity={1} fill="url(#colorReach)" />
                <Area type="monotone" dataKey="followers" stroke="#6366f1" strokeWidth={2} fillOpacity={1} fill="url(#colorFollowers)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Engagement Stats */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Engagement Overview</h2>
          <div className="space-y-6 flex-1 flex flex-col justify-center">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center">
                  <Heart className="h-5 w-5 text-pink-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">Total Likes</p>
                  <p className="text-xs text-slate-500">Across all platforms</p>
                </div>
              </div>
              <p className="font-bold text-slate-900">45.2K</p>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">Comments</p>
                  <p className="text-xs text-slate-500">Needs 12 replies</p>
                </div>
              </div>
              <p className="font-bold text-slate-900">3,104</p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                  <Share2 className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">Shares & Retweets</p>
                  <p className="text-xs text-slate-500">Highly viral</p>
                </div>
              </div>
              <p className="font-bold text-slate-900">12.5K</p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-900">Brand Mentions</p>
                  <p className="text-xs text-slate-500">Monitoring tags</p>
                </div>
              </div>
              <p className="font-bold text-slate-900">892</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Inbox Preview */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center bg-slate-50">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Priority Inbox</h2>
          <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">View All →</button>
        </div>
        <div className="divide-y divide-slate-100">
          {[
            { id: 1, user: "Sarah Jenkins", platform: "Facebook", time: "10 mins ago", msg: "Do you offer enterprise pricing for the new tool?", status: "unread" },
            { id: 2, user: "Mark D.", platform: "X", time: "1 hour ago", msg: "I'm having trouble connecting my account. Please help!", status: "escalated" },
            { id: 3, user: "TechReview", platform: "LinkedIn", time: "3 hours ago", msg: "Great launch today! Can we schedule an interview?", status: "unread" }
          ].map(msg => (
            <div key={msg.id} className="p-4 hover:bg-slate-50 transition-colors flex items-center gap-4 cursor-pointer">
              <div className="h-10 w-10 rounded-full bg-slate-200 overflow-hidden shrink-0">
                <img src={`https://ui-avatars.com/api/?name=${msg.user}&background=random`} alt={msg.user} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-bold text-slate-900">{msg.user} <span className="text-xs font-normal text-slate-500 ml-2">via {msg.platform}</span></h4>
                  <span className="text-xs text-slate-400">{msg.time}</span>
                </div>
                <p className="text-sm text-slate-600 truncate">{msg.msg}</p>
              </div>
              <div className="shrink-0">
                {msg.status === 'unread' && <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">New</span>}
                {msg.status === 'escalated' && <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">Escalated</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
