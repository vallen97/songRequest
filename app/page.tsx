"use client";

import RequestSong from "@/componets/requestSong";
import React from "react";

// https://www.prisma.io/docs/getting-started/quickstart
// https://www.prisma.io/docs/concepts/database-connectors/postgresql
// https://vercel.com/guides/nextjs-prisma-postgres

export default function HomePage() {
  const deleteRequest = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = {};

      await fetch(`/api/request/requests`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: 14 }),
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="px-8  " style={{ height: "100%" }}>
      <main className="justify-center place-content-center  flex-col">
        <RequestSong />
        <div>
          TODO: 1. need to make sure that someone can sign in
          <br />
          2. Add another Nav LInk that links to other social media
          <br />
          3. Remove all of the comments on all of the files
          <br />
          4. Add a role to a user and a super user can remove any user that
          doesnt have a super user role
        </div>
        <button onClick={deleteRequest}>Delete 13</button>
      </main>
    </div>
  );
}
