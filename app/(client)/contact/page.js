import React from "react";

import MySocialMedia from "@/components/my-social-media";
import { BASE_API_URL } from "@/env";

export const metadata = {
  title: "Explore Our Contact - Chhayhok.com",
  icons: {
    icon: "/assets/images/chhayhokLogo.png",
    shortcut: "/assets/images/chhayhokLogo.png",
    apple: "/assets/images/chhayhokLogo.png",
  },
  openGraph: {
    title: "Chhayhok - Contact Us",
    description: "Get in touch with us through our contact page.",
    url: "https://chhayhok.com/contact",
    siteName: "Chhayhok",
    images: [
      {
        url: "/assets/images/contact.png", // Replace with a relevant contact page image
        width: 1200,
        height: 630,
        alt: "Chhayhok Contact Page Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chhayhok - Contact Us",
    description: "Get in touch with us through our contact page.",
    images: ["/assets/images/contact.png"], // Replace with a relevant contact page image
  },
};

const page = async () => {
  const responeContact = await fetch(`${BASE_API_URL}/contact`, {
    next: { revalidate: 600 },
  });
  const resultContact = await responeContact.json();
  const responeLink = await fetch(`${BASE_API_URL}/links`, {
    next: { revalidate: 600 },
  });
  const resultLink = await responeLink.json();
  return (
    <div className="min-h-[50vh] max-w-screen-2xl mb-10 mx-auto px-4 sm:px-6 lg:px-20 mt-5">
      <MySocialMedia resultContact={resultContact} resultLink={resultLink} />
    </div>
  );
};

export default page;
