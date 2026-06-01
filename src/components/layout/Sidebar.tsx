"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Briefcase, 
  Share2, 
  PenSquare, 
  CalendarDays, 
  Image as ImageIcon, 
  Inbox, 
  Activity, 
  BarChart3, 
  FileText, 
  Settings,
  ArrowLeft
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Brands", href: "/brands", icon: Briefcase },
  { name: "Channels", href: "/channels", icon: Share2 },
  { name: "Publishing", href: "/publishing", icon: PenSquare },
  { name: "Calendar", href: "/calendar", icon: CalendarDays },
  { name: "Media", href: "/media", icon: ImageIcon },
  { name: "Inbox", href: "/inbox", icon: Inbox },
  { name: "Monitoring", href: "/monitoring", icon: Activity },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Reports", href: "/reports", icon: FileText },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-64 flex-col bg-slate-900 text-slate-300">
      <div className="flex h-16 items-center px-6">
        <h1 className="text-xl font-bold text-white tracking-tight">SocialHub<span className="text-indigo-500">.</span></h1>
      </div>
      
      <div className="px-4 py-4">
        <div className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-slate-500">Menu</div>
        <nav className="flex flex-1 flex-col gap-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "group flex items-center gap-3 rounded-md px-2 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-indigo-600 text-white"
                    : "hover:bg-slate-800 hover:text-white"
                )}
              >
                <item.icon
                  className={cn(
                    "h-5 w-5 shrink-0 transition-colors",
                    isActive ? "text-white" : "text-slate-400 group-hover:text-white"
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
      
      <div className="mt-auto p-4 border-t border-slate-800">
        <a 
          href="http://localhost:3000"
          className="group flex items-center gap-3 rounded-md px-2 py-2 text-sm font-medium transition-colors hover:bg-slate-800 hover:text-white"
        >
          <ArrowLeft className="h-5 w-5 shrink-0 text-slate-400 group-hover:text-white transition-colors" />
          Back to ERP
        </a>
      </div>
    </div>
  );
}
