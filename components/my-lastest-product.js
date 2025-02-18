"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IMAGE_PRODUCT_URL, BASE_API_URL } from "@/env"; // Ensure these are correctly imported
import Link from "next/link";

function MylastestProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${BASE_API_URL}/new_products`);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading new products...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <div >
      <p className="p-2 text-lg text-center text-white rounded-md background-gradient">
        New Products
      </p>
      <div className="pt-2 bg-gray-50">
        {products.map((item) => (
          <Link href={`/products/${item.id}`} key={item.id}>
            <div key={item.id} className="grid grid-cols-12 gap-2 p-2 overflow-hidden border-b">
              <div className="col-span-3">
                <Image
                  src={`${IMAGE_PRODUCT_URL}${item.image}`}
                  width={300}
                  height={300}
                  alt="img"
                  className="object-contain aspect-square"
                  loading="lazy"
                />
              </div>
              <div className="col-span-9">
                <p className="text-sm leading-tight text-gray-900 line-clamp-2 text-hover hover:underline dark:text-white">
                  {item.title}
                </p>
                <p>
                  Price:{" "}
                  <span className="ml-3 text-color xl:ml-5">${item.price}</span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MylastestProduct;
