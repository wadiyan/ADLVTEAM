# DOKUMENTASI PROYEK INDIVIDU

### Kontribusi
#### Wadiyan (IF22B)
1. **Overview Page**
   Menambahkan halaman untuk menampilkan berbagai fitur seperti:
   - Banner pengantar
   - Produk terbaru
   - Testimoni pengguna
   - Call-to-Action

   Kode utama untuk halaman ini terdapat pada file:
   ```javascript
   // HomePage.js (dalam src/frontend/components)
   import React from "react";
   ...
   export default HomePage;
   ```

2. **Footer Komponen**
   Menambahkan Footer untuk memberikan navigasi tambahan dan informasi hak cipta.
   ```javascript
   "use client";

   const Footer = () => {
     return (
       <footer className="bg-gray-900 text-white py-6">
         <div className="container mx-auto px-4">
           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
             <div>
               <h1 className="text-xl font-bold">ADLV</h1>
               <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} ADLV. Semua Hak Dilindungi.</p>
             </div>

             <div className="flex space-x-6">
               <a href="/about" className="text-gray-400 hover:text-white transition-colors">Tentang Kami</a>
               <a href="/kontak" className="text-gray-400 hover:text-white transition-colors">Kontak</a>
               <a href="/kebijakan" className="text-gray-400 hover:text-white transition-colors">Kebijakan Privasi</a>
             </div>

             <div className="flex space-x-4">
               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                 <i className="fab fa-facebook-f"></i>
               </a>
               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                 <i className="fab fa-instagram"></i>
               </a>
               <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                 <i className="fab fa-twitter"></i>
               </a>
             </div>
           </div>
         </div>
       </footer>
     );
   };

   export default Footer;
   ```

3. **Hamburger Menu**
   Menambahkan komponen menu navigasi dengan gaya hamburger untuk tampilan responsif.
   ```javascript
   import React, { useState } from "react";
   import Link from "next/link";

   const HamburgerMenu = () => {
     const [isOpen, setIsOpen] = useState(false);

     const toggleMenu = () => {
       setIsOpen(!isOpen);
     };

     return (
       <div className="relative z-30">
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
                 <a href="/transaction-history" className="text-gray-700 hover:font-bold">
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
   ```

4. **Loading Wrapper**
   Menambahkan komponen untuk menampilkan animasi loading sementara halaman atau komponen sedang dimuat.
   ```javascript
   "use client";

   import { useState, useEffect } from "react";

   export default function LoadingWrapper({
     children,
   }: {
     children: React.ReactNode;
   }) {
     const [isLoading, setIsLoading] = useState(true);

     useEffect(() => {
       const timer = setTimeout(() => setIsLoading(false), 1000);
       return () => clearTimeout(timer);
     }, []);

     return isLoading ? (
       <div className="flex justify-center items-center h-full">
         <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-black"></div>
       </div>
     ) : (
       <>{children}</>
     );
   }
   ```

5. **Navbar Komponen**
   Menambahkan Navbar untuk navigasi utama dengan dukungan untuk menu responsif.
   ```javascript
   "use client";
   import Link from "next/link";
   import HamburgerMenu from "./HamburgButton";
   import { BackgroundBeams } from "./ui/background-beams";

   const Navbar = () => {
     return (
       <nav className="">
         <div className="container mx-auto px-4 py-3 flex items-center justify-between ">
           <div className="text-2xl font-bold">
             <Link href="/">
               <img src="assets/icons/ADLV.png" alt="logo" width={80} />
             </Link>
           </div>
           <div className="hidden md:flex space-x-6">
             <Link
               href="/overview"
               className="text-white hover:font-bold hover:text-white z-10"
             >
               Overview
             </Link>
             <Link
               href="/katalog"
               className="text-white hover:font-bold hover:text-white z-10"
             >
               Katalog
             </Link>
             <Link
               href="/about"
               className="text-white hover:font-bold hover:text-white z-10"
             >
               Tentang Kami
             </Link>
             <Link
               href="/kontak"
               className="text-white hover:font-bold hover:text-white z-10"
             >
               Kontak
             </Link>
           </div>
           <div className="space-x-4">
             <HamburgerMenu />
           </div>
           <BackgroundBeams />
         </div>
       </nav>
     );
   };

   export default Navbar;
   ```

