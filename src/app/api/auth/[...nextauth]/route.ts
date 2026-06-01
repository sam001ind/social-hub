import NextAuth from "next-auth"
import TwitterProvider from "next-auth/providers/twitter"
import LinkedInProvider from "next-auth/providers/linkedin"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "@/lib/prisma"

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID || "mock-client-id",
      clientSecret: process.env.TWITTER_CLIENT_SECRET || "mock-client-secret",
      version: "2.0", 
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID || "mock-client-id",
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET || "mock-client-secret",
      authorization: {
        params: { scope: 'openid profile email w_member_social' },
      },
      issuer: 'https://www.linkedin.com',
      jwks_endpoint: 'https://www.linkedin.com/oauth/openid/jwks',
      profile(profile, tokens) {
        const defaultImage =
          'https://cdn-icons-png.flaticon.com/512/174/174857.png';
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture ?? defaultImage,
        };
      },
    })
  ],
  callbacks: {
    async session({ session, user }) {
      // Send properties to the client, like an access_token from a provider.
      if (session.user) {
        (session.user as any).id = user.id;
      }
      return session
    }
  },
  debug: process.env.NODE_ENV === "development",
})

export { handler as GET, handler as POST }
