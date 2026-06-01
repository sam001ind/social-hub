"use client";

import { Plus, Facebook, Instagram, Twitter, Linkedin, Youtube, CheckCircle2, AlertCircle } from "lucide-react";

export default function ChannelsPage() {
  const connectedChannels = [
    { id: 1, platform: 'Facebook Page', name: 'TechCorp Official', handle: '@techcorp', icon: Facebook, color: 'text-blue-600', bg: 'bg-blue-100', status: 'connected' },
    { id: 2, platform: 'Instagram', name: 'TechCorp Life', handle: '@techcorp_life', icon: Instagram, color: 'text-pink-600', bg: 'bg-pink-100', status: 'connected' },
    { id: 3, platform: 'LinkedIn Page', name: 'TechCorp Inc.', handle: 'techcorp-inc', icon: Linkedin, color: 'text-blue-700', bg: 'bg-blue-100', status: 'connected' },
    { id: 4, platform: 'X (Twitter)', name: 'TechCorp Support', handle: '@techcorp_help', icon: Twitter, color: 'text-black', bg: 'bg-slate-200', status: 'error' },
  ];

  const availableChannels = [
    { platform: 'YouTube', icon: Youtube, color: 'text-red-600', description: 'Publish videos and shorts directly to your channel.' },
    { platform: 'TikTok', icon: () => <span className="font-bold text-lg">d</span>, color: 'text-black', description: 'Schedule and auto-publish TikTok videos.' },
    { platform: 'Google Business', icon: () => <span className="font-bold text-lg text-blue-500">G</span>, color: 'text-blue-500', description: 'Post updates, offers, and events to Google.' },
    { platform: 'Pinterest', icon: () => <span className="font-bold text-lg text-red-500">P</span>, color: 'text-red-500', description: 'Schedule pins to your boards.' },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Social Channels</h1>
        <p className="text-slate-500">Connect and manage your brand&apos;s social media profiles.</p>
      </div>

      <div>
        <h2 className="text-lg font-bold text-slate-900 mb-4">Connected Channels</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {connectedChannels.map(channel => (
            <div key={channel.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div className="flex items-start justify-between mb-4">
                <div className={`h-10 w-10 rounded-lg ${channel.bg} flex items-center justify-center`}>
                  <channel.icon className={`h-5 w-5 ${channel.color}`} />
                </div>
                {channel.status === 'connected' ? (
                  <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded text-xs font-medium">
                    <CheckCircle2 className="h-3 w-3" /> Connected
                  </div>
                ) : (
                  <div className="flex items-center gap-1 text-red-600 bg-red-50 px-2 py-1 rounded text-xs font-medium">
                    <AlertCircle className="h-3 w-3" /> Reconnect
                  </div>
                )}
              </div>
              <div>
                <h3 className="font-bold text-slate-900">{channel.name}</h3>
                <p className="text-sm text-slate-500">{channel.handle}</p>
                <div className="mt-4 pt-4 border-t border-slate-100 flex gap-2">
                  <button className="flex-1 px-3 py-1.5 bg-slate-50 hover:bg-slate-100 text-slate-600 text-sm font-medium rounded-md transition-colors">
                    Settings
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold text-slate-900 mb-4">Connect New Channel</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {availableChannels.map(channel => (
            <div key={channel.platform} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4 hover:border-indigo-300 transition-colors cursor-pointer group">
              <div className="h-12 w-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
                <channel.icon className={`h-6 w-6 ${channel.color}`} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-slate-900">{channel.platform}</h3>
                <p className="text-sm text-slate-500 leading-tight">{channel.description}</p>
              </div>
              <button className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors shrink-0">
                <Plus className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
