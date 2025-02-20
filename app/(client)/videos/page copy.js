import MyVideoGallery from "@/components/my-video-gallery";
import { BASE_API_URL, MULTI_IMAGE_VIDEO_URL } from "@/env";
import React from "react";

const page = async (props) => {
  const searchParams = await props.searchParams;
  const search = searchParams.search || "";

  console.log(search);

  const respone = await fetch(`${BASE_API_URL}/videos`, {
    next: { revalidate: 600 },
  });
  const resp = await respone.json();
  const result = resp.data;

  //   console.log(videos);
  const videos = result?.map((item) => {
    return {
      id: item.id,
      title: item.name,
      url: item.link,
      image: `${MULTI_IMAGE_VIDEO_URL}${item.image}`,
    };
  });
  return (
    <div className="min-h-[50vh] mt-5 max-w-screen-2xl mb-10 mx-auto px-2 xl:px-20 ">
      <MyVideoGallery key={" " + search} videos={videos} />
    </div>
  );
};

export default page;
