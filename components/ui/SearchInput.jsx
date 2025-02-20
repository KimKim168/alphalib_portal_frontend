"use client";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

export default function SearchInput() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [inputValue, setInputValue] = useState(searchParams.get("search") || "");

  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form from reloading the page
    const params = new URLSearchParams(searchParams);
    
    // Update query params if on allowed pages (include home "/")
    if (pathname === "/") {
      if (inputValue) {
        params.set("search", inputValue);
        params.set("page", 1);
      } else {
        params.delete("search");
      }
      replace(`/?${params.toString()}`);
    }
   
    if (pathname === "/articles") {
      if (inputValue) {
        params.set("search", inputValue);
        params.set("page", 1);
      } else {
        params.delete("search");
      }
      replace(`/articles?${params.toString()}`);
    }
    if (pathname === "/videos") {
      if (inputValue) {
        params.set("search", inputValue);
        params.set("page", 1);
      } else {
        params.delete("search");
      }
      replace(`/videos?${params.toString()}`);
    }
  };
  // console.log("Current pathname:", pathname);
  return (
    <Suspense>
      <form onSubmit={handleSearch}>
        <div className="flex items-center justify-between rounded-md bg-white border">
          <div className="flex items-center gap-2 ml-2">
            <Search className="text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="bg-transparent border-none xl:min-w-[500px] outline-none text-gray-700 py-2"
              aria-label="Search input"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-900 rounded-md hidden min-[350px]:block text-white py-1 px-2 mr-1"
          >
            Search
          </button>
        </div>
      </form>
    </Suspense>
  );
}

