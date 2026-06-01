"use client";

import { Download, Filter, TrendingUp, Users, Eye, MousePointerClick, Calendar } from "lucide-react";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const audienceData = [
  { name: 'Jan', fb: 4000, ig: 2400, x: 2400, li: 1200 },
  { name: 'Feb', fb: 3000, ig: 1398, x: 2210, li: 1500 },
  { name: 'Mar', fb: 2000, ig: 9800, x: 2290, li: 1800 },
  { name: 'Apr', fb: 2780, ig: 3908, x: 2000, li: 2200 },
  { name: 'May', fb: 1890, ig: 4800, x: 2181, li: 2600 },
  { name: 'Jun', fb: 2390, ig: 3800, x: 2500, li: 2900 },
  { name: 'Jul', fb: 3490, ig: 4300, x: 2100, li: 3200 },
];

const demographicData = [
  { name: '18-24', value: 400 },
  { name: '25-34', value: 300 },
  { name: '35-44', value: 300 },
  { name: '45-54', value: 200 },
  { name: '55+', value: 100 },
];

const COLORS = ['#6366f1', '#ec4899', '#06b6d4', '#8b5cf6', '#14b8a6'];

export default function AnalyticsPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Analytics Overview</h1>
          <p className="text-slate-500">Track your performance and audience growth across all networks.</p>
        </div>
        <div className="flex gap-3">
          <div className="flex items-center gap-2 px-3 py-2 border border-slate-200 bg-white rounded-lg text-sm text-slate-700 shadow-sm">
            <Calendar className="h-4 w-4 text-slate-400" />
            <span>Last 30 Days</span>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm font-medium">
            <Download className="h-4 w-4" />
            Export Data
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="h-10 w-10 rounded-full bg-indigo-50 flex items-center justify-center">
              <Users className="h-5 w-5 text-indigo-600" />
            </div>
            <span className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded text-xs font-bold">
              <TrendingUp className="h-3 w-3" /> +12.5%
            </span>
          </div>
          <p className="text-sm font-medium text-slate-500 mb-1">Total Followers</p>
          <h3 className="text-2xl font-bold text-slate-900">124.5K</h3>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="h-10 w-10 rounded-full bg-pink-50 flex items-center justify-center">
              <Eye className="h-5 w-5 text-pink-600" />
            </div>
            <span className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded text-xs font-bold">
              <TrendingUp className="h-3 w-3" /> +8.2%
            </span>
          </div>
          <p className="text-sm font-medium text-slate-500 mb-1">Total Impressions</p>
          <h3 className="text-2xl font-bold text-slate-900">2.1M</h3>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="h-10 w-10 rounded-full bg-sky-50 flex items-center justify-center">
              <MousePointerClick className="h-5 w-5 text-sky-600" />
            </div>
            <span className="flex items-center gap-1 text-red-600 bg-red-50 px-2 py-1 rounded text-xs font-bold">
              <TrendingUp className="h-3 w-3 rotate-180" /> -2.1%
            </span>
          </div>
          <p className="text-sm font-medium text-slate-500 mb-1">Total Engagements</p>
          <h3 className="text-2xl font-bold text-slate-900">45.2K</h3>
        </div>
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="h-10 w-10 rounded-full bg-emerald-50 flex items-center justify-center">
              <Filter className="h-5 w-5 text-emerald-600" />
            </div>
            <span className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded text-xs font-bold">
              <TrendingUp className="h-3 w-3" /> +4.3%
            </span>
          </div>
          <p className="text-sm font-medium text-slate-500 mb-1">Engagement Rate</p>
          <h3 className="text-2xl font-bold text-slate-900">4.8%</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Audience Growth Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 mb-6">Audience Growth Across Networks</h2>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={audienceData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorFb" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorIg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ec4899" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#ec4899" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <Tooltip contentStyle={{borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                <Area type="monotone" dataKey="fb" stackId="1" stroke="#3b82f6" fill="url(#colorFb)" />
                <Area type="monotone" dataKey="ig" stackId="1" stroke="#ec4899" fill="url(#colorIg)" />
                <Area type="monotone" dataKey="li" stackId="1" stroke="#0ea5e9" fill="#0ea5e9" fillOpacity={0.5} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Demographics Pie Chart */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col">
          <h2 className="text-lg font-bold text-slate-900 mb-2">Age Demographics</h2>
          <p className="text-sm text-slate-500 mb-6">Aggregated across all connected platforms</p>
          <div className="flex-1 h-[250px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={demographicData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {demographicData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {demographicData.map((entry, index) => (
              <div key={entry.name} className="flex items-center gap-2 text-sm">
                <div className="h-3 w-3 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
                <span className="text-slate-600">{entry.name}</span>
                <span className="font-bold text-slate-900 ml-auto">{((entry.value / 1300) * 100).toFixed(0)}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
