"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IMAGE_CATE_URL } from "@/env";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function MyProductCategory({ categories }) {
  // const respone = await fetch(`${BASE_API_URL}/categories`);
  // const result = await respone.json();
  // //   console.log(result);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSelect = (categoryId) => {
    const params = new URLSearchParams(searchParams);
    if (categoryId) {
      params.set("categoryId", categoryId);
    } else {
      params.delete("categoryId");
    }
    replace(`products?${params.toString()}`);
  };
  return (
    <>
      <section className="max-w-screen-2xl mx-auto px-2 xl:px-20 py-7 md:py-14">
        <div>
          <div className="flex overflow-x-auto py-2 items-center  scroll-smooth scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-500">
            {categories.map((item) => (
              <button key={item.id} onClick={() => handleSelect(item.id)}>
                <div
                  key={item.id}
                  className="flex flex-col items-center justify-center min-w-[100px] md:min-w-[150px]"
                >
                  <Image
                    src={IMAGE_CATE_URL + item.image}
                    width={300}
                    height={300}
                    className=" w-[40px] h-[35px] md:w-[70px] md:h-[70px] mb-2  object-cover"
                    alt="image"
                  />
                  <p className="text-center text-[12px] md:text-sm ">
                    {item.name}
                  </p>
                </div>
              </button>
            ))}
            {/* <CarouselPrevious />
              <CarouselNext /> */}
          </div>
        </div>
      </section>
    </>
  );
}
