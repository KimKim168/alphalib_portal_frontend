"use client";
import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css"; // Required styles
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"; // Thumbnail plugin
import "yet-another-react-lightbox/plugins/thumbnails.css"; // Thumbnail plugin styles
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Image from "next/image";

// const photos = [
//   "/assets/images/product4.png",
//   "/assets/images/product6.jpg",
//   "/assets/images/product5.png",
//   "/assets/images/product7.png",
//   "/assets/images/product8.png",
// ];

const MyImageGallery = ({ photos }) => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = photos.map((src) => ({ src })); // Convert photos array to Lightbox format
  // console.log(photos.images);
  return (
    <div>
      {/* Large image at the top */}
      <div className="w-full mb-2">
        <Image
          width={400}
          height={400}
          src={photos[0]}
          alt="Large Image"
          className="w-full aspect-[19/6] object-cover border p-2 rounded-lg"
          onClick={() => {
            setCurrentIndex(0);
            setOpen(true);
          }}
        />
      </div>

      {/* Thumbnails for the rest of the images */}
      {/* <div className="grid grid-cols-5 gap-2">
        {photos.slice(1).map((photo, index) => (
          <Image
            width={500}
            height={500}
            key={index}
            src={photo}
            alt={`Image ${index + 2}`} // Adjusted index for thumbnails
            className="w-full aspect-video border object-cover cursor-pointer rounded-lg"
            onClick={() => {
              setCurrentIndex(index + 1); // Adjust index for thumbnails
              setOpen(true);
            }}
          />
        ))}
      </div> */}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={currentIndex}
        plugins={[Thumbnails, Zoom, Slideshow, Fullscreen]}
      />
    </div>
  );
};

export default MyImageGallery;
