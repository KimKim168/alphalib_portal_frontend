import MyGallery from "@/components/my-gallery";
import DescriptionTab from "@/components/products/description-tab";
import {
  BASE_API_URL,
  IMAGE_PRODUCT_URL,
  MULTI_IMAGE_PRODUCT_URL,
  MULTI_IMAGE_VIDEO_URL,
} from "@/env";
import React from "react";
import MyVideos from "../components/my-videos";
import MyDescription from "../components/my-description";

export default async function MyProduct({ params }) {
  const { id } = await params;
  const respone = await fetch(`${BASE_API_URL}/videos/${id}`, {
    next: { revalidate: 600 },
  });
  const video = await respone.json();
  // console.log(video)
  
  const videos = [{
        id: video.id,
        title: video.name,
        url: video.link,
        description: video.description,
        image: `${MULTI_IMAGE_VIDEO_URL}${video.image}`,
      }];
    
  return (
    <>
      <section className="px-2 mx-auto mt-5 mb-10 max-w-screen-2xl xl:px-20 ">
        <MyVideos videos={videos} />
        {video?.description && (
            <MyDescription description={video?.description} />
          )}
      </section>
      
    </>
  );
}
