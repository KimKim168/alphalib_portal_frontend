import Image from "next/image";
import { PhoneCallIcon, Search, User } from "lucide-react";
import Link from "next/link";
import { SearchProduct } from "./my-search-product";
import SearchInput from "./ui/SearchInput";
import MyHomeModal from "./my-home-modal";
import { Suspense } from "react";
import { APP_LOGO, BASE_BACKEND_URL } from "@/env";
import MyMenu from "./my-menu";

const MyHeader = ({ resultCate, resultContact }) => {
  return (
    <>
      <header className="py-3 background-gradient">
        {/* <p className="text-[10px] px-2  text-white  xl:hidden">
          Pend $120 more and get free shipping!
        </p> */}
        <div className="px-2 mx-auto max-w-screen-2xl text-center xl:px-20 md:p-3">
          <div className="grid items-center justify-between grid-cols-12 gap-3">
            <div className="col-span-12 md:col-span-12 xl:col-span-12 ">
              <Link href="https://alphalib.org" className="text-white font-bold text-4xl">
                {/* <img
                  src={APP_LOGO}
                  // width={300}
                  // height={200}
                  alt="logo"
                  className="h-16 w-auto "
                /> */}
                Support Portal<br /><span className="text-xl font-normal">Member Only</span>
              </Link>
            </div>
            <div className="flex items-center justify-end col-span-4 space-x-2 md:hidden">
              {/* <div className="md:hidden bg-white p-[5px] rounded-sm">
                <ShoppingCartIcon />
              </div> */}
              {/* <SearchProduct /> */}

              {/* Menu */}
              {/* <MyMenu resultCate={resultCate} resultContact={resultContact} /> */}
              {/* <Suspense>
                <MyHomeModal categories={resultCate} />
              </Suspense> */}

              {/*End Menu */}
            </div>
            {/* <div className="hidden col-span-8 md:grid xl:col-span-10 ">
              <Suspense>
                <SearchInput className="flex-1" />
              </Suspense>
            </div> */}
            {/* <div className="justify-end hidden space-x-4 sm:col-span-3 xl:col-span-2 md:flex text-nowrap ">
              <div className="text-white text-sm md:text-[16px] flex items-center ">
                <PhoneCallIcon className="w-4 mr-1 md:mr-2 md:w-5"></PhoneCallIcon>
                <p>{resultContact.phone}</p>
              </div>
              <div className="flex items-center space-x-4 overflow-hidden text-white">
                <Link href={BASE_BACKEND_URL}>
                  <User className=" min-w-5"></User>
                </Link>

                <MyLanguage />
              </div>
            </div> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default MyHeader;
