import Image from "next/image";
import React from "react";

const MyFloatTelegram = () => {
  return (
    <a
      href="https://t.me/chhayhokcomputersale2"
      className="fixed bottom-4 right-4 z-50 p-2 sm:p-3   hover:bg-blue-600 text-white shadow-lg rounded-full flex items-center justify-center transition-all duration-200"
      aria-label="Chat with us on Telegram"
    >
      <Image
        src="/assets/images/telegram.png"
        width={600}
        height={600}
        className="w-12"
        alt="Telegram Icon"
      />
    </a>
  );
};

export default MyFloatTelegram;
