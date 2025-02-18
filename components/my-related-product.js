import { IMAGE_PRODUCT_URL } from "@/env";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MyRelatedProduct({ productRelated, categoryId }) {
  return (
    <div>
      <div className="px-2 py-5 mx-auto max-w-screen-2xl xl:px-20">
        <div>
          <div className="flex items-center justify-between pb-1 mb-4 border-b-2 border-blue-bold">
            <p className="text-[12px] sm:text-[16px] md:text-[17px] border-double shadow-md  text-white border-x-[5px] background-gradient1 rounded-tl-full rounded-br-full px-8 py-1">
              Related products
            </p>
            <Link
              href={`/products?categoryId=${categoryId}`}
              className="text-[12px] sm:text-[16px] md:text-[17px] hover:underline cursor-pointer text-hover"
            >
              View More
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4 sm:grid-cols-3 md:grid-cols-4 md:mb-8 lg:grid-cols-5 xl:grid-cols-6">
          {productRelated?.map((item) => (
            <div key={item.id} className="overflow-hidden border border-blue">
              <div className="w-full aspect-square">
                <Link href={`/products/${item.id}`} className="relative">
                  <Image
                    className="object-contain w-full mx-auto transition-transform duration-300 border-b aspect-square dark:hidden hover:scale-105"
                    width={600}
                    height={600}
                    src={IMAGE_PRODUCT_URL + item.image}
                    alt="product"
                  />
                  {item.discount > 0 && (
                    <div className="absolute top-0 ">
                      {/* <MyDescoundOnListProducts /> */}
                      <div
                        key={item.id}
                        className="bg-red-700 font-medium rounded-br-2xl italic text-white py-1 px-3 "
                      >
                        <p> - ${item.discount}</p>
                      </div>
                    </div>
                  )}
                </Link>
              </div>
              <div className="p-2">
                <Link
                  href={`/products/${item.id}`}
                  className="text-sm leading-tight text-gray-500 line-clamp-2 hover:underline dark:text-white"
                >
                  {item.title}
                </Link>
                <div className="items-center justify-between mt-2 overflow-hidden text-sm">
                  <div className="grid grid-cols-12 items-center gap-2 md:text-[16px] text-red-600">
                    {/* Price Label */}
                    <p className="col-span-6 font-medium">Price:</p>

                    {/* Price Value */}
                    <div className="col-span-6 text-end">
                      {item.discount ? (
                        <div className="flex items-center justify-end gap-2">
                          {/* Original Price (Strikethrough) */}
                          <p className="line-through text-gray-400 font-normal ">
                            {/* ${item.price.toFixed(2)} */}${item.price}
                          </p>

                          {/* Discounted Price */}
                          <p className="font-semibold text-red-600">
                            ${item.price - item.discount}
                          </p>
                        </div>
                      ) : (
                        <p className="font-medium">${item.price}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
