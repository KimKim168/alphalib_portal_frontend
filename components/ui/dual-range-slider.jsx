"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const DualRangeSlider = React.forwardRef(
  (
    {
      className,
      label,
      labelPosition = "top",
      minPriceLabel = "Min Price",
      maxPriceLabel = "Max Price",
      ...props
    },
    ref
  ) => {
    const initialValue = Array.isArray(props.value)
      ? props.value
      : [props.min, props.max];

    return (
      <div className="flex flex-col w-full">
        {/* Labels for Min and Max */}

        <SliderPrimitive.Root
          ref={ref}
          className={cn(
            "relative flex w-full touch-none select-none items-center",
            className
          )}
          {...props}
        >
          <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-gray-300">
            <SliderPrimitive.Range className="absolute h-full bg-primary bg-red-500" />
          </SliderPrimitive.Track>
          {initialValue.map((value, index) => (
            <React.Fragment key={index}>
              <SliderPrimitive.Thumb className="relative block h-5 w-5 rounded-full border-2 border-[#09203f] bg-gray-200 ring-offset-[#09203f] transition-colors   focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                {label && (
                  <span
                    className={cn(
                      "absolute flex w-full justify-center text-xs",
                      labelPosition === "top" && "-top-7",
                      labelPosition === "bottom" && "top-4"
                    )}
                  >
                    {label(value)}
                  </span>
                )}
              </SliderPrimitive.Thumb>
            </React.Fragment>
          ))}
        </SliderPrimitive.Root>
        <div className="flex justify-between m-2 text-sm text-gray-600">
          <span>{minPriceLabel}</span>
          <span>{maxPriceLabel}</span>
        </div>
      </div>
    );
  }
);
DualRangeSlider.displayName = "DualRangeSlider";

export { DualRangeSlider };
