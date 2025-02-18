"use client";
import React, { Suspense } from "react";
import { usePathname } from "next/navigation";
import MyAllCategory from "./my-all-categories";
import SearchInput from "./ui/SearchInput";

function MyNavigation({ resultCate }) {
  // console.log(resultCate);
  const pathname = usePathname();
  return (
    <>
      <div className="w-full border-b shadow-sm">
        <div className="hidden md:flex justify-between text-[10px] sm:text-sm md:text-[16] items-center max-w-screen-2xl mx-auto xl:px-20 ">
          <ul className="flex items-center space-x-3 font-medium lg:flex-row lg:space-x-5 lg:mt-0">
            <li className=" md:p-3">
              <a
                href="#"
                className="flex items-center p-2 text-black rounded text-nowrap bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white"
                aria-current="page"
              >
                <Suspense>
                  <MyAllCategory resultCate={resultCate} />
                </Suspense>
              </a>
            </li>
            <li>
              <a
                href="/"
                className={`px-2 py-2 rounded ${
                  pathname === "/"
                    ? "underline  underline-offset-4  text-blue font-semibold"
                    : "text-black hover:text-blue-500"
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/products"
                className={`px-2 py-2 rounded ${
                  pathname === "/products"
                    ? "underline  underline-offset-4  text-blue font-semibold"
                    : "text-black hover:text-blue-500"
                }`}
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className={`px-2 py-2 rounded ${
                  pathname === "/contact"
                    ? "underline  underline-offset-4  text-blue font-semibold"
                    : "text-black hover:text-blue-500"
                }`}
              >
                Contact Us
              </a>
            </li>

            {/* <li>
              <a
                href="/video-gallery"
                className={`px-2 py-2 rounded ${
                  pathname === "/video-gallery"
                    ? "underline  underline-offset-4  text-blue font-semibold"
                    : "text-black hover:text-blue-500"
                }`}
              >
                videos
              </a>
            </li> */}

            <li>
              <a
                href="/about"
                className={`px-2 py-2 rounded ${
                  pathname === "/about"
                    ? "underline  underline-offset-4  text-blue font-semibold"
                    : "text-black hover:text-blue-500"
                }`}
              >
                About Us
              </a>
            </li>
          </ul>
          {/* <p className="hidden xl:flex">
            Pend $120 more and get free shipping!
          </p> */}
           <div>
        <Suspense>
                        <SearchInput className="flex-1" />
                      </Suspense>
        </div>
        </div>
       
      </div>
    </>
  );
}

export default MyNavigation;
