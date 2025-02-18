"use client";
import Image from "next/image";
import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export default function MyAppleBrand() {
  const products = [
    {
      id: 1,
      image: "/assets/images/imag7.webp",
      alt: "Blueo PVD Stainless Steel Camera Lens Protector",
      title:
        "Blueo PVD Stainless Steel Camera Lens Protector for iPhone 15 Pro Max White",
      price: "$15.59",
    },
    {
      id: 2,
      image: "/assets/images/image8.jpg",
      alt: "Blueo PVD Stainless Steel Camera Lens Protector",
      title:
        "Blueo PVD Stainless Steel Camera Lens Protector for iPhone 15 Pro Max White",
      price: "$15.59",
      view: "20",
    },
    {
      id: 3,
      image: "/assets/images/product3.jpg",
      title: "Acer Revo Base RN66 RMN:ARNP1",
      price: "$30",
      view: "20",
    },
    {
      id: 4,
      image: "/assets/images/product3.jpg",
      title: "Acer Revo Base RN66 RMN:ARNP1",
      price: "$30",
      view: "20",
    },
    {
      id: 5,
      image: "/assets/images/product4.png",
      title: "Acer Revo Base RN66 RMN:ARNP1",
      price: "$30",
      view: "20",
    },
    {
      id: 7,
      image: "/assets/images/product5.png",
      title: "Acer Revo Base RN66 RMN:ARNP1",
      price: "$30",
      view: "20",
    },
    {
      id: 6,
      image: "/assets/images/image7.webp",
      alt: "Blueo PVD Stainless Steel Camera Lens Protector",
      title:
        "Blueo PVD Stainless Steel Camera Lens Protector for iPhone 15 Pro Max White",
      price: "$15.59",
      view: "20",
    },
  ];
  return (
    <>
      <section className="max-w-screen-2xl  mx-auto px-2 xl:px-20 py-5">
        <div>
          <div className="flex justify-between items-center border-b-2 pb-1 border-blue-bold  mb-4">
            <p className="text-[12px] sm:text-[16px] md:text-[17px] border-double shadow-md  text-white border-x-[5px] background-gradient1 rounded-tl-full rounded-br-full px-8 py-1">
              Laptop Asus
            </p>
            <a
              href="/categories"
              className="text-[12px] sm:text-[16px] md:text-[17px] hover:underline cursor-pointer text-hover"
            >
              View More
            </a>
          </div>
        </div>

        <div className="flex">
          {/* <div className="aspect-square w-96 mr-5 hidden xl:flex">
            <Image
              src="/assets/images/apple2.webp"
              width={5000}
              height={5000}
              className="aspect-square object-cover "
              alt="image"
            />
          </div> */}
          <Carousel className="w-full">
            <div>
              <CarouselContent className="">
                {products.map((item, id) => (
                  <CarouselItem
                    key={id}
                    className="pl-1 basis-1/2  sm:basis-1/3 md:basis-1/4 xl:basis-1/5 2xl:basis-1/6"
                  >
                    {/* Product Card */}
                    <div className=" border mx-2 h-full border-blue bg-white p-4  dark:border-gray-700 dark:bg-gray-800">
                      <div>
                        <a href="/products">
                          <Image
                            className="mx-auto h-full dark:hidden transition-transform duration-300 hover:scale-110"
                            width={600}
                            height={600}
                            src={item.image}
                            alt="product"
                          />
                        </a>
                      </div>
                      <div className="pt-2">
                        <a
                          href="/products"
                          className="text-sm line-clamp-2 leading-tight text-gray-500 hover:underline dark:text-white"
                        >
                          {item.title}
                        </a>
                        <div className=" text-sm mt-1 overflow-hidden justify-between items-center">
                          <div className="text-color grid grid-cols-12 justify-between overflow-hidden text-sm md:text-lg">
                            <p className="col-span-6">Price:</p>
                            <p className="col-span-6 text-end">{item.price}</p>
                          </div>
                          {/* <div className="col-span-6 ">
                    <div className="flex items-center justify-end">
                      <Eye width="16" />
                      <p>{item.view}</p>
                    </div>
                  </div> */}
                        </div>
                        {/* <div className="flex mt-3">
                  <p className="text-blue mr-1">Rate:</p>
                  <div className="flex overflow-hidden">
                    <StarIcon width="16" className="md:ml-2 text-yellow-400" />
                    <StarIcon width="16" className="md:ml-2 text-yellow-400" />
                    <StarIcon width="16" className="md:ml-2 text-yellow-400" />
                    <StarIcon width="16" className="md:ml-2 text-yellow-400" />
                  </div>
                </div> */}
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </>
  );
}
