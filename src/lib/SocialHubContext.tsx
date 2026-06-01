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
  const [activeBrand, setActiveBrand] = useState("All Accounts");
  
  const [brands, setBrands] = useState([
    { id: 1, name: "My Institution", industry: "Main Campus", members: 12, connected: 6, logo: "MI" },
    { id: 2, name: "MI Athletics", industry: "Sports", members: 4, connected: 4, logo: "AT" },
    { id: 3, name: "Admissions & Alumni", industry: "Outreach", members: 2, connected: 2, logo: "AA" },
  ]);

  const [posts, setPosts] = useState<Post[]>([
    { id: 1, content: "🚀 Reminder: Final exams for the Spring semester begin next Monday. Make sure to check your student portal for the exact schedule! #MyInstitution #FinalsWeek", platforms: ["Facebook", "LinkedIn"], time: "10:00 AM", date: addDays(new Date(), 1), author: "Principal Smith", status: "scheduled", color: "bg-blue-100 text-blue-700 border-blue-200" },
    { id: 2, content: "A massive congratulations to our Varsity Basketball team for winning the regional championship last night! Go Lions! 🦁🏆✨", platforms: ["Instagram"], time: "2:30 PM", date: addDays(new Date(), 3), author: "Coach T.", status: "scheduled", color: "bg-pink-100 text-pink-700 border-pink-200" },
    { id: 3, content: "Here are 5 study tips for parents to help their children prepare for the upcoming standardized tests...", platforms: ["LinkedIn"], time: "No date set", date: new Date(), author: "Sarah J. (Counselor)", status: "draft", color: "bg-slate-100 text-slate-700 border-slate-200" },
    { id: 4, content: "Happy Friday! The campus library will be open extended hours this weekend for anyone needing a quiet study space.", platforms: ["X", "Facebook"], time: "9:00 AM", date: addDays(new Date(), -1), author: "Admin", status: "published", likes: 124, comments: 45, color: "bg-indigo-100 text-indigo-700 border-indigo-200" },
    { id: 5, content: "Notice: The late bus service (Route 4B) is delayed by 15 minutes due to heavy traffic on Main St.", platforms: ["X"], time: "8:00 AM", date: new Date(), author: "Transport Dept", status: "failed", error: "Rate limit exceeded", color: "bg-red-100 text-red-700 border-red-200" }
  ]);

  const [messages, setMessages] = useState<any[]>([
    { id: 1, user: 'Sarah Jenkins', handle: '@sarahj', platform: 'Twitter', icon: Twitter, color: 'text-sky-500', time: '10m ago', text: 'Does anyone know what time the parent-teacher meetings start this Thursday? I seem to have lost the email.', status: 'unread', replies: [] },
    { id: 2, user: 'EdTech Review', handle: 'edtechblog', platform: 'LinkedIn', icon: Linkedin, color: 'text-blue-700', time: '1h ago', text: 'Great initiative on the new STEM lab! Would love to feature your institution in our next newsletter.', status: 'read', replies: [] },
    { id: 3, user: 'Mark D.', handle: 'markd123', platform: 'Facebook', icon: Facebook, color: 'text-blue-600', time: '3h ago', text: 'I am having trouble logging into the parent portal to see my childs grades. It keeps giving me an error.', status: 'escalated', replies: [] },
    { id: 4, user: 'MI Drama Club', handle: '@midrama', platform: 'Instagram', icon: Instagram, color: 'text-pink-600', time: 'Yesterday', text: 'Thanks to everyone who came to see the spring musical! 🔥🔥🔥', status: 'read', replies: [] },
  ]);

  const [connectedChannels, setConnectedChannels] = useState([
    { id: 1, platform: 'Facebook Page', name: 'My Institution Official', handle: '@myinstitution', icon: Facebook, color: 'text-blue-600', bg: 'bg-blue-100', status: 'connected' },
    { id: 2, platform: 'Instagram', name: 'Student Life', handle: '@mi_life', icon: Instagram, color: 'text-pink-600', bg: 'bg-pink-100', status: 'connected' },
    { id: 3, platform: 'LinkedIn Page', name: 'Alumni Assoc.', handle: 'mi-alumni', icon: Linkedin, color: 'text-blue-700', bg: 'bg-blue-100', status: 'connected' },
    { id: 4, platform: 'X (Twitter)', name: 'MI Athletics', handle: '@mi_sports', icon: Twitter, color: 'text-black', bg: 'bg-slate-200', status: 'error' },
  ]);

  const [streams, setStreams] = useState([
    {
      id: 1,
      title: "School Mentions",
      keyword: "@myinstitution",
      platform: "Twitter",
      icon: Twitter,
      color: "text-sky-500",
      posts: [
        { id: 101, user: "ParentInsider", handle: "@ptamom", time: "5m", text: "Just toured @myinstitution for my incoming freshman. The new STEM facilities are amazing! 🚀" },
        { id: 102, user: "Sarah J.", handle: "@sarahj", time: "1h", text: "Can anyone recommend a good tutor for AP Calc? My son goes to @myinstitution." },
      ]
    },
    {
      id: 2,
      title: "District Keywords",
      keyword: "#District42Edu",
      platform: "Twitter",
      icon: Twitter,
      color: "text-sky-500",
      posts: [
        { id: 201, user: "LocalNews", handle: "@citygazette", time: "12m", text: "All schools in #District42Edu will have a snow day tomorrow due to the blizzard warning." },
        { id: 202, user: "TeacherLife", handle: "@teach123", time: "45m", text: "So proud of my students for their projects at the district science fair today! #District42Edu" },
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
