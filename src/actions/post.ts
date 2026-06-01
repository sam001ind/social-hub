"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getPosts() {
  const posts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" }
  });
  
  return posts.map(post => ({
    ...post,
    platforms: JSON.parse(post.platforms) as string[]
  }));
}

export async function createPost(data: {
  content: string;
  platforms: string[];
  time: string;
  date: Date;
  author: string;
  status: string;
  color: string;
}) {
  const post = await prisma.post.create({
    data: {
      content: data.content,
      platforms: JSON.stringify(data.platforms),
      time: data.time,
      date: data.date,
      author: data.author,
      status: data.status,
      color: data.color
    }
  });
  
  revalidatePath("/");
  revalidatePath("/publishing");
  revalidatePath("/calendar");
  return post;
}

export async function deletePost(id: string) {
  await prisma.post.delete({
    where: { id }
  });
  revalidatePath("/");
  revalidatePath("/publishing");
  revalidatePath("/calendar");
}
