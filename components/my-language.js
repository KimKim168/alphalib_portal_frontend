"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

function MyLanguage() {
  return (
    <>
      {" "}
      <Select defaultValue="English">
        <SelectTrigger className="w-[83px] px-0 py-0 shadow-none justify-center rounded-none">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="English">
            <div className="flex items-center">
              <Image
                src="/assets/images/flageUk.png"
                width={20}
                height={20}
                alt="Flag"
                className="w-7 md:w-5 md:h-5 rounded-full "
              />
              <p className="ml-1 text-sm md:text-[16px]">EN</p>
            </div>
          </SelectItem>
          <SelectItem value="Khmer">
            <div className="flex items-center">
              <Image
                src="/assets/images/flageKH.png"
                width={20}
                height={20}
                alt="Flag"
                className="w-7 md:w-5 md:h-5 "
              />
              <p className="ml-1 text-sm md:text-[16px]">KH</p>
            </div>
          </SelectItem>
        </SelectContent>
      </Select>
    </>
  );
}

export default MyLanguage;
