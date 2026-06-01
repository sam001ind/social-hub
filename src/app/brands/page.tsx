"use client";

import { useState } from "react";
import { Plus, Settings, MoreVertical, Briefcase, ExternalLink, Users, BarChart, X } from "lucide-react";
import { useSocialHub } from "@/lib/SocialHubContext";

export default function BrandsPage() {
  const { brands, addBrand } = useSocialHub();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBrandName, setNewBrandName] = useState("");
  const [newBrandIndustry, setNewBrandIndustry] = useState("");

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (newBrandName) {
      addBrand({
        name: newBrandName,
        industry: newBrandIndustry || "General",
        logo: newBrandName.substring(0, 2).toUpperCase()
      });
      setIsModalOpen(false);
      setNewBrandName("");
      setNewBrandIndustry("");
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Brand Management</h1>
          <p className="text-slate-500">Manage all your client workspaces and internal brands from one place.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
        >
          <Plus className="h-4 w-4" />
          Create Brand
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {brands.map(brand => (
          <div key={brand.id} className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6 border-b border-slate-100 flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-xl shadow-inner">
                  {brand.logo}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg leading-tight">{brand.name}</h3>
                  <p className="text-sm text-slate-500">{brand.industry}</p>
                </div>
              </div>
              <button className="text-slate-400 hover:text-slate-600">
                <MoreVertical className="h-5 w-5" />
              </button>
            </div>
            
            <div className="px-6 py-4 bg-slate-50 grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Channels</p>
                <p className="text-lg font-bold text-slate-900">{brand.connected}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider mb-1">Team Members</p>
                <p className="text-lg font-bold text-slate-900">{brand.members}</p>
              </div>
            </div>

            <div className="p-4 border-t border-slate-100 flex items-center justify-between bg-white">
              <div className="flex gap-2">
                <button className="p-2 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors tooltip-trigger" title="Settings">
                  <Settings className="h-4 w-4" />
                </button>
                <button className="p-2 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors tooltip-trigger" title="Team Access">
                  <Users className="h-4 w-4" />
                </button>
                <button className="p-2 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors tooltip-trigger" title="Analytics">
                  <BarChart className="h-4 w-4" />
                </button>
              </div>
              <button className="flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700">
                Open Workspace <ExternalLink className="h-3 w-3" />
              </button>
            </div>
          </div>
        ))}

        {/* Create New Card */}
        <div 
          onClick={() => setIsModalOpen(true)}
          className="bg-slate-50 rounded-xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center p-6 text-center cursor-pointer hover:bg-slate-100 hover:border-indigo-400 transition-colors group h-full min-h-[260px]"
        >
          <div className="h-12 w-12 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Briefcase className="h-5 w-5 text-indigo-500" />
          </div>
          <h3 className="font-bold text-slate-800">Add New Brand</h3>
          <p className="text-sm text-slate-500 mt-2 max-w-[200px]">Create a dedicated workspace with specific channels and team members.</p>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
              <h2 className="text-lg font-bold text-slate-800">Create New Brand</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="h-5 w-5" />
              </button>
            </div>
            <form onSubmit={handleCreate} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Brand Name</label>
                <input 
                  type="text"
                  required
                  value={newBrandName}
                  onChange={(e) => setNewBrandName(e.target.value)}
                  placeholder="e.g. Acme Corp"
                  className="w-full border border-slate-300 rounded-lg px-4 py-2 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Industry</label>
                <input 
                  type="text"
                  value={newBrandIndustry}
                  onChange={(e) => setNewBrandIndustry(e.target.value)}
                  placeholder="e.g. E-commerce"
                  className="w-full border border-slate-300 rounded-lg px-4 py-2 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                />
              </div>
              <div className="pt-4 flex justify-end gap-3">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                  Cancel
                </button>
                <button type="submit" className="px-4 py-2 text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg transition-colors shadow-sm">
                  Create Workspace
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
