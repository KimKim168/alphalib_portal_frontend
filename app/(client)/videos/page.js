import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Play } from "lucide-react"; // Import the play icon

import { BASE_API_URL, MULTI_IMAGE_VIDEO_URL } from "@/env";

export default async function MyVideoProducts(props) {
  const searchParams = await props.searchParams;
  const search = searchParams.search || "";
  const response = await fetch(`${BASE_API_URL}/videos?search=${search}`, {
    next: { revalidate: 600 },
  });
  const resp = await response.json();
  const videos = resp.data;

  return (
    <section className="px-2 py-5 mx-auto max-w-screen-2xl xl:px-20">
      {videos?.length > 0 && (
        <div>
         
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
            {videos.map((item) => (
              <div
                key={item.id}
                className="relative h-full overflow-hidden border border-blue rounded-md hover:scale-90 transition-transform duration-500"
              >
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
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
