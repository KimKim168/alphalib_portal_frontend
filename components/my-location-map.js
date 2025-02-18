"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

function Mylocation() {
  return (
    <>
      <div>
        <h2 className="text-xl font-bold mb-4">Find Us</h2>
        <div className="">
          <Link
            href="https://goo.gl/maps/kKudQoV4CYuRP8mu8"
            aria-label="View our location on Google Maps"
            target="_blank"
          >
            <Image
              src="/assets/images/imageMap.png"
              width={600}
              height={600}
              alt="Google Maps Placeholder"
              className="w-full h-full  object-cover rounded-lg shadow-md"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Mylocation;
