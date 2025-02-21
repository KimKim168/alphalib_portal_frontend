import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { BASE_API_URL, IMAGE_PRODUCT_URL } from "@/env";

export default async function MyListProducts({search}) {
  // const res = await fetch(BASE_API_URL + "/brands?with_books=1"); //brands
  const res = await fetch(BASE_API_URL + `/category_with_products?search=${search}`);
  const categories = await res.json();
  // console.log(categories);

  return (
    <>
      <section className="px-2 mb-5 md:py-5 mx-auto max-w-screen-2xl xl:px-20">
        {categories?.map(
          (category) =>
            category.books?.length > 0 && (
              <div key={category.id}>
                <div className="flex items-center justify-between pb-1 mt-6 md:mt-8 mb-4 border-b-2 border-blue-bold">
                  <p className="text-[12px] sm:text-[16px] md:text-[17px] border-double shadow-md  text-white border-x-[5px] background-gradient1  rounded-br-full px-8 py-1">
                    {category.name}
                  </p>
                  <Link
                    href={`/articles?categoryId=${category.id}`}
                    className="text-[12px] sm:text-[16px] md:text-[17px] hover:underline cursor-pointer text-hover"
                  >
                    View More
                  </Link>
                </div>
                <div className="flex">
                  <Carousel className="w-full">
                    <div>
                      <CarouselContent className="">
                        {category.books?.map((item, id) => (
                          <CarouselItem
                            key={id}
                            className="pl-2 basis-1/2 sm:basis-1/3 md:basis-1/4 xl:basis-1/5"
                          >
                            {/* Product Card */}

                            <div className="h-full overflow-hidden border border-blue rounded-md hover:scale-90 transition-transform duration-500">
                              <Link
                                href={`/articles/${item.id}`}
                                className="relative"
                              >
                                <Image
                                  className="object-cover w-full mx-auto border-b aspect-video dark:hidden "
                                  src={IMAGE_PRODUCT_URL + item.image}
                                  width={600}
                                  height={600}
                                  alt="product "
                                />
                                {/* {item.discount > 0 && (
                                  <div className="absolute top-0 ">
                                    <div
                                      key={item.id}
                                      className="bg-red-700 font-medium rounded-br-2xl italic text-white py-1 px-3 "
                                    >
                                      <p> - ${item.discount}</p>
                                    </div>
                                  </div>
                                )} */}
                              </Link>

                              <div className="p-4">
                                <Link
                                  href={`/articles/${item.id}`}
                                  className="text-sm leading-tight text-gray-900 line-clamp-2 hover:underline dark:text-white"
                                >
                                  {item.title}
                                </Link>
                                
                               
                              </div>
                              {/* <div className="p-2 ">
                              <Link
                                  href={`/articles/${item.id}`}
                                  className="text-sm text-end leading-tight text-gray-900 line-clamp-2 hover:underline dark:text-white"
                                >
                                  Read more
                                </Link>
                                </div> */}
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                    </div>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              </div>
            )
        )}
      </section>
    </>
  );
}
