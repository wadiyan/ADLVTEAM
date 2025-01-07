"use client";
import React, { useState } from "react";
import FormLogin from "./components/FormLogin";

const Page = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleOpenLogin = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);

  return (
    <>
      {/* Main Page Content */}
      <div className="min-h-screen bg-gray-100 flex items-center justify-center z-40">
        <button className="btn btn-primary" onClick={handleOpenLogin}>
          Login
        </button>
      </div>

      {/* Render Login Form if `showLogin` is true */}
      {showLogin && <FormLogin handleClose={handleCloseLogin} />}
    </>
  );
};

export default Page;
