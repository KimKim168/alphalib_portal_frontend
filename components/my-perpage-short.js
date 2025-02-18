"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const framework = [
  {
    label: "10",
    value: "10",
  },
  {
    label: "20",
    value: "20",
  },
  {
    label: "30",
    value: "30",
  },
  {
    label: "40",
    value: "40",
  },
  {
    label: "50",
    value: "50",
  },
  {
    label: "60",
    value: "60",
  },
  {
    label: "70",
    value: "70",
  },
  {
    label: "80",
    value: "80",
  },
  {
    label: "90",
    value: "90",
  },
  {
    label: "100",
    value: "100",
  },
];

export function MyPerpageShort() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const selectedPerPage = searchParams.get("perPage");
  const selectedPerPageObj = framework.find(
    (item) => item.value == selectedPerPage
  );
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(selectedPerPageObj?.label || " ");

  const handleSelect = (selectedValue) => {
    const params = new URLSearchParams(searchParams);
    if (selectedValue) {
      params.set("perPage", selectedValue);
    } else {
      params.delete("perPage");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="min-w-[90px] px-2 gap-1 md:gap-2 md:px-4 max-w-[130px] md:min-w-[150px] md:max-w-[200px] justify-between md:py-5"
        >
          <span className="text-[10px] md:text-sm">
            <span className={`${value ? "text-blue font-bold" : ""}`}>
              {value || "Select"}
            </span>{" "}
            Per Page
          </span>
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-[130px] md:max-w-[150px] p-0">
        <Command>
          <CommandList>
            <CommandEmpty>No options found.</CommandEmpty>
            <CommandGroup>
              {framework.map((item) => (
                <CommandItem
                  key={item.label}
                  value={item.value}
                  onSelect={() => {
                    setValue(item.label);
                    handleSelect(item.value);
                    setOpen(false);
                  }}
                  className="text-[10px] md:text-sm"
                >
                  {item.label} Per Page
                  <Check
                    className={cn(
                      "ml-auto",
                      value === item.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
