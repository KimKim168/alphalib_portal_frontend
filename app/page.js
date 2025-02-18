import React from "react";
import MySlider from "@/components/MySlider";
import { BASE_API_URL } from "@/env";
import MyNewProduct from "@/components/my-new-product";
import MyProductCategory from "@/components/my-product-category";
import MyListProducts from "@/components/my_list_products";

export const metadata = {
  title: "Welcome to Chhayhok",
  icons: {
    icon: "/assets/images/chhayhokLogo.png",
    shortcut: "/assets/images/chhayhokLogo.png",
    apple: "/assets/images/chhayhokLogo.png",
  },
  openGraph: {
    title: "Chhayhok - Discover Our Products",
    description:
      "Explore a wide range of products and categories on Chhayhok's home page.",
    url: "https://chhayhok.com",
    siteName: "Chhayhok",
    images: [
      {
        url: "/assets/images/metaData.png", // Replace with your actual home page image
        width: 1200,
        height: 630,
        alt: "Chhayhok Home Page Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chhayhok - Explore Products",
    description: "Discover products, categories, and new arrivals on Chhayhok.",
    images: ["/assets/images/metaData.png"], // Replace with your actual home page image
  },
};

export default async function Home(props) {
  const responeTop = await fetch(`${BASE_API_URL}/slides?position=top`, {
    next: { revalidate: 600 },
  });
  const imagesTop = await responeTop.json();
  const responeBottom = await fetch(`${BASE_API_URL}/slides?position=bottom`, {
    next: { revalidate: 600 },
  });
  const imagesBottom = await responeBottom.json();
  // console.log(result);
  const searchParams = await props.searchParams;
  const search = searchParams.search;
  const categoryId = searchParams.categoryId;
  const res = await fetch(`${BASE_API_URL}/categories`, {
    next: { revalidate: 600 },
  });
  const result = await res.json();
  const categories = result;

  return (
    <>
      {/* Slider */}
      {/* <MySlider imagesTop={imagesTop} imagesBottom={imagesBottom} /> */}
      {/*End Slider */}
      {/* <MyProductCategory categories={categories} /> */}
      {/* Card */}
      {/* <MyNewProduct /> */}
      {/*End Card */}
      {/*Product Card */}
      <MyListProducts />
      {/*End product Card */}
    </>
  );
}
