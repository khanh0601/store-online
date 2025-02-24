
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "../styles/global.css";
import { GsapProvider } from "../util/GsapProvider";
import Cursor from "@/components/Cursor";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className="body">
        <Providers>
          <GsapProvider>
            <Cursor />
            <Header />
            {children}
            <Footer />
            <ScrollToTop />
          </GsapProvider>
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";