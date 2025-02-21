import "./globals.css";

import MyFooter from "@/components/my-footer";
import { Suspense } from "react";
import MyLoadingAnimation from "@/components/my-loading-animation";
import HomeHeader from "./components/home-header";


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={` antialiased `}
      >
        {/* <MyFloatTelegram /> */}
        <HomeHeader />

        {/*End Slider */}
        <Suspense fallback={<MyLoadingAnimation />}>
          <div className="min-h-[70vh]">{children}</div>
        </Suspense>

        {/* Footer */}

        <MyFooter />

        {/*End Footer */}
      </body>
    </html>
  );
}
