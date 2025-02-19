"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import MyCategoryComponent from "./my-category";
import { SearchBrand } from "./my-search-brand";
import MyDualRangPrice from "./my-dual-range-price";
import MylastestProduct from "./my-lastest-product";
import { FilterIcon } from "lucide-react";

export default function Filter({ categories, brand }) {
  return (
    <>
      <section className="lg:hidden block">
        <Sheet>
          <SheetTrigger asChild>
            <FilterIcon className="border p-1 md:p-2 w-9 h-9 md:w-10 md:h-10 rounded-md" />
          </SheetTrigger>
          <SheetContent className="px-0">
            <SheetHeader>
              <SheetTitle className="text-center">Filter</SheetTitle>
            </SheetHeader>
            {/* Scrollable content */}
            <div className="overflow-y-auto max-h-[calc(100vh-100px)] px-2">
              <MyCategoryComponent categories={categories} />
              <hr className="my-8" />
              {/* <SearchBrand brand={brand} />
              <hr className="my-8" />
              <MyDualRangPrice />
              <hr className="my-8" />
              <MylastestProduct /> */}
            </div>
          </SheetContent>
        </Sheet>
      </section>
    </>
  );
}
