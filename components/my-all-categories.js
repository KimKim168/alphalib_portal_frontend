"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignJustifyIcon, ChevronDownIcon } from "lucide-react";
import "./MyAllCategory.css"; // Import custom CSS for transitions
import { useRouter, useSearchParams } from "next/navigation";

export default function MyAllCategory({ resultCate }) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

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
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="dropdown-container"
    >
      <DropdownMenu open={isHovering}>
        <DropdownMenuTrigger asChild>
          <Button
            variant="add"
            className="p-0 text-base text-black border-0 shadow-none md:p-2 hover:bg-slate-200"
            aria-haspopup="menu"
            aria-expanded={isHovering ? "true" : "false"}
          >
            <AlignJustifyIcon className="hidden w-12 h-12 md:block md:w-20 md:h-20" />
            {/* All Categories */}
            All Services
            <ChevronDownIcon className="block md:hidden" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className={`ml-5 w-60 dropdown-content max-h-[450px] scroll-smooth scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-500 rounded-none px-0 shadow-lg overflow-y-auto ${
            isHovering ? "open" : ""
          }`}
        >
          <DropdownMenuGroup>
            {resultCate?.length > 0 &&
              resultCate.map((item) => (
                <DropdownMenuSub key={item.id}>
                  <div className="flex p-2 hover:font-bold hover:underline underline-offset-4">
                    <button
                      onClick={() => handleSelectCategory(item.id)}
                      className="flex items-center flex-1 gap-1 px-2 text-sm text-start"
                    >
                      {item.name}{" "}
                      {item.books_count > 0 && (
                        <span className="text-xs text-primary">
                          ({item.books_count})
                        </span>
                      )}
                    </button>
                    {item.sub_categories?.length > 0 && (
                      <DropdownMenuSubTrigger className="text-sm text-black rounded-md" />
                    )}
                  </div>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent className="ml-3 w-60">
                      {item.sub_categories?.length > 0 &&
                        item.sub_categories.map((subItem) => (
                          <button
                            key={subItem.id}
                            onClick={() =>
                              handleSelectSubCategory(subItem.id, item.id)
                            }
                            className="w-full text-start"
                          >
                            <p className="flex items-center justify-start gap-1 p-2 text-sm hover:bg-slate-200">
                              {subItem.name}{" "}
                              {subItem.books_count > 0 && (
                                <span className="text-xs text-primary">
                                  ({subItem.books_count})
                                </span>
                              )}
                            </p>
                          </button>
                        ))}
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              ))}
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
