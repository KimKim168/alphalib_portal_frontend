"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
// import MyUser from "./my-user";
import { Contact, Home, Package, PhoneCallIcon, User } from "lucide-react";
import { usePathname } from "next/navigation";
import MyAllCategory from "./my-all-categories";
import Link from "next/link";
import { BASE_BACKEND_URL } from "@/env";
// import MyLanguage from "./my-language";

function MyMenu({ resultCate, resultContact }) {
  const pathname = usePathname();

  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/assets/images/menu.png"
            width="20"
            height="20"
            alt="menu"
            aria-label="Open menu" // Optional for accessibility
            className="bg-white w-9 p-[5px] rounded-md"
          />
          
        </SheetTrigger>
       
        <SheetContent>
          <SheetHeader>
          <Link href={BASE_BACKEND_URL} >
                  <User className=" min-w-5"></User>
            </Link>
            {/* <MyLanguage /> */}
            <SheetTitle className="text-center">Menu</SheetTitle>
            <hr></hr>
            <ul className="text-start">
              <li className="my-3 flex items-center gap-3">
                <MyAllCategory resultCate={resultCate} />
              </li>
              <li className="my-3 flex items-center gap-3">
                {/* <Image
                  src="/assets/images/home.png"
                  width="25"
                  height="25"
                  alt="home"
                /> */}
                <a
                  href="/"
                  className={`py-2 rounded ${
                    pathname === "/"
                      ? "underline underline-offset-4 text-blue font-semibold"
                      : "text-black hover:text-blue-500"
                  }`}
                >
                  Home
                </a>
              </li>
             
              <li className="my-3 flex items-center gap-3">
                <a
                  href="/articles"
                  className={`py-2 rounded ${
                    pathname === "/articles"
                      ? "underline underline-offset-4 text-blue font-semibold"
                      : "text-black hover:text-blue-500"
                  }`}
                >
                  Articles
                </a>
              </li>
              <li className="my-3 flex items-center gap-3">
                <a
                  href="/videos"
                  className={`py-2 rounded ${
                    pathname === "/videos"
                      ? "underline underline-offset-4 text-blue font-semibold"
                      : "text-black hover:text-blue-500"
                  }`}
                >
                  Videos
                </a>
              </li>
             
              {/* <li className="my-3 flex items-center gap-3">
                <a
                  href="/contact"
                  className={`py-2 rounded ${
                    pathname === "/contact"
                      ? "underline underline-offset-4 text-blue font-semibold"
                      : "text-black hover:text-blue-500"
                  }`}
                >
                  Contact Us
                </a>
              </li> */}
              {/* <li className="my-3 flex items-center gap-3">
                <Image
                  src="/assets/images/video.png" // Replace with the correct image path
                  width="25"
                  height="25"
                  alt="about us"
                />
                <a
                  href="/video-gallery"
                  className={`py-2 rounded ${
                    pathname === "/video-gallery"
                      ? "underline underline-offset-4 text-blue font-semibold"
                      : "text-black hover:text-blue-500"
                  }`}
                >
                  Videos
                </a>
              </li> */}
              {/* <li className="my-3 flex items-center gap-3">
                <a
                  href="/about"
                  className={`py-2 rounded ${
                    pathname === "/about"
                      ? "underline underline-offset-4 text-blue font-semibold"
                      : "text-black hover:text-blue-500"
                  }`}
                >
                  About Us
                </a>
              </li> */}
            </ul>
          </SheetHeader>
          <SheetFooter className="sticky bottom-0  z-50 bg-white py-4 border-t border-gray-200">
            {/* <div className="text-black text-sm md:text-[16px] flex items-center justify-between">
              <div className="flex  items-center space-x-1">
                <PhoneCallIcon className="mr-1 md:mr-2 w-5 md:w-5" />
                <p className="text-[16px] text-start">{resultContact.phone}</p>
              </div>
              <MyUser />
            </div> */}
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}

export default MyMenu;
