"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getChannels() {
  return prisma.channel.findMany({
    orderBy: { createdAt: "asc" }
  });
}

export async function connectMockChannel(data: {
  platform: string;
  name: string;
  handle: string;
  color: string;
  bg: string;
}) {
  const channel = await prisma.channel.create({
    data: {
      ...data,
      status: 'connected'
    }
  });
  
  revalidatePath("/channels");
  revalidatePath("/");
  return channel;
}

export async function disconnectChannel(id: string) {
  await prisma.channel.delete({
    where: { id }
  });
  revalidatePath("/channels");
  revalidatePath("/");
}
