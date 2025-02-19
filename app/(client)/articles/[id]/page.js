import MyGallery from "@/components/my-gallery";
import DescriptionTab from "@/components/products/description-tab";
import {
  BASE_API_URL,
  IMAGE_PRODUCT_URL,
  MULTI_IMAGE_PRODUCT_URL,
} from "@/env";
import React from "react";

export default async function MyProduct({ params }) {
  const { id } = await params;
  const respone = await fetch(`${BASE_API_URL}/products/${id}`, {
    next: { revalidate: 600 },
  });
  const result = await respone.json();
  // console.log(result);
  const brand = result?.brand;
  const category = result?.category;
  const sub_category = result?.sub_category;

  const responeLink = await fetch(`${BASE_API_URL}/links`, {
    next: { revalidate: 600 },
  });
  const resultLink = await responeLink.json();
  const images = result?.images.map(
    (item) => `${MULTI_IMAGE_PRODUCT_URL}${item.image}`
  );
  const videos = result?.videos?.map((item) => {
    return {
      id: item.id,
      url: item.url,
      image: `${MULTI_IMAGE_PRODUCT_URL}${item.image}`,
    };
  });
  // console.log(videos);
  const productRelated = await fetch(
    `${BASE_API_URL}/products?categoryId=${result?.category_id}`,
    { next: { revalidate: 600 } }
  );
  const resultProductRelated = await productRelated.json();
  // console.log(resultProductRelated.data);
  const res = await fetch(`${BASE_API_URL}/categories?withSub=2`, {
    next: { revalidate: 600 },
  });
  const categories = await res.json();
  // console.log([`${IMAGE_PRODUCT_URL}${result?.image}`, ...images]);
  return (
    <>
      <section className="px-2 mx-auto mt-5 mb-10 max-w-screen-2xl xl:px-20 ">
        {/* <MyBreadCrumb result={result?.title} /> */}
        <div className="mt-3">
          <div className="flex flex-col grid-cols-12 gap-12 sm:grid">
            <div className="sm:col-span-12 md:col-span-8  ">
              <MyGallery
                photos={[`${IMAGE_PRODUCT_URL}${result?.image}`, ...images]}
              />
            </div>

            <div className=" sm:col-span-12 md:col-span-4 flex text-center justify-center items-center text-blue xl:ml-5 ">
            <p className="text-lg font-semibold md:text-xl  ">
                  {result?.title}
                </p>
              {/* <div>
                
                <div className="mt-4">
                  <ul className="space-y-2 text-sm md:text-lg">
                    <li>
                      <ul className="flex items-center gap-5">
                        <li className="col-span-6 ">Shipping:</li>
                        <li className="col-span-6 text-gray-700">
                          {" "}
                          {result?.shipping > 0.0
                            ? `${result?.shipping} $`
                            : "Free"}
                        </li>
                      </ul>
                    </li>
                    {brand?.name && (
                      <li>
                        <ul className="flex items-center gap-5">
                          <li className="col-span-6 ">Brand:</li>
                          <li className="col-span-6 text-gray-700">
                            <Link
                              className="hover:underline"
                              href={`/products?brandId=${brand?.id}`}
                            >
                              {brand?.name}
                            </Link>
                          </li>
                        </ul>
                      </li>
                    )}

                    <li>
                      <ul className="flex items-center w-full gap-5">
                        <li className="col-span-6 ">Category:</li>
                        <li className="flex items-center col-span-6 gap-2 text-gray-700">
                          <Link
                            href={`/products?categoryId=${category?.id}`}
                            className="hover:underline"
                          >
                            {category?.name}
                          </Link>
                          {sub_category?.name && (
                            <Link
                              href={`/products?subCategoryId=${sub_category?.id}&categoryId=${category?.id}`}
                              className="hover:underline"
                            >
                              / {sub_category?.name}
                            </Link>
                          )}
                        </li>
                      </ul>
                    </li>
                    <li>
                      <ul className="flex items-center justify-start gap-5 text-lg font-semibold md:text-xl">
                        <li className="col-span-6 ">Price:</li>
                        <li className="col-span-6 text-color">
                          {result.discount ? (
                            <div className="flex items-center justify-end gap-2">
                            
                              <p className="line-through text-gray-400 font-normal ">
                              ${result.price}
                              </p>

                              
                              <p className="font-semibold text-red-600">
                                ${result.price - result.discount}
                              </p>
                            </div>
                          ) : (
                            <p className="font-medium">${result.price}</p>
                          )}
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-between w-full pb-0 mt-5 mb-8 border-b-2 hover:no-underline border-blue-bold"></div>

              <div>
                <div className="grid items-center grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-4 md:gap-3 ">
                  <MyOrderWithTelegram id={id} />
                  {resultLink?.map(
                    (item) =>
                      item?.link_in_product_detail == 1 && (
                        <Link
                          key={item.id}
                          href={item.link}
                          target="_blank"
                          className="flex items-center justify-center w-full gap-1 p-1 border rounded-md sm:p-2 md:gap-2"
                        >
                          <Image
                            src={IMAGE_LINKS_URL + item.image}
                            width={600}
                            height={600}
                            className="w-7 xl:w-10"
                            alt="image"
                          />
                          <span className="text-[10px] sm:text-[10px] xl:text-[13px]">
                            Order with {item.name}
                          </span>
                        </Link>
                      )
                  )}
                </div>

                
              </div>
*/}
              <div className="mt-5 ">
                {/* <MyVideoGallery videos={videos} /> */}
              </div> 
            
            </div>
          </div>
          {/* Content utttom */}
          {result?.description && (
            <DescriptionTab description={result?.description} />
          )}
          {/*End Content utttom */}
        </div>
        {/* <div className="flex items-center justify-between w-full pb-0 mt-5 mb-8 border-b-2 hover:no-underline border-blue-bold"></div> */}
      </section>
      {/* {resultProductRelated?.data?.length > 0 && (
        <MyRelatedProduct
          categoryId={result?.category_id}
          productRelated={resultProductRelated.data}
        />
      )} */}
    </>
  );
}
