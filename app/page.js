import React from "react";
import MySlider from "@/components/MySlider";
import { BASE_API_URL } from "@/env";
import MyNewProduct from "@/components/my-new-product";
import MyProductCategory from "@/components/my-product-category";
import MyListProducts from "@/components/my_list_products";


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
