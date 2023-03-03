import React from "react";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";

interface pageProps {}

export default function SigninPage(Component: any, pageProps: any) {
  return (
    <SessionProvider session={pageProps.session}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </SessionProvider>
  );
}
