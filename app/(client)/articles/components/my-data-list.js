import MyPagination from "@/components/my-pagination";
import { BASE_API_URL, IMAGE_PRODUCT_URL } from "@/env";
import { ListX } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function MyDataList({
  search,
  categoryId,
  subCategoryId,
  brandId,
  priceFrom,
  priceTo,
  orderBy,
  orderDir,
  perPage,
  page,
}) {
  const res = await fetch(
    `${BASE_API_URL}/products?search=${search}&categoryId=${categoryId}&subCategoryId=${subCategoryId}&brandId=${brandId}&priceFrom=${priceFrom}&priceTo=${priceTo}&orderBy=${orderBy}&orderDir=${orderDir}&perPage=${perPage}&page=${page}`,
    { next: { revalidate: 600 } }
  );
  const result = await res.json();
  const products = result?.data;

  const from = result?.from;
  const to = result?.to;
  const total = result?.total;
  const links = result?.links;
  return (
    <>
      <div className="flex-1 ">
        {products?.length < 1 && (
          <p className="flex items-center justify-center w-full h-20 gap-2">
            <ListX /> No Data
          </p>
        )}
        <div className="grid grid-cols-2 gap-4 mb-4 sm:grid-cols-3 md:grid-cols-4 md:mb-8 lg:grid-cols-5 ">
          <>
            {products?.map((item) => (
              <div
                key={item.id}
                className="h-full overflow-hidden border border-blue rounded-md hover:scale-90 transition-transform duration-500"
              >
                <Link
                  href={`/articles/${item.id}`}
                  key={item.id}
                  className="relative"
                >
                  <Image
                    width={600}
                    height={600}
                    className="object-cover w-full mx-auto border-b aspect-video dark:hidden "
                    src={IMAGE_PRODUCT_URL + item.image}
                    alt="product"
                  />
                 
                </Link>
                <div className="p-2">
                  <Link
                    href={`/articles/${item.id}`}
                    className="text-sm leading-tight text-gray-500 line-clamp-2 hover:underline dark:text-white"
                  >
                    {item.title}
                  </Link>
                  
                </div>
              </div>
            ))}
          </>
        </div>
        {/* pagination */}
        {total > 0 && (
          <MyPagination from={from} to={to} total={total} links={links} />
        )}
      </div>
    </>
  );
}
