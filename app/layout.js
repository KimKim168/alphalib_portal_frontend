import localFont from "next/font/local";
import "./globals.css";
import { Poppins } from "next/font/google";

import MyFooter from "@/components/my-footer";
import { Suspense } from "react";
import MyLoadingAnimation from "@/components/my-loading-animation";
import HomeHeader from "./components/home-header";
import MyFloatTelegram from "@/components/my-float-telegram";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export default function RootLayout({ children }) {
  // const res = await fetch(`${BASE_API_URL}/categories`);
  // const resultCate = await res.json();
  // console.log(resultCate);

  return (
    <html lang="en">
      <body
        className={` ${poppins.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MyFloatTelegram />
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
