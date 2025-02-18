"use client";
import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { ArrowUpDown } from "lucide-react";

const DescriptionTab = ({ description }) => {
  return (
    <>
      {/* <Tabs defaultValue="Specification" className=" mt-10">
        <TabsList className="grid grid-cols-2 bg-white ">
          <p className="text-sm md:text-lg underline text-blue underline-offset-4">
            Specification
          </p>
        </TabsList>
        <TabsContent value="Specification">
          <Card className="shadow-none border-r-2 border-t-1 border-l-2 border-b-1 border-gradient">
            <CardContent className="space-y-2 ">
              <ul className="list-disc list-inside text-sm md:text-[16px] text-gray-900 space-y-2">
                <li>Backlight Technology: LED</li>
                <li>Panel Technology: VA</li>
                <li>Display type: LED-backlit LCD monitor</li>
                <li>
                  Display Size: 32-inches FHD (1920 x 1080) 144 Hz Display Size:
                  32-inches FHD (1920 x 1080) 144 Hz Display Size: 32-inches FHD
                  (1920 x 1080) 144 Hz{" "}
                </li>
                <li>Aspect Ratio: 16:9 Widescreen</li>
                <li>Brightness: 250 cd/m²</li>
                <li>Interface: DisplayPort, HDMI</li>
                <li>Dimensions: 20.8 x 71.1 x 52.6 Centimeters</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="Overview">
          <Card className="shadow-none border-r-0 border-t-0 border-l-2 border-b-0 border-blue">
            <CardContent className="space-y-2">New Arrivals</CardContent>
          </Card>
        </TabsContent>
      </Tabs> */}
      <Accordion
        className="mt-10"
        defaultValue="description"
        type="single"
        collapsible
      >
        <AccordionItem value="description" className="border-none">
          {/* Trigger Section */}
          <AccordionTrigger className="border-b-2  w-full mb-8 hover:no-underline border-blue-bold pb-0 flex justify-between items-center">
            <span className="text-[12px] mb-1 sm:text-[16px] md:text-[17px] border-double shadow-md  text-white border-x-[5px] background-gradient1 rounded-tl-full rounded-br-full px-8 py-1">
              Descriptions
            </span>
            <ArrowUpDown />
          </AccordionTrigger>

          {/* Content Section */}
          <AccordionContent className="text-base transition-all duration-300 ease-in-out">
            <div
              className="product-description prose max-w-none overflow-hidden"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default DescriptionTab;
