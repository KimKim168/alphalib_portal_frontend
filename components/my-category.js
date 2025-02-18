"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import {
  AlignJustifyIcon,
  ArrowRight,
  ChevronsRightIcon,
  Dot,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { IMAGE_CATE_URL } from "@/env";
import Image from "next/image";

function MyCategoryComponent({ categories }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  // console.log(categories);

  const currentCategoryId = searchParams.get("categoryId")?.toString();
  const currentSubCategoryId = searchParams.get("subCategoryId")?.toString();

  const handleSelectCategory = (categoryId) => {
    const params = new URLSearchParams(searchParams);
    if (categoryId) {
      params.set("categoryId", categoryId);
      params.delete("subCategoryId");
    } else {
      params.delete("categoryId");
      params.delete("subCategoryId");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const handleSelectSubCategory = (subCategoryId, categoryId) => {
    const params = new URLSearchParams(searchParams);
    if (subCategoryId) {
      params.set("subCategoryId", subCategoryId);
      params.set("categoryId", categoryId);
    } else {
      params.delete("subCategoryId");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      <div className="w-full mt-4">
        <button
          onClick={() => handleSelectCategory()}
          className={`${
            currentCategoryId == null &&
            "underline text-white text-center background-gradient font-bold bg-primary group text-primary-foreground hover:text-primary"
          } hover:bg-blue-300/10 p-2 py-2 rounded items-center flex gap-1 w-full text-[16px] hover:underline`}
        >
          <AlignJustifyIcon />
          {/* All Categories */}
          All Services
        </button>
        <Accordion
          type="single"
          collapsible
          defaultValue={searchParams.get("categoryId")}
        >
          {categories?.map((item) => (
            <AccordionItem
              key={item.id}
              value={`${item.id}`}
              className="w-full mt-2 space-y-4"
            >
              <div
                className={`flex justify-between   rounded-md hover:font-bold hover:underline underline-offset-4 ${
                  searchParams.get("categoryId") == item.id &&
                  "font-bold underline background-gradient text-white"
                }`}
              >
                <Image
                  src={IMAGE_CATE_URL + item.image}
                  width={30}
                  height={30}
                  alt="img"
                  className="object-contain ml-2 aspect-square"
                />
                <button
                  onClick={() => handleSelectCategory(item.id)}
                  className="flex items-center justify-start flex-1 gap-1 px-2 text-sm text-start"
                >
                  {item.name}
                  {item.books_count > 0 && (
                    <span className="text-xs text-primary">
                      ({item.books_count})
                    </span>
                  )}
                </button>
                {item.sub_categories?.length > 0 && (
                  <span className="flex items-center justify-center rounded-md ">
                    <AccordionTrigger
                      className={`${
                        currentCategoryId == item.id &&
                        "underline font-bold bg-gray-400 group  text-white hover:text-primary"
                      } p-2  text-[16px] rounded-tr rounded-br px-2 hover:bg-gray-500 hover:text-white`}
                    ></AccordionTrigger>
                  </span>
                )}
              </div>
              <div
                className="ml-6 border-l-2 border-gradient "
                style={{ marginTop: "0" }}
              >
                {item.sub_categories?.length > 0 ? (
                  item.sub_categories.map((subItem) => (
                    <AccordionContent
                      key={subItem.id}
                      className="px-1 pb-1 mt-2"
                    >
                      <button
                        onClick={() =>
                          handleSelectSubCategory(subItem.id, item.id)
                        }
                        className={`${
                          currentSubCategoryId == subItem.id &&
                          "underline font-semibold"
                        } relative flex items-center max-w-full text-left underline-offset-4 w-full text-xs gap-1 cursor-pointer justify-start  hover:underline`}
                      >
                        <Dot width={15} className="hover:text-color" />
                        {subItem.name}
                        {subItem.books_count > 0 && (
                          <span className="text-xs text-primary">
                            ({subItem.books_count})
                          </span>
                        )}
                      </button>
                    </AccordionContent>
                  ))
                ) : (
                  <AccordionContent>
                    <p className="text-sm text-gray-500">
                      No subcategories available.
                    </p>
                  </AccordionContent>
                )}
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
}

export default MyCategoryComponent;
