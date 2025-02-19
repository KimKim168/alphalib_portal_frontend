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
            <p className="text-[12px] sm:text-[16px] md:text-[17px] border-double shadow-md  text-white border-x-[5px] background-gradient1  rounded-br-full px-8 py-1">
              Related articles
            </p>
            <Link
              href={`/articles?categoryId=${categoryId}`}
              className="text-[12px] sm:text-[16px] md:text-[17px] hover:underline cursor-pointer text-hover"
            >
              View More
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4 sm:grid-cols-3 md:grid-cols-4 md:mb-8 lg:grid-cols-5 xl:grid-cols-6">
          {productRelated?.map((item) => (
             <div key={item.id} className="h-full overflow-hidden border border-blue rounded-md hover:scale-90 transition-transform duration-500">
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
          ))}
        </div>
      </div>
    </div>
  );
}
