/* eslint-disable @next/next/no-head-element */
"use client";
//import "../styles/globals.css";
import Navbar from "@/componets/navbar";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import "../styles/globals.css";
import "./output.css";

interface IProps {
  children: React.ReactNode;
  session: any;
}

export default function RootLayout({ children, session }: IProps) {
  return (
    <html lang="en" className="h-screen">
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Head>
        <meta property="og:title" content="My new title" key="title" />
      </Head>
      <body className="h-screen">
        <SessionProvider session={session}>
          <Navbar />
          <div className="bg-zinc-200">{children}</div>
        </SessionProvider>
      </body>
    </html>
  );
}
