// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { useSession } from "next-auth/react";


// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  let cookie = request.cookies.get("next-auth.session-token");

  //  If there is no user signeg in
  // if (!cookie) {
  //   // if a request is made to any url but two give them an error
  //   if (
  //     request.url ===
  //     process.env.NEXTAUTH_URL + "/api/request/requests"
  //     || request.url === process.env.NEXTAUTH_URL + "/api/user/users"
  //   ) {
  //     return new NextResponse(
  //       JSON.stringify({ success: false, message: "authentication failed" }),
  //       { status: 401, headers: { "content-type": "application/json" } }
  //     );
  //   }
  //   return new NextResponse(
  //     JSON.stringify({ success: false, message: "authentication failed" }),
  //     { status: 401, headers: { "content-type": "application/json" } }
  //   );
  // }
  // console.log("cookie: ", cookie);
  // if (cookie === undefined)
  //   return new NextResponse(
  //     JSON.stringify({ success: false, message: "authentication failed" }),
  //     { status: 401, headers: { "content-type": "application/json" } }
  //   );
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/api/user/:path*"],
};
