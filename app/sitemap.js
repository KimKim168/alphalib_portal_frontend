export default async function sitemap() {
  const ulr = "https://chhayhok.com";

  return [
    {
      url: "https://chhayhok.com",
      lastModified: new Date(),
      priority: 0.5,
      images: ["https://chhayhok.com/image.jpg"],
    },
  ];
}
