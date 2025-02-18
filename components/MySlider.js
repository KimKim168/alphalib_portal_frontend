"use client";
import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";
import { IMAGE_SLIDES_URL } from "@/env";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";

export default function MySlider({ imagesTop, imagesBottom }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  // console.log(imagesTop);
  // Define your image URLs here
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesTop.length);
    }, 4000); // Auto-slide every 4 seconds
    return () => clearInterval(interval);
  }, [imagesTop.length]);

  return (
    <div className="px-2 mx-auto mt-2 max-w-screen-2xl xl:px-20 ">
      {/* Slide ImageTop */}
      <Carousel className="w-full" selectedindex={currentIndex}>
        <CarouselContent>
          <div
            className="relative flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {imagesTop.map((item, index) => (
              <div key={index} className="min-w-full">
                <Link href={item.link || "#"} passHref>
                  <Image
                    src={IMAGE_SLIDES_URL + item.image}
                    alt={`Slide ${index + 1}`}
                    width={2100}
                    height={1200}
                    className="w-full object-cover aspect-[21/9] hover:cursor-pointer"
                  />
                </Link>
              </div>
            ))}
          </div>
        </CarouselContent>

        {/* Dot Indicators */}
        <div className="absolute flex items-center justify-center space-x-3 transform -translate-x-1/2 bottom-3 left-1/2">
          {imagesTop.map((_, index) => (
            <div
              key={index}
              className={`transition-all duration-300 ${
                currentIndex === index
                  ? "h-1 w-4 sm:w-9 sm:h-2 bg-dynamic scale-125 shadow-md"
                  : "h-1 w-2 sm:w-3 sm:h-3 bg-gray-400 opacity-70"
              } rounded-full`}
            ></div>
          ))}
        </div>

        {/* Uncomment the buttons if you want manual controls */}
        {/* 
        <CarouselPrevious className="absolute left-0 p-2 text-white transform -translate-y-1/2 bg-gray-800 rounded-full top-1/2" />
        <CarouselNext className="absolute right-0 p-2 text-white transform -translate-y-1/2 bg-gray-800 rounded-full top-1/2" />
        */}
      </Carousel>
      {/* Slide ImageButton */}
      <div className="mx-auto mt-2 ">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full gap-2 overflow-hidden"
        >
          <CarouselContent>
            {imagesBottom.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-0 basis-1/2 lg:basis-1/3 "
              >
                <div className="p-1">
                  <Card className="rounded-none ">
                    <CardContent className="flex items-center justify-center p-0">
                      <Link href={item.link || "#"} passHref>
                        <Image
                          src={IMAGE_SLIDES_URL + item.image}
                          alt={`src ${index + 1}`}
                          width={1600}
                          height={900}
                          className="aspect-[21/9] object-cover hover:cursor-pointer"
                        />
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious varient="outline" />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
