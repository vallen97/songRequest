"use client";

import RequestSong from "@/componets/requestSong";
import React from "react";

export default function HomePage() {
  return (
    <div className="px-8  " style={{ height: "100%" }}>
      <main className="justify-center place-content-center  flex-col">
        <RequestSong />
        <div>
          Note: When the website is published
          <br />
          1. remove the sign up button when me and JR make accounts.
          <br />
          2. find out how to make a postgress db and find the costs. 3.
        </div>
      </main>
    </div>
  );
}
