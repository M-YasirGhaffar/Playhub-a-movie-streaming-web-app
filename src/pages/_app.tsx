import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";
import NextNprogress from "nextjs-progressbar";
import { MdArrowUpward } from "react-icons/md";
import ScrollToTop from "react-scroll-to-top";
import { type AppType } from "next/app";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Toaster />
      <NextNprogress
        color="#424242"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Component {...pageProps} />
      <ScrollToTop
        smooth
        style={{
          background: "transparent",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
          borderRadius: "50%",
          position: "fixed",
          bottom: 20,
        }}
      />
    </>
  );
};

export default MyApp;