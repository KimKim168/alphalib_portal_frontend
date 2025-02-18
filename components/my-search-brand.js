"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export function SearchBrand({ brand }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const selectedBrand = brand?.find((b) => b.id == searchParams.get("brandId"));

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(selectedBrand?.name || "");

  const handleSelect = (selectedValue) => {
    const params = new URLSearchParams(searchParams);
    if (selectedValue) {
      params.set("brandId", selectedValue);
    } else {
      params.delete("brandId");
    }
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div>
      <p className="text-lg text-start font-bold text-blue rounded-md ">
        Brands
      </p>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="add"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between  h-10 text-sm text-black"
          >
            {value ? `${value}` : "Select Brand..."}
            <ChevronsUpDown size={15} className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0">
          <Command>
            <CommandInput placeholder="Search brand..." className="h-9" />
            <CommandList>
              <CommandEmpty>No Brand Found.</CommandEmpty>
              <CommandGroup>
                <CommandItem
                  onSelect={() => {
                    handleSelect();
                    setValue("");
                    setOpen(false);
                  }}
                >
                  All
                  <Check
                    className={cn(
                      "ml-auto",
                      value == "" ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
                {brand?.map((item) => (
                  <CommandItem
                    key={item.id}
                    value={item.name}
                    onSelect={() => {
                      handleSelect(item.id);
                      setValue(item.name);
                      setOpen(false);
                    }}
                  >
                    {item.name}
                    <Check
                      className={cn(
                        "ml-auto",
                        value == item.name ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
