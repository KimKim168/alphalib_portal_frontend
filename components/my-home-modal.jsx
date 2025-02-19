"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MyHomeSidebar } from "./my-home-sidebar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { AlignLeft, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

const MyHomeModal = ({ categories }) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  return (
    <>
      <Sheet
        key={
          "catePanelKey" +
          pathName +
          searchParams.get("productTitle") +
          searchParams.get("categoryId") +
          searchParams.get("subCategoryId")
        }
      >
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden ">
            <AlignLeft className="h-[1.5rem] w-[1.5rem] " />
            <span className="sr-only">Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-[300px] p-0 pt-2 sm:w-[540px] overscroll-y-auto"
        >
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <ScrollArea className="h-full pr-3">
            <div className="pt-2">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="w-full p-2 py-2 mb-1 text-lg font-semibold border-b-2 hover:bg-primary hover:text-primary-foreground">
                    Categories
                  </AccordionTrigger>
                  <AccordionContent>
                    <MyHomeSidebar isModal={true} categories={categories} />
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <ul className="w-full py-2">
                <li
                  className={`${
                    pathName == "/" && "underline underline-offset-4"
                  }`}
                >
                  <Link
                    href="/"
                    className="block w-full p-2 font-semibold rounded-md hover:bg-primary hover:text-primary-foreground"
                  >
                    Home
                  </Link>
                </li>
                <li
                  className={`${
                    pathName == "/products" && "underline underline-offset-4"
                  }`}
                >
                  <Link
                    href="/products"
                    className="block w-full p-2 font-semibold rounded-md hover:bg-primary hover:text-primary-foreground"
                  >
                    Products
                  </Link>
                </li>
               
                {/* <li
                  className={`${
                    pathName == "/contact" && "underline underline-offset-4"
                  }`}
                >
                  <Link
                    href="/contact"
                    className="block w-full p-2 font-semibold rounded-md hover:bg-primary hover:text-primary-foreground"
                  >
                    Contact Us
                  </Link>
                </li>
                <li
                  className={`${
                    pathName == "/about" && "underline underline-offset-4"
                  }`}
                >
                  <Link
                    href="/about"
                    className="block w-full p-2 font-semibold rounded-md hover:bg-primary hover:text-primary-foreground"
                  >
                    About Us
                  </Link>
                </li> */}
              </ul>
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default MyHomeModal;
