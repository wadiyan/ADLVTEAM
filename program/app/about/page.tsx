import React from "react";
import LoadingWrapper from "@/components/LoadingWrapper";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const AboutPage = () => {
  const testimonials = [
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aut ea aliquam vero quam, quae similique nobis earum delectus! Modi culpa quidem voluptas perspiciatis laboriosam molestias quibusdam nulla iste maiores.",
      name: "Wadiyan",
      designation: "Student at Universitas Teknokrat Indonesia",
      src: "/assets/images/wadi.jpg",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aut ea aliquam vero quam, quae similique nobis earum delectus! Modi culpa quidem voluptas perspiciatis laboriosam molestias quibusdam nulla iste maiores.",
      name: "Hafidz Ferzino Afrani",
      designation: "Student at Universitas Teknokrat Indonesia",
      src: "/assets/images/hafiz.jpg",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aut ea aliquam vero quam, quae similique nobis earum delectus! Modi culpa quidem voluptas perspiciatis laboriosam molestias quibusdam nulla iste maiores.",
      name: "Rexlicky Verdhika Sagatha",
      designation: "Student at Universitas Teknokrat Indonesia",
      src: "/assets/images/Rexlicky .jpg",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-8">
        <LoadingWrapper>
          <h1 className="text-3xl text-black font-bold text-center">Pendiri</h1>
          <AnimatedTestimonials testimonials={testimonials} />
          <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl text-black font-bold text-center mb-6">
              Tentang Kami
            </h1>
            <div className="mb-4">
              <h2 className="text-black text-xl font-semibold">
                Sejarah Singkat
              </h2>
              <p className="text-gray-700 mt-2">
                ADLV adalah merek yang didedikasikan untuk menghadirkan produk
                berkualitas tinggi dengan desain modern dan nyaman. Kami berdiri
                sejak [tahun berdiri], dan terus berkembang untuk memenuhi
                kebutuhan gaya hidup Anda.
              </p>
            </div>
            <div className="mb-4">
              <h2 className="text-black text-xl font-semibold">
                Filosofi Kami
              </h2>
              <p className="text-gray-700 mt-2">
                Filosofi kami adalah memberikan pengalaman terbaik kepada
                pelanggan melalui produk yang dibuat dengan cinta dan perhatian
                terhadap detail. Kami percaya bahwa setiap pelanggan berhak
                mendapatkan yang terbaik.
              </p>
            </div>
            <div className="mb-4">
              <h2 className="text-black text-xl font-semibold">
                Kualitas Produk
              </h2>
              <p className="text-gray-700 mt-2">
                Kami hanya menggunakan bahan berkualitas tinggi untuk memastikan
                produk kami nyaman, tahan lama, dan bergaya. Setiap produk kami
                melalui proses kontrol kualitas yang ketat.
              </p>
            </div>
            <div>
              <h2 className="text-black text-xl font-semibold">Hubungi Kami</h2>
              <p className="text-gray-700 mt-2">
                Email:{" "}
                <a
                  href="mailto:contact@adlv.com"
                  className="text-blue-500 underline"
                >
                  contact@adlv.com
                </a>
                <br />
                Telepon:{" "}
                <a href="tel:+620123456789" className="text-gray-500 underline">
                  +62 012 3456 789
                </a>
              </p>
            </div>
          </div>
        </LoadingWrapper>
      </div>
    </>
  );
};

export default AboutPage;
