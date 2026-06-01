"use server";

import { prisma } from "@/lib/prisma";

export async function getStreams() {
  const streams = await prisma.stream.findMany({
    orderBy: { createdAt: "asc" }
  });
  
  return streams.map(stream => ({
    ...stream,
    posts: JSON.parse(stream.posts) as any[]
  }));
}
