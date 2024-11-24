import { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="grotesk flex h-screen">
      <div className="relative kiri">
        <img
          src="src/assets/login.webp"
          alt="Login"
          className="h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#95BB72] bg-opacity-20"></div>
      </div>

      {/* Bagian kanan: Form login */}
      <div className="kanan flex-grow flex items-center justify-center bg-[#EEEEEE]">
        <div className="text-center flex flex-col gap-14 w-full max-w-md">
          <h1 className="text-4xl font-bold text-[#49A47A]">Log in</h1>
          <form className="text-lg">
            <div className="mb-4">
              <label className="block text-left mb-2 text-[#49A47A] ml-6">
                Email
              </label>
              <input
                type="email"
                className="pl-6 rounded-full p-3 w-full bg-[#52B788] bg-opacity-60 border-2 border-[#49A47A] border-opacity-90 focus:outline-none focus:ring-0"
              />
            </div>
            <div className="mb-4">
              <label className="block text-left mb-2 text-[#49A47A] ml-6">
                Kata sandi
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="pl-6 rounded-full p-3 w-full bg-[#52B788] bg-opacity-60 border-2 border-[#49A47A] border-opacity-90 focus:outline-none focus:ring-0"
                />
                <button
                  type="button"
                  className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={togglePassword}
                >
                  <i
                    className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                  />
                </button>
                <p></p>
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#49A47A] bg-opacity-90 rounded-full text-white px-6 py-2 w-full mt-6"
            >
              Log in
            </button>
          </form>

          <div className="text-[#49A47A]">
            <p>
              belum punya akun?{" "}
              <Link to="/register">
                <span className="font-bold underline">daftar disini</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
