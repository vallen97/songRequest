import NextAuth, { NextAuthOptions } from "next-auth";
// import GoogleProvider from "next-auth/providers/google"
// import FacebookProvider from "next-auth/providers/facebook"
// import GithubProvider from "next-auth/providers/github"
// import TwitterProvider from "next-auth/providers/twitter"
// import Auth0Provider from "next-auth/providers/auth0"
// import AppleProvider from "next-auth/providers/apple"
// import EmailProvider from "next-auth/providers/email";

import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../src/lib/prisma";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export const authOptions: NextAuthOptions = {
  // https://next-auth.js.org/configuration/providers/oauth
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: {
          label: "email",
          type: "text",
          placeholder: "jsmith@email.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        // NOTE: Need to use url that connects to a database,
        //       Also I might need to encrypt the passwords

        const { username, password } = credentials as any;

        // test@email.com : 123456789
        // person2@email.com : 123456789
        // bcrypt@email.com : 123456789 , $2b$10$sCWgIRc49ivcW.3vKGyL3u7owKH0kGxftlGKGQygKDcaKV7aHfNzG
        console.log("password: ", password);
        const res = await fetch(
          `${process.env.NEXTAUTH_URL}/api/post/${username}`
        );

        const user = await res.json();
        console.log("user.password: ", user.password);
        const hash = await bcrypt.hash(password, 10);
        console.log("hash: ", hash);

        const isSamePass = await bcrypt
          .compare(password, user.password)
          .then(function (result: boolean) {
            return result;
          });

        console.log("passwords are the same: ", isSamePass);

        if (res.ok && user && isSamePass) {
          // If no error and we have user data, return it
          return user;
        }
        return null;

        // if (user.password === hash) if (res.ok && user) return user;
        // return null;

        bcrypt
          .compare(password, user.password)
          .then(function (result: boolean) {
            console.log("result: ", result);
            if (result == true) {
              if (res.ok && user) {
                // If no error and we have user data, return it
                return user;
              }
              // Return null if user data could not be retrieved
              return null;
            }
            return null;
          });
        // return null;
      },
    }),

    /*
    // Temporarily removing the Apple provider from the demo site as the
    // callback URL for it needs updating due to Vercel changing domains
    Providers.Apple({
      clientId: process.env.APPLE_ID,
      clientSecret: {
        appleId: process.env.APPLE_ID,
        teamId: process.env.APPLE_TEAM_ID,
        privateKey: process.env.APPLE_PRIVATE_KEY,
        keyId: process.env.APPLE_KEY_ID,
      },
    }),
    
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
    }),
    Auth0Provider({
      clientId: process.env.AUTH0_ID,
      clientSecret: process.env.AUTH0_SECRET,
      issuer: process.env.AUTH0_ISSUER,
    }),
    */
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.Secret,

  theme: {
    colorScheme: "light",
  },
  callbacks: {
    async jwt({ token }) {
      token.userRole = "admin";
      return token;
    },
  },
};

export default NextAuth(authOptions);
