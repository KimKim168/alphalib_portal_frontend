"use client";
import React from "react";
import { Link as IconLink } from "lucide-react";
import Image from "next/image";
import { IMAGE_LINKS_URL } from "@/env";

function MySocialMedia({ resultContact, resultLink }) {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-12 p-6 bg-white shadow-lg rounded-lg">
      {/* Contact Information Section */}
      <div className="flex-1">
        <h2 className="text-2xl font-extrabold mb-6 text-gray-800">
          {resultContact.name}
        </h2>

        {/* Contact Details */}
        <div className="space-y-4">
          {/* Address */}
          <div className="flex items-start gap-3">
            <Image
              src="/assets/images/location.png"
              width={24}
              height={24}
              alt="Location icon representing address"
              className="w-6 h-6"
            />
            <p className="text-gray-600 text-sm">{resultContact.address}</p>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-3">
            <Image
              src="/assets/images/telephone.png"
              width={24}
              height={24}
              alt="Phone icon representing contact number"
              className="w-6 h-6"
            />
            <p className="text-gray-600 text-sm">{resultContact.phone}</p>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3">
            <Image
              src="/assets/images/gmail.png"
              width={24}
              height={24}
              alt="Email icon representing email address"
              className="w-6 h-6"
            />
            <p className="text-gray-600 text-sm">{resultContact.email}</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          {resultLink.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              title={`Visit ${item.name}`}
              aria-label={`Link to ${item.name}`}
              className="flex items-center gap-2 p-3 rounded-lg bg-gray-100 hover:bg-blue-100 hover:shadow-md transition-all duration-150"
            >
              <Image
                src={`${IMAGE_LINKS_URL}${item.image}`}
                width={24}
                height={24}
                alt={`${item.name} icon`}
                className="w-6 h-6"
              />
              <span className="text-sm text-gray-700 font-medium">
                {item.name}
              </span>
              <IconLink className="w-4 h-4 text-gray-500" />
            </a>
          ))}
        </div>
      </div>

      {/* Map Section */}
      <div className="flex-1">
        <h2 className="text-2xl font-extrabold mb-6 text-gray-800">Find Us</h2>
        <iframe
          src={resultContact.map}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map Location"
          className="w-full h-64 sm:h-80 md:w-full md:h-[450px] rounded-lg shadow-lg"
        ></iframe>
      </div>
    </div>
  );
}

export default MySocialMedia;
