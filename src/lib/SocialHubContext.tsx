"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { FaFacebook as Facebook, FaInstagram as Instagram, FaLinkedin as Linkedin, FaTwitter as Twitter, FaYoutube as Youtube } from "react-icons/fa";
import { addDays } from "date-fns";

export type Post = {
  id: number;
  content: string;
  platforms: string[];
  time: string;
  date: Date;
  author: string;
  status: 'scheduled' | 'draft' | 'published' | 'failed';
  likes?: number;
  comments?: number;
  error?: string;
  color?: string;
};

type SocialHubContextType = {
  activeBrand: string;
  setActiveBrand: (brand: string) => void;
  brands: any[];
  addBrand: (brand: any) => void;
  posts: Post[];
  addPost: (post: Omit<Post, 'id'>) => void;
  deletePost: (id: number) => void;
  messages: any[];
  markAllMessagesRead: () => void;
  updateMessageStatus: (msgId: number, status: string) => void;
  addMessageReply: (msgId: number, reply: string) => void;
  connectedChannels: any[];
  connectChannel: (channel: any) => void;
  streams: any[];
  addStream: (stream: any) => void;
  isComposerOpen: boolean;
  setComposerOpen: (open: boolean) => void;
};

const SocialHubContext = createContext<SocialHubContextType | undefined>(undefined);

