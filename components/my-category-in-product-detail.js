"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function MyCategoryProductDetail({ categories }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSelectCategory = (categoryId) => {
    const params = new URLSearchParams(searchParams);
    if (categoryId) {
      params.set("categoryId", categoryId);
      params.delete("subCategoryId");
    } else {
      params.delete("categoryId");
    }
    replace(`/products?${params.toString()}`);
  };
  const handleSelectSubCategory = (subCategoryId, categoryId) => {
    const params = new URLSearchParams(searchParams);
    if (subCategoryId) {
      params.set("subCategoryId", subCategoryId);
      params.set("categoryId", categoryId);
    } else {
      params.delete("subCategoryId");
    }
    replace(`/products?${params.toString()}`);
  };
  return (
    <>
      {categories?.map((item) => (
        <button onClick={() => handleSelectCategory(item)}></button>
      ))}
    </>
  );
}
