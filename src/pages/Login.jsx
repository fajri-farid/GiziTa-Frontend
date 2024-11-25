import { useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      if (response.ok) {
        toast.success("Login successful");
        navigate("/");
      }
    } catch (error) {
      if (err.response) {
        console.log("Error response:", err.response.data);
        console.log("Error status:", err.response.status);
      } else if (err.request) {
        console.log("No response from server:", err.request);
      } else {
        console.log("Request error:", err.message);
      }
    }
  };

  return (
    <div className="grotesk flex h-screen">
      {/* Bagian kiri */}
      <div className="relative kiri flex-1">
        <img
          src="src/assets/auth.jpg"
          alt="Login"
          className="h-full w-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-[#95BB72] bg-opacity-20"></div>
      </div>

      <div className="kanan flex-1 flex items-center justify-center bg-[#EEEEEE]">
        <div className="text-center flex flex-col gap-14 w-full max-w-md">
          <h1 className="text-4xl font-bold text-[#49A47A]">Log in</h1>
          <form className="text-lg" onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-left mb-2 text-[#49A47A] ml-6">
                Email
              </label>
              <input
                type="email"
                className="pl-6 rounded-full p-3 w-full bg-[#52B788] bg-opacity-60 border-2 border-[#49A47A] border-opacity-90 focus:outline-none focus:ring-0"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
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
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
        }}
      />
    </div>
  );
};

export default Login;
