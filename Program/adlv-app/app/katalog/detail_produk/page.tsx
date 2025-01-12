"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
}

const Page = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id"); // Mengambil ID dari query parameter
  const [product, setProduct] = useState<Product | null>(null);
  const router = useRouter();

  const items: Product[] = [
    {
      id: 1,
      name: "T-Shirt 1",
      category: "T-Shirt",
      price: 100000,
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur maxime voluptate vitae. Vero ex omnis, labore accusantium vel consectetur est!",
      image: "https://dummyimage.com/400x400/000/fff&text=T-Shirt",
    },
    {
      id: 2,
      name: "Hoodie 1",
      category: "Hoodie",
      price: 250000,
      description: "Hoodie hangat dan stylish.",
      image: "https://dummyimage.com/400x400/000/fff&text=Hoodie",
    },
    {
      id: 3,
      name: "Jacket 1",
      category: "Jacket",
      price: 400000,
      description: "Jaket keren untuk segala cuaca.",
      image: "https://dummyimage.com/400x400/000/fff&text=Jacket",
    },
    // Tambahkan produk lainnya...
  ];

  useEffect(() => {
    const foundProduct = items.find((item) => item.id === parseInt(id || "0"));
    setProduct(foundProduct || null); // Tetap atur ke null jika tidak ditemukan
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-lg font-semibold">Produk tidak ditemukan.</p>
        <Link href="/katalog">
          <button className="mt-4 px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700">
            Kembali ke Katalog
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <Link href="/katalog">
          <button className="mb-4 px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700">
            Kembali ke Katalog
          </button>
        </Link>
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-64 h-64 object-cover rounded-md"
          />
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Kategori:</span>{" "}
              {product.category}
            </p>
            <p className="text-gray-600 mb-4">
              <span className="font-semibold">Harga:</span> Rp
              {product.price.toLocaleString()}
            </p>
            <p className="text-gray-700 mb-6">{product.description}</p>
            <div className="flex justify-end mt-11 mr-6">
              <button
                className="px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700"
                onClick={() =>
                  router.push(
                    `/katalog/detail_produk/pembayaran?id=${product.id}`
                  )
                }
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
