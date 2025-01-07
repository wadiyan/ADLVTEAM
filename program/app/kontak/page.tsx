import React from "react";
import LoadingWrapper from "@/components/LoadingWrapper";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <LoadingWrapper>
        <div className="bg-white shadow-md rounded-lg p-6 max-w-4xl mx-auto">
          <h1 className="text-black text-3xl font-bold text-center mb-6">
            Kontak
          </h1>
          <div className="mb-6">
            <p className="text-gray-700 text-center">
              Jika Anda memiliki pertanyaan atau membutuhkan informasi lebih
              lanjut, silakan hubungi kami melalui:
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-black text-xl font-semibold">Alamat</h2>
            <p className="text-gray-700 mt-2">
              Jl. Contoh No.123, Jakarta, Indonesia
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-black text-xl font-semibold">Email</h2>
            <p className="text-gray-700 mt-2">
              <a
                href="mailto:contact@adlv.com"
                className="text-gray-500 underline"
              >
                contact@adlv.com
              </a>
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-black text-xl font-semibold">Telepon</h2>
            <p className="text-gray-700 mt-2">
              <a href="tel:+620123456789" className="text-gray-500 underline">
                +62 012 3456 789
              </a>
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-black text-xl font-semibold">Media Sosial</h2>
            <p className="text-gray-700 mt-2">
              Instagram:{" "}
              <a
                href="https://instagram.com/adlv"
                target="_blank"
                className="text-gray-500 underline"
              >
                @adlv
              </a>
              <br />
              Facebook:{" "}
              <a
                href="https://facebook.com/adlv"
                target="_blank"
                className="text-gray-500 underline"
              >
                ADLV Official
              </a>
            </p>
          </div>
        </div>
      </LoadingWrapper>
    </div>
  );
};

export default ContactPage;
