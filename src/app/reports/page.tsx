"use client";

import { FileText, Download, Share2, Plus, Calendar, File, CheckCircle2 } from "lucide-react";

export default function ReportsPage() {
  const templates = [
    { id: 1, name: "Monthly Executive Summary", desc: "High-level overview of growth, reach, and top performing posts." },
    { id: 2, name: "Engagement Deep Dive", desc: "Detailed breakdown of comments, shares, and audience sentiment." },
    { id: 3, name: "Competitor Benchmark", desc: "Compare your metrics against tracked competitor profiles." },
  ];

  const recentReports = [
    { id: 1, name: "May 2026 Executive Summary", type: "PDF", date: "Jun 1, 2026", status: "ready" },
    { id: 2, name: "Q1 Campaign Analysis", type: "Web Link", date: "Apr 5, 2026", status: "ready" },
    { id: 3, name: "Weekly Competitor Check", type: "PDF", date: "May 28, 2026", status: "ready" },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Custom Reports</h1>
          <p className="text-slate-500">Build, schedule, and export beautiful reports for your stakeholders.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm font-medium">
          <Plus className="h-4 w-4" />
          Create Report
        </button>
      </div>

      <div>
        <h2 className="text-lg font-bold text-slate-900 mb-4">Quick Start Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {templates.map(template => (
            <div key={template.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-indigo-300 hover:shadow-md transition-all cursor-pointer group flex flex-col">
              <div className="h-12 w-12 rounded-lg bg-indigo-50 flex items-center justify-center mb-4 group-hover:bg-indigo-100 transition-colors">
                <FileText className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">{template.name}</h3>
              <p className="text-sm text-slate-500 flex-1">{template.desc}</p>
              <div className="mt-4 pt-4 border-t border-slate-100 font-medium text-sm text-indigo-600 group-hover:text-indigo-700 flex items-center justify-between">
                Use Template
                <Plus className="h-4 w-4" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
        <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center bg-slate-50">
          <h2 className="font-bold text-slate-900">Recent Reports</h2>
        </div>
        <div className="divide-y divide-slate-100">
          {recentReports.map(report => (
            <div key={report.id} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                  <File className="h-5 w-5 text-slate-500" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{report.name}</h4>
                  <div className="flex items-center gap-3 mt-1 text-xs text-slate-500">
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {report.date}</span>
                    <span className="flex items-center gap-1 font-medium bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded">{report.type}</span>
                    {report.status === 'ready' && <span className="flex items-center gap-1 text-emerald-600"><CheckCircle2 className="h-3 w-3" /> Ready</span>}
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded transition-colors tooltip-trigger" title="Share">
                  <Share2 className="h-4 w-4" />
                </button>
                <button className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded transition-colors tooltip-trigger" title="Download">
                  <Download className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
