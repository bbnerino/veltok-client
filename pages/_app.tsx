import type { AppProps } from "next/app";
import "../styles/global.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({
          duration: 3000,
        });
        AOS.refresh();
      });
    }
  }, []);
  return <Component {...pageProps} />;
}
