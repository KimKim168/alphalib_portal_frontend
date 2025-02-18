"use client";

import * as React from "react";
import * as MyAccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const MyAccordion = MyAccordionPrimitive.Root;

const MyAccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <MyAccordionPrimitive.Item
    ref={ref}
    className={cn("", className)}
    {...props}
  />
));
MyAccordionItem.displayName = "MyAccordionItem";

const MyAccordionTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <MyAccordionPrimitive.Header>
      <MyAccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex items-center justify-between text-sm font-medium hover:underline text-left [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        {/* <ChevronDown className="h-4 w-4 shrink-0 text-neutral-500 transition-transform duration-200 dark:text-neutral-400" /> */}
      </MyAccordionPrimitive.Trigger>
    </MyAccordionPrimitive.Header>
  )
);
MyAccordionTrigger.displayName = MyAccordionPrimitive.Trigger.displayName;

const MyAccordionContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <MyAccordionPrimitive.Content
      ref={ref}
      className="overflow-hidden  text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn("pb-4 px-4 pt-0", className)}>{children}</div>
    </MyAccordionPrimitive.Content>
  )
);
MyAccordionContent.displayName = MyAccordionPrimitive.Content.displayName;

export { MyAccordion, MyAccordionItem, MyAccordionTrigger, MyAccordionContent };
