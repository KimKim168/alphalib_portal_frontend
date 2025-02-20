"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";



// const videos = [
//   // Url MP4
//   {
//     id: 1,
//     url: "https://www.youtube.com/embed/J0NuOlA2xDc?si=IiGdSgybkKc3-Uem",
//     title: "Video 1",
//     image: "/assets/images/product1.png",
//   },
//   // Iframe
//   {
//     id: 2,
//     url: '<iframe width="560" height="315" src="https://www.youtube.com/embed/q1qKv5TBaOA?si=DLEjp-qL6slnc09p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
//     title: "Video 2",
//     image: "/assets/images/product2.png",
//   },
//   // Youtube Embed
//   {
//     id: 3,
//     url: "https://www.youtube.com/embed/J0NuOlA2xDc?si=IiGdSgybkKc3-Uem",
//     title: "Video 2",
//     image: "/assets/images/product8.png",
//   },
//   // Locale
//   {
//     id: 3,
//     url: "https://www.youtube.com/embed/J0NuOlA2xDc?si=IiGdSgybkKc3-Uem",
//     title: "Video 3",
//     image: "/assets/images/product4.png",
//   },
// ];

export default function MyVideos({ className, videos }) {
  
  // console.log(videos);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      console.log(`Currently displaying: ${videos[currentIndex].title}`);
    }
  }, [currentIndex, isOpen]);

  const getVideoUrl = (src) => {
    // Check if the src is an iframe HTML string
    const iframeRegex = /<iframe.*?src="(.*?)"/;
    const match = src.match(iframeRegex);
    return match ? match[1] : src; // Return the extracted URL or the original src
  };

  const nextSlide = () => {
    if (currentIndex < videos.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <>
      <div
        className={`grid grid-cols-12 gap-4 ${className}`}
      >
        {videos?.map((item, index) => (
          <div
            key={index}
            className="overflow-hidden border rounded-md col-span-12  p-2 cursor-pointer group "
            onClick={() => {
              setCurrentIndex(index); // Set current video index
              setIsOpen(true); // Open the lightbox
            }}
          >
            <div className="relative w-full overflow-hidden rounded-md aspect-[19/6] object-cover ">
              <img
                src={item.image} // Replace with dynamic thumbnail if available
                alt=""
                className="object-cover w-full transition-all duration-300 transform aspect-video group-hover:scale-105"
              />
              <span className="absolute bg-black/50 border-[0.5px] -translate-x-1/2 group-hover:bg-primary bg-primary/80 rounded-full p-1.5 -translate-y-1/2 text-white top-[50%] left-[50%]">
                <Play size={24} />
              </span>
            </div>
            {/* <div className="mt-1 text-sm font-medium text-start p-2 text-gray-700 group-hover:text-blue-500">
              {item.title}
            </div>
           */}
         
          </div>
            
            
        ))}

      </div>
      {videos?.length > 0 && (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="flex flex-col w-full h-full max-w-full bg-black border-none px-14">
            <DialogTitle className="hidden" />
            <DialogDescription className="hidden" />
            <div className="relative flex-grow">
              <iframe
                src={`${getVideoUrl(videos[currentIndex].url)}?&autoplay=1`} // Ensure autoplay works on YouTube
                className="w-full h-full rounded-2xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute transform -translate-y-1/2 group top-1/2 left-2"
              onClick={prevSlide}
              aria-label="Previous video"
              disabled={currentIndex === 0} // Disable button if on the first video
            >
              <ChevronLeft
                className="text-white group-hover:text-black"
                size={28}
              />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute transform -translate-y-1/2 group top-1/2 right-2"
              onClick={nextSlide}
              aria-label="Next video"
              disabled={currentIndex === videos.length - 1} // Disable button if on the last video
            >
              <ChevronRight
                className="text-white group-hover:text-black"
                size={28}
              />
            </Button>
            <Button onClick={() => setIsOpen(false)} size='icon' variant='ghost' className="absolute right-4 z-50 top-4 border-white text-white rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-neutral-100 data-[state=open]:text-neutral-500 dark:ring-offset-neutral-950 dark:focus:ring-neutral-300 dark:data-[state=open]:bg-neutral-800 dark:data-[state=open]:text-neutral-400">
              <X className="w-8 h-8" />
              <span className="sr-only">Close</span>
            </Button>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
