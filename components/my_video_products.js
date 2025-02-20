import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Play } from "lucide-react"; // Import the play icon
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { BASE_API_URL, MULTI_IMAGE_VIDEO_URL } from "@/env";

export default async function MyVideoProducts({ search }) {
  const response = await fetch(`${BASE_API_URL}/videos?search=${search}`, {
    next: { revalidate: 600 },
  });
  const resp = await response.json();
  const videos = resp.data;

  return (
    <section className="px-2 py-5 mx-auto max-w-screen-2xl xl:px-20">
      {videos?.length > 0 && (
        <div>
          <div className="flex items-center justify-between pb-1 mt-8 mb-4 border-b-2 border-blue-bold">
            <h3 className="text-[12px] sm:text-[16px] md:text-[17px] border-double shadow-md text-white border-x-[5px] background-gradient1 rounded-br-full px-8 py-1">
              Videos
            </h3>
            <Link
              href="/videos"
              className="text-[12px] sm:text-[16px] md:text-[17px] hover:underline cursor-pointer text-hover"
            >
              View More
            </Link>
          </div>
          <div className="flex">
            <Carousel className="w-full">
              <div>
                <CarouselContent>
                  {videos.map((item) => (
                    <CarouselItem
                      key={item.id}
                      className="pl-2 basis-1/2 sm:basis-1/3 md:basis-1/4 xl:basis-1/5"
                    >
                      {/* Video Card */}
                      <div className="relative h-full overflow-hidden border border-blue rounded-md hover:scale-90 transition-transform duration-500">
                        <Link href={`/videos/${item.id}`} className="relative">
                          <Image
                            className="object-cover w-full mx-auto border-b aspect-video"
                            src={MULTI_IMAGE_VIDEO_URL + item.image}
                            width={600}
                            height={600}
                            alt={item.name}
                          />
                          {/* Video Play Icon */}

                          <span className="absolute bg-black/50 border-[0.5px] -translate-x-1/2 group-hover:bg-primary bg-primary/80 rounded-full p-1.5 -translate-y-1/2 text-white top-[50%] left-[50%]">
                            <Play size={24} />
                          </span>
                        </Link>
                        <div className="p-4">
                          <Link
                            href={`/videos/${item.id}`}
                            className="text-sm leading-tight text-gray-900 line-clamp-2 hover:underline dark:text-white"
                          >
                            {item.name}
                          </Link>
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
        </div>
      )}
    </section>
  );
}
