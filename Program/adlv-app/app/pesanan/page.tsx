import React from "react";
import Link from "next/link";

const OrderList = () => {
   const orders = [
     { id: 1, status: "Sedang Diproses" },
     { id: 2, status: "Dikirim" },
     { id: 3, status: "Selesai" },
   ];

   return (
     <div className="text-center">
       <header className="bg-gray-900 text-white flex flex-col justify-center items-center py-10">
         <h1 className="text-3xl font-semibold">Daftar Pesanan</h1>
       </header>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto my-10 w-3/4">
         {orders.map((order) => (
           <div
             key={order.id}
             className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
           >
             <h3 className="text-xl font-semibold mb-2">Pesanan #{order.id}</h3>
             <p className="text-gray-600">Status: {order.status}</p>
           </div>
         ))}
       </div>
       <button
         className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-600 mt-4"
       >
        <Link href="/">
         Kembali ke Halaman Utama
        </Link>
       </button>
     </div>
   );
};

export default OrderList;
