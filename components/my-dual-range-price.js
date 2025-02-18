"use client";
import React, { useState } from "react";
import { DualRangeSlider } from "@/components/ui/dual-range-slider";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";

function MyDualRangePrice() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const priceFrom = searchParams.get("priceFrom") || 0;
  const priceTo = searchParams.get("priceTo") || 5000;
  const [values, setValues] = useState([Number(priceFrom), Number(priceTo)]);

  const handleSelect = ([priceFrom, priceTo]) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("priceFrom", priceFrom);
    params.set("priceTo", priceTo);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <div className="mb-10">
        <p className="text-lg font-bold rounded-md text-start text-blue ">
          Price
        </p>
      </div>
      <div className="w-full">
        <DualRangeSlider
          label={(value) => `$${value}`}
          value={values}
          onValueChange={setValues}
          min={0}
          max={5000}
          step={5}
        />
      </div>
      <div className="flex justify-center mt-4">
        <Button
          onClick={() => handleSelect(values)}
          variant="add"
          type="submit"
          className="w-full h-10 px-4 rounded shadow-transparent hover:text-blue-900 hover:font-bold hover:bg-gray-50"
        >
          Apply Filter
        </Button>
      </div>
    </div>
  );
}

export default MyDualRangePrice;
