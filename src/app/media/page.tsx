"use client";

import { UploadCloud, Folder, Image as ImageIcon, Video, MoreVertical, Search, Filter } from "lucide-react";

export default function MediaPage() {
  const mediaItems = [
    { id: 1, type: 'image', name: 'product-launch-hero.jpg', size: '2.4 MB', dimensions: '1920x1080', date: 'Today' },
    { id: 2, type: 'video', name: 'behind-the-scenes.mp4', size: '15.8 MB', duration: '0:45', date: 'Yesterday' },
    { id: 3, type: 'image', name: 'team-photo-2026.png', size: '4.1 MB', dimensions: '2400x1600', date: 'May 28' },
    { id: 4, type: 'image', name: 'infographic-q2.pdf', size: '1.2 MB', dimensions: 'Document', date: 'May 25' },
    { id: 5, type: 'image', name: 'logo-transparent.png', size: '0.5 MB', dimensions: '500x500', date: 'May 20' },
    { id: 6, type: 'video', name: 'customer-testimonial.mp4', size: '22.4 MB', duration: '1:20', date: 'May 15' },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6 h-full flex flex-col">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Media Library</h1>
          <p className="text-slate-500">Manage all your brand assets, images, and videos in one place.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm font-medium">
          <UploadCloud className="h-4 w-4" />
          Upload Files
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 flex-1 min-h-0">
        {/* Sidebar Folders */}
        <div className="col-span-1 bg-white rounded-xl border border-slate-200 shadow-sm p-4 overflow-y-auto">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 px-2">Folders</h3>
          <div className="space-y-1">
            <button className="w-full flex items-center gap-3 px-3 py-2 bg-indigo-50 text-indigo-700 rounded-md font-medium text-sm transition-colors">
              <Folder className="h-4 w-4" /> All Media
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-md font-medium text-sm transition-colors">
              <Folder className="h-4 w-4 text-slate-400" /> Campaigns
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-md font-medium text-sm transition-colors">
              <Folder className="h-4 w-4 text-slate-400" /> Logos & Brand
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-md font-medium text-sm transition-colors">
              <Folder className="h-4 w-4 text-slate-400" /> Raw Footage
            </button>
          </div>
          
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 px-2 mt-8">Asset Types</h3>
          <div className="space-y-1">
            <button className="w-full flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-md font-medium text-sm transition-colors">
              <ImageIcon className="h-4 w-4 text-slate-400" /> Images
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-md font-medium text-sm transition-colors">
              <Video className="h-4 w-4 text-slate-400" /> Videos
            </button>
          </div>
        </div>

        {/* Media Grid */}
        <div className="col-span-1 md:col-span-3 bg-white rounded-xl border border-slate-200 shadow-sm flex flex-col overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search media..."
                className="w-64 rounded-md border border-slate-200 bg-white py-2 pl-9 pr-4 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-500 mr-2">Sort by: <span className="font-medium text-slate-700">Date Added</span></span>
              <button className="p-2 border border-slate-200 rounded-md text-slate-600 hover:bg-slate-100 bg-white shadow-sm">
                <Filter className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          <div className="flex-1 p-6 overflow-y-auto">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              {mediaItems.map(item => (
                <div key={item.id} className="group relative rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer bg-white">
                  <div className="aspect-[4/3] bg-slate-100 relative">
                    {item.type === 'image' ? (
                      <div className="absolute inset-0 bg-indigo-50 flex items-center justify-center">
                        <ImageIcon className="h-12 w-12 text-indigo-200" />
                      </div>
                    ) : (
                      <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
                        <Video className="h-12 w-12 text-slate-600" />
                        <span className="absolute bottom-2 right-2 px-2 py-1 bg-black/60 text-white text-xs font-medium rounded">
                          {item.duration}
                        </span>
                      </div>
                    )}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 bg-white rounded-md text-slate-600 shadow-sm hover:text-indigo-600">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="p-3">
                    <h4 className="text-sm font-medium text-slate-900 truncate" title={item.name}>{item.name}</h4>
                    <div className="flex items-center justify-between mt-1 text-xs text-slate-500">
                      <span>{item.size}</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="aspect-[4/3] rounded-xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-slate-500 cursor-pointer hover:bg-slate-50 hover:border-indigo-400 transition-colors">
                <UploadCloud className="h-8 w-8 mb-2 text-indigo-400" />
                <span className="text-sm font-medium">Upload File</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
