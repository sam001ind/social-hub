import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  // Clean up existing data
  await prisma.department.deleteMany()
  await prisma.channel.deleteMany()
  await prisma.post.deleteMany()
  await prisma.message.deleteMany()
  await prisma.stream.deleteMany()

  // 1. Seed Departments
  await prisma.department.createMany({
    data: [
      { name: 'My Institution', industry: 'Main Campus', members: 12, connected: 6, logo: 'MI' },
      { name: 'MI Athletics', industry: 'Sports', members: 4, connected: 4, logo: 'AT' },
      { name: 'Admissions & Alumni', industry: 'Outreach', members: 2, connected: 2, logo: 'AA' },
    ]
  })

  // 2. Seed Channels
  await prisma.channel.createMany({
    data: [
      { platform: 'Facebook Page', name: 'My Institution Official', handle: '@myinstitution', color: 'text-blue-600', bg: 'bg-blue-100', status: 'connected' },
      { platform: 'Instagram', name: 'Student Life', handle: '@mi_life', color: 'text-pink-600', bg: 'bg-pink-100', status: 'connected' },
      { platform: 'LinkedIn Page', name: 'Alumni Assoc.', handle: 'mi-alumni', color: 'text-blue-700', bg: 'bg-blue-100', status: 'connected' },
      { platform: 'X (Twitter)', name: 'MI Athletics', handle: '@mi_sports', color: 'text-black', bg: 'bg-slate-200', status: 'error' },
    ]
  })

  // 3. Seed Posts
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  
  const in3Days = new Date()
  in3Days.setDate(in3Days.getDate() + 3)

  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)

  await prisma.post.createMany({
    data: [
      { content: "🚀 Reminder: Final exams for the Spring semester begin next Monday. Make sure to check your student portal for the exact schedule! #MyInstitution #FinalsWeek", platforms: JSON.stringify(["Facebook", "LinkedIn"]), time: "10:00 AM", date: tomorrow, author: "Principal Smith", status: "scheduled", color: "bg-blue-100 text-blue-700 border-blue-200" },
      { content: "A massive congratulations to our Varsity Basketball team for winning the regional championship last night! Go Lions! 🦁🏆✨", platforms: JSON.stringify(["Instagram"]), time: "2:30 PM", date: in3Days, author: "Coach T.", status: "scheduled", color: "bg-pink-100 text-pink-700 border-pink-200" },
      { content: "Here are 5 study tips for parents to help their children prepare for the upcoming standardized tests...", platforms: JSON.stringify(["LinkedIn"]), time: "No date set", date: new Date(), author: "Sarah J. (Counselor)", status: "draft", color: "bg-slate-100 text-slate-700 border-slate-200" },
      { content: "Happy Friday! The campus library will be open extended hours this weekend for anyone needing a quiet study space.", platforms: JSON.stringify(["X", "Facebook"]), time: "9:00 AM", date: yesterday, author: "Admin", status: "published", likes: 124, comments: 45, color: "bg-indigo-100 text-indigo-700 border-indigo-200" },
      { content: "Notice: The late bus service (Route 4B) is delayed by 15 minutes due to heavy traffic on Main St.", platforms: JSON.stringify(["X"]), time: "8:00 AM", date: new Date(), author: "Transport Dept", status: "failed", error: "Rate limit exceeded", color: "bg-red-100 text-red-700 border-red-200" }
    ]
  })

  // 4. Seed Messages
  await prisma.message.createMany({
    data: [
      { user: 'Sarah Jenkins', handle: '@sarahj', platform: 'Twitter', color: 'text-sky-500', time: '10m ago', text: 'Does anyone know what time the parent-teacher meetings start this Thursday? I seem to have lost the email.', status: 'unread', replies: JSON.stringify([]) },
      { user: 'EdTech Review', handle: 'edtechblog', platform: 'LinkedIn', color: 'text-blue-700', time: '1h ago', text: 'Great initiative on the new STEM lab! Would love to feature your institution in our next newsletter.', status: 'read', replies: JSON.stringify([]) },
      { user: 'Mark D.', handle: 'markd123', platform: 'Facebook', color: 'text-blue-600', time: '3h ago', text: 'I am having trouble logging into the parent portal to see my childs grades. It keeps giving me an error.', status: 'escalated', replies: JSON.stringify([]) },
      { user: 'MI Drama Club', handle: '@midrama', platform: 'Instagram', color: 'text-pink-600', time: 'Yesterday', text: 'Thanks to everyone who came to see the spring musical! 🔥🔥🔥', status: 'read', replies: JSON.stringify([]) },
    ]
  })

  // 5. Seed Streams
  await prisma.stream.create({
    data: {
      title: "School Mentions",
      keyword: "@myinstitution",
      platform: "Twitter",
      color: "text-sky-500",
      posts: JSON.stringify([
        { id: 101, user: "ParentInsider", handle: "@ptamom", time: "5m", text: "Just toured @myinstitution for my incoming freshman. The new STEM facilities are amazing! 🚀" },
        { id: 102, user: "Sarah J.", handle: "@sarahj", time: "1h", text: "Can anyone recommend a good tutor for AP Calc? My son goes to @myinstitution." },
      ])
    }
  })

  await prisma.stream.create({
    data: {
      title: "District Keywords",
      keyword: "#District42Edu",
      platform: "Twitter",
      color: "text-sky-500",
      posts: JSON.stringify([
        { id: 201, user: "LocalNews", handle: "@citygazette", time: "12m", text: "All schools in #District42Edu will have a snow day tomorrow due to the blizzard warning." },
        { id: 202, user: "TeacherLife", handle: "@teach123", time: "45m", text: "So proud of my students for their projects at the district science fair today! #District42Edu" },
      ])
    }
  })

  console.log('Database seeding complete!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
