import MyLoadingAnimation from "@/components/my-loading-animation";
import { BASE_API_URL } from "@/env";

export const metadata = {
  title: "Explore Our About - Chhayhok.com",
  icons: {
    icon: "/assets/images/chhayhokLogo.png",
    shortcut: "/assets/images/chhayhokLogo.png",
    apple: "/assets/images/chhayhokLogo.png",
  },
  openGraph: {
    title: "Chhayhok - About Us",
    description: "Learn more about Chhayhok, our mission, and values.",
    url: "https://chhayhok.com/about",
    siteName: "Chhayhok",
    images: [
      {
        url: "/assets/images/logo.png", // Replace with a relevant "About Us" image
        width: 1200,
        height: 630,
        alt: "Chhayhok About Us Page Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chhayhok - About Us",
    description: "Learn more about Chhayhok, our mission, and values.",
    images: ["/assets/images/logo.png"], // Replace with a relevant "About Us" image
  },
};

async function page() {
  const respone = await fetch(`${BASE_API_URL}/about`, {
    next: { revalidate: 600 },
  });
  const result = await respone.json();
  return (
    <>
      <div className="min-h-[50vh] max-w-screen-2xl px-2 xl:px-20 mx-auto mt-5 mb-5">
        <h1 className="text-xl text-center xl:text-2xl">{result.name}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: result.description }}
          className="text-justify"
        ></div>
      </div>
    </>
  );
}

export default page;
