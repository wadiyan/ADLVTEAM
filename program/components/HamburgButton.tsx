import React, { useState } from "react";
import Link from "next/link";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-30">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="flex flex-col space-y-1.5 p-2 focus:outline-none"
      >
        <div
          className={`w-6 h-0.5 bg-white transition-transform ${
            isOpen ? "rotate-45 translate-y-1.5 h-1" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-white transition-opacity ${
            isOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-white transition-transform ${
            isOpen ? "-rotate-45 -translate-y-1.5 h-1" : ""
          }`}
        ></div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-10 right-0 bg-white shadow-md rounded-md p-4 w-52">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link href="/login" className="text-gray-700 hover:font-bold">
                Login
              </Link>
            </li>
            <li>
              <a href="/register" className="text-gray-700 hover:font-bold">
                Daftar
              </a>
            </li>
            <li>
              <a href="/cart" className="text-gray-700 hover:font-bold">
                Keranjang
              </a>
            </li>
            <li>
              <a
                href="/transaction-history"
                className="text-gray-700 hover:font-bold"
              >
                Riwayat Transaksi
              </a>
            </li>
            <li>
              <a href="/orders" className="text-gray-700 hover:font-bold">
                Pesanan
              </a>
            </li>
            <li>
              <a href="/logout" className="text-gray-700 hover:text-red-500">
                Log Out
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
