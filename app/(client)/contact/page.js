import React from "react";

import MySocialMedia from "@/components/my-social-media";
import { BASE_API_URL } from "@/env";

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
