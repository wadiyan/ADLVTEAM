import React from "react";
import Link from "next/link";

const FormRegister = () => {
  return (
    <>
      <div className="hero min-h-screen fixed inset-0 flex flex-col items-center justify-center z-20">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />

              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Masukan ulang password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-2">
              <button className="btn bg-gray-900 text-white">Daftar</button>
            </div>
            <label className="label">
              <Link
                href="/login"
                className="label-text-alt w-full text-center link link-hover"
              >
                Sudah Punya Akun? Masuk
              </Link>
            </label>
          </form>
          <button className="bg-gray-900  w-full  text-white py-2 px-4 rounded-b-xl hover:bg-gray-600">
            <Link href="/">Kembali ke Halaman Utama</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default FormRegister;