6. **Animated Testimonials**
   Menambahkan komponen untuk menampilkan testimoni dengan animasi dinamis.
   ```javascript
   "use client";

   import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
   import { motion, AnimatePresence } from "framer-motion";
   import Image from "next/image";
   import { useEffect, useState } from "react";

   type Testimonial = {
     quote: string;
     name: string;
     designation: string;
     src: string;
   };
   export const AnimatedTestimonials = ({
     testimonials,
     autoplay = false,
   }: {
     testimonials: Testimonial[];
     autoplay?: boolean;
   }) => {
     const [active, setActive] = useState(0);

     const handleNext = () => {
       setActive((prev) => (prev + 1) % testimonials.length);
     };

     const handlePrev = () => {
       setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
     };

     const isActive = (index: number) => {
       return index === active;
     };

     useEffect(() => {
       if (autoplay) {
         const interval = setInterval(handleNext, 5000);
         return () => clearInterval(interval);
       }
     }, [autoplay]);

     const randomRotateY = () => {
       return Math.floor(Math.random() * 21) - 10;
     };
     return (
       <div className="max-w-sm md:max-w-4xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-20 z-20">
         <div className="relative grid grid-cols-1 md:grid-cols-2  gap-20">
           <div>
             <div className="relative h-80 w-full">
               <AnimatePresence>
                 {testimonials.map((testimonial, index) => (
                   <motion.div
                     key={testimonial.src}
                     initial={{
                       opacity: 0,
                       scale: 0.9,
                       z: -100,
                       rotate: randomRotateY(),
                     }}
                     animate={{
                       opacity: isActive(index) ? 1 : 0.7,
                       scale: isActive(index) ? 1 : 0.95,
                       z: isActive(index) ? 0 : -100,
                       rotate: isActive(index) ? 0 : randomRotateY(),
                       zIndex: isActive(index)
                         ? 999
                         : testimonials.length + 2 - index,
                       y: isActive(index) ? [0, -80, 0] : 0,
                     }}
                     exit={{
                       opacity: 0,
                       scale: 0.9,
                       z: 100,
                       rotate: randomRotateY(),
                     }}
                     transition={{
                       duration: 0.4,
                       ease: "easeInOut",
                     }}
                     className="absolute inset-0 origin-bottom"
                   >
                     <Image
                       src={testimonial.src}
                       alt={testimonial.name}
                       width={500}
                       height={500}
                       draggable={false}
                       className="h-full w-full rounded-3xl object-cover object-center"
                     />
                   </motion.div>
                 ))}
               </AnimatePresence>
             </div>
           </div>
           <div className="flex justify-between flex-col py-4">
             <motion.div
               key={active}
               initial={{
                 y: 20,
                 opacity: 0,
               }}
               animate={{
                 y: 0,
                 opacity: 1,
               }}
               exit={{
                 y: -20,
                 opacity: 0,
               }}
               transition={{
                 duration: 0.2,
                 ease: "easeInOut",
               }}
             >
               <h3 className="text-2xl font-bold dark:text-white text-black">
                 {testimonials[active].name}
               </h3>
               <p className="text-sm text-gray-500 dark:text-neutral-500">
                 {testimonials[active].designation}
               </p>
               <motion.p className="text-lg text-gray-500 mt-8 dark:text-neutral-300">
                 {testimonials[active].quote.split(" ").map((word, index) => (
                   <motion.span
                     key={index}
                     initial={{
                       filter: "blur(10px)",
                       opacity: 0,
                       y: 5,
                     }}
                     animate={{
                       filter: "blur(0px)",
                       opacity: 1,
                       y: 0,
                     }}
                     transition={{
                       duration: 0.2,
                       ease: "easeInOut",
                       delay: 0.02 * index,
                     }}
                     className="inline-block"
                   >
                     {word}&nbsp;
                   </motion.span>
                 ))}
               </motion.p>
             </motion.div>
             <div className="flex gap-4 pt-12 md:pt-0">
               <button
                 onClick={handlePrev}
                 className="z-20 text-white my-8 px-10 py-2 rounded-full bg-gray-900 dark:bg-neutral-800 flex items-center justify-center group/button  hover:bg-white hover:border hover:border-gray-900 hover:text-black"
               >
                 Previus
               </button>
               <button
                 onClick={handleNext}
                 className="z-20 text-white my-8 px-10 py-2 rounded-full bg-gray-900 dark:bg-neutral-800 flex items-center justify-center group/button hover:bg-white hover:border hover:border-gray-900 hover:text-black"
               >
                 Next
               </button>
             </div>
           </div>
         </div>
       </div>
     );
   };
   ```

8. **Infinite Moving Cards**
   Menambahkan komponen untuk menampilkan kartu yang bergerak secara horizontal tanpa henti dengan berbagai pengaturan.
   - Properti yang didukung:
     - **items**: Daftar item yang ditampilkan pada kartu (quote, name, title).
     - **direction**: Arah gerakan, bisa "left" atau "right".
     - **speed**: Kecepatan animasi, bisa "slow", "normal", atau "fast".
     - **pauseOnHover**: Menjeda animasi saat kursor berada di atas.
   ```typescript
   "use client";
   
import { cn } from "@/utils/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller  z-20  max-w-7xl overflow-hidden bg-white",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-100 px-8 py-6 md:w-[450px]"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}
            key={item.name}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className=" relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
                    {item.name}
                  </span>
                  <span className=" text-sm leading-[1.6] text-gray-400 font-normal">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

``` 