import type { AppProps } from "next/app";
import "../styles/global.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({ duration: 3000 });
        AOS.refresh();
      });
    }
  }, []);
  return (
    <SessionProvider refetchOnWindowFocus={false} session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
