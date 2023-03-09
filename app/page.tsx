"use client";

import RequestSong from "@/componets/requestSong";
import React from "react";

export default function HomePage() {
  return (
    <div className="px-8  " style={{ height: "100%" }}>
      <main className="justify-center place-content-center  flex-col">
        <RequestSong />
      </main>
    </div>
  );
}