export function SocialHubProvider({ children }: { children: ReactNode }) {
  const [activeBrand, setActiveBrand] = useState("All Brands");
  
  const [brands, setBrands] = useState([
    { id: 1, name: "TechCorp Inc.", industry: "Software", members: 12, connected: 6, logo: "TC" },
    { id: 2, name: "FitnessStudio", industry: "Health & Wellness", members: 4, connected: 4, logo: "FS" },
    { id: 3, name: "Local Coffee Co.", industry: "Food & Beverage", members: 2, connected: 2, logo: "LC" },
  ]);

  const [posts, setPosts] = useState<Post[]>([
    { id: 1, content: "🚀 We are thrilled to announce the launch of our new enterprise features! #TechLaunch #Enterprise", platforms: ["Facebook", "LinkedIn"], time: "10:00 AM", date: addDays(new Date(), 1), author: "Sarah J.", status: "scheduled", color: "bg-blue-100 text-blue-700 border-blue-200" },
    { id: 2, content: "Behind the scenes at TechCorp headquarters. Our engineering team working hard on the next update 💻✨", platforms: ["Instagram"], time: "2:30 PM", date: addDays(new Date(), 3), author: "Mike T.", status: "scheduled", color: "bg-pink-100 text-pink-700 border-pink-200" },
    { id: 3, content: "Here are 5 reasons why you should upgrade to the new system...", platforms: ["LinkedIn"], time: "No date set", date: new Date(), author: "Sarah J.", status: "draft", color: "bg-slate-100 text-slate-700 border-slate-200" },
    { id: 4, content: "Happy Friday! What's everyone working on this weekend?", platforms: ["X", "Facebook"], time: "9:00 AM", date: addDays(new Date(), -1), author: "Admin", status: "published", likes: 124, comments: 45, color: "bg-indigo-100 text-indigo-700 border-indigo-200" },
    { id: 5, content: "Quick update on our API incident earlier today...", platforms: ["X"], time: "8:00 AM", date: new Date(), author: "DevTeam", status: "failed", error: "Rate limit exceeded", color: "bg-red-100 text-red-700 border-red-200" }
  ]);

  const [messages, setMessages] = useState<any[]>([
    { id: 1, user: 'Sarah Jenkins', handle: '@sarahj', platform: 'Twitter', icon: Twitter, color: 'text-sky-500', time: '10m ago', text: 'Do you offer enterprise pricing for the new tool? Looking to deploy this across 50 team members.', status: 'unread', replies: [] },
    { id: 2, user: 'TechReview Blog', handle: 'techreview', platform: 'LinkedIn', icon: Linkedin, color: 'text-blue-700', time: '1h ago', text: 'Great launch today! Would love to schedule a quick interview with your founder.', status: 'read', replies: [] },
    { id: 3, user: 'Mark D.', handle: 'markd123', platform: 'Facebook', icon: Facebook, color: 'text-blue-600', time: '3h ago', text: 'I am having trouble connecting my instagram account. It keeps giving me an OAuth error.', status: 'escalated', replies: [] },
    { id: 4, user: 'DesignStudio', handle: '@design_hq', platform: 'Instagram', icon: Instagram, color: 'text-pink-600', time: 'Yesterday', text: 'Love the new UI! 🔥🔥🔥', status: 'read', replies: [] },
  ]);

  const [connectedChannels, setConnectedChannels] = useState([
    { id: 1, platform: 'Facebook Page', name: 'TechCorp Official', handle: '@techcorp', icon: Facebook, color: 'text-blue-600', bg: 'bg-blue-100', status: 'connected' },
    { id: 2, platform: 'Instagram', name: 'TechCorp Life', handle: '@techcorp_life', icon: Instagram, color: 'text-pink-600', bg: 'bg-pink-100', status: 'connected' },
    { id: 3, platform: 'LinkedIn Page', name: 'TechCorp Inc.', handle: 'techcorp-inc', icon: Linkedin, color: 'text-blue-700', bg: 'bg-blue-100', status: 'connected' },
    { id: 4, platform: 'X (Twitter)', name: 'TechCorp Support', handle: '@techcorp_help', icon: Twitter, color: 'text-black', bg: 'bg-slate-200', status: 'error' },
  ]);

  const [streams, setStreams] = useState([
    {
      id: 1,
      title: "Brand Mentions",
      keyword: "@techcorp",
      platform: "Twitter",
      icon: Twitter,
      color: "text-sky-500",
      posts: [
        { id: 101, user: "DevInsider", handle: "@devinsider", time: "5m", text: "Just tried out @techcorp's new enterprise feature. Game changer for our dev team! 🚀" },
        { id: 102, user: "Sarah J.", handle: "@sarahj", time: "1h", text: "Can anyone recommend a good SMMP? Looking at @techcorp right now." },
      ]
    },
    {
      id: 2,
      title: "Industry Keywords",
      keyword: "#SocialMediaMarketing",
      platform: "Twitter",
      icon: Twitter,
      color: "text-sky-500",
      posts: [
        { id: 201, user: "MarketingPro", handle: "@mktgpro", time: "12m", text: "What's the best time to post on LinkedIn in 2026? #SocialMediaMarketing" },
        { id: 202, user: "AgencyLife", handle: "@agencylife", time: "45m", text: "We just published our Q3 report on engagement trends. #SocialMediaMarketing #Digital" },
      ]
    }
  ]);

  const addBrand = (brand: any) => {
    setBrands([...brands, { ...brand, id: Date.now(), members: 1, connected: 0 }]);
  };

  const addPost = (post: Omit<Post, 'id'>) => {
    setPosts([{ ...post, id: Date.now() }, ...posts]);
  };

  const deletePost = (id: number) => {
    setPosts(posts.filter(p => p.id !== id));
  };

  const markAllMessagesRead = () => {
    setMessages(messages.map(m => ({ ...m, status: 'read' })));
  };

  const updateMessageStatus = (msgId: number, status: string) => {
    setMessages(messages.map(m => m.id === msgId ? { ...m, status } : m));
  };

  const addMessageReply = (msgId: number, reply: string) => {
    setMessages(messages.map(m => {
      if (m.id === msgId) {
        return {
          ...m,
          status: 'read',
          replies: [...m.replies, { text: reply, time: 'Just now', author: 'You' }]
        };
      }
      return m;
    }));
  };

  const connectChannel = (channel: any) => {
    setConnectedChannels([...connectedChannels, { ...channel, id: Date.now(), status: 'connected', name: 'New Connection', handle: '@new_account', bg: 'bg-indigo-100' }]);
  };

  const addStream = (stream: any) => {
    setStreams([...streams, { ...stream, id: Date.now(), platform: 'Twitter', icon: Twitter, color: 'text-sky-500', posts: [] }]);
  };

  const [isComposerOpen, setComposerOpen] = useState(false);

  return (
    <SocialHubContext.Provider value={{ 
      activeBrand, setActiveBrand, 
      brands, addBrand, 
      posts, addPost, deletePost,
      messages, markAllMessagesRead, updateMessageStatus, addMessageReply,
      connectedChannels, connectChannel,
      streams, addStream,
      isComposerOpen, setComposerOpen
    }}>
      {children}
    </SocialHubContext.Provider>
  );
}

export function useSocialHub() {
  const context = useContext(SocialHubContext);
  if (context === undefined) {
    throw new Error("useSocialHub must be used within a SocialHubProvider");
  }
  return context;
}
