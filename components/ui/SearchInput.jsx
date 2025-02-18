"use client";
import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

export default function SearchInput() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [inputValue, setInputValue] = useState(
    searchParams.get("search") || ""
  );

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams);
    console.log(params);
    if (inputValue) {
      params.set("search", inputValue);
      params.set("page", 1);
    } else {
      params.delete("search");
    }
    replace(`/products?${params.toString()}`);
  };

  return (
    <>
      <Suspense>
        <form action={handleSearch}>
          <div className="flex items-center justify-between bg-white border ">
            <div className="flex items-center gap-2 ml-2">
              <Search className="text-gray-400 " size={20} />
              <input
                type="text"
                placeholder="Search Products..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                // onChange={(e) => handleSearch(e.target.value)}
                className=" bg-transparent border-none xl:min-w-[500px] outline-none text-gray-700 py-2"
                aria-label="Search input"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-900 hidden min-[350px]:block text-white py-1 px-2 mr-1"
            >
              Search
            </button>
          </div>
        </form>
      </Suspense>
    </>
  );
}
