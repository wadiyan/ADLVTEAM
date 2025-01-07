import React from "react";

type FormLoginProps = {
  handleClose: () => void; // Define the type of handleClose
};

const FormLogin: React.FC<FormLoginProps> = ({ handleClose }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-10"
        onClick={handleClose} // Close overlay when clicked
      ></div>

      {/* Main Content */}
      <div className="hero min-h-screen fixed inset-0 flex items-center justify-center z-20">
        <div
          className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl"
          onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the form
        >
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
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormLogin;
