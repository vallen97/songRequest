/* eslint-disable @next/next/no-head-element */
"use client";
import { Footer } from "@/componets/footer";
import Navbar from "@/componets/navbar";
import { LayoutProps } from "framer-motion";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import { EntryType } from "perf_hooks";
import "../styles/globals.css";
import "./output.css";

interface IProps {
  children: React.ReactNode;
  session: EntryType;
}

export default function RootLayout({ children, session }: any) {
  return (
    <html lang="en" className="h-screen">
      <Head>
        <title>Requst Me a Song</title>
        <meta
          property="Request Me a Song"
          content="Song Requester"
          key="Requst Me a Song"
        />
      </Head>

      <body className="h-screen">
        <SessionProvider session={session}>
          <Navbar />
          <div className="bg-zinc-200">{children}</div>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
