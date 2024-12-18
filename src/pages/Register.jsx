import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";
import { Toaster, toast } from "react-hot-toast";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log("Kata sandi dan konfirmasi kata sandi tidak cocok");
      return;
    }

    const data = {
      email: email,
      userName: userName,
      password: password,
    };

    try {
      const response = await axios.post("http://localhost:8080/regist", data);
      if (response.status === 200) {
        toast.success("Registrasi berhasil!");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (err) {
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
      <div className="flex-grow flex items-center justify-center bg-[#EEEEEE] flex-1">
        <div className="text-center flex flex-col gap-10 w-full max-w-md">
          <h1 className="text-4xl font-bold text-[#49A47A]">Regist</h1>
          <form className="text-md" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-left mb-2 text-[#49A47A] ml-6">
                Nama Pengguna
              </label>
              <input
                type="text"
                className="pl-6 rounded-full p-3 w-full bg-[#52B788] bg-opacity-60 border-2 border-[#49A47A] border-opacity-90 focus:outline-none focus:ring-0"
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
              />
            </div>
            <div className="mb-4">
              <label className="block text-left mb-2 text-[#49A47A] ml-6">
                Email
              </label>
              <input
                type="email"
                className="pl-6 rounded-full p-3 w-full bg-[#52B788] bg-opacity-60 border-2 border-[#49A47A] border-opacity-90 focus:outline-none focus:ring-0"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            <div className="mb-4">
              <label className="block text-left mb-2 text-[#49A47A] ml-6">
                Konfirmasi Kata sandi
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="pl-6 rounded-full p-3 w-full bg-[#52B788] bg-opacity-60 border-2 border-[#49A47A] border-opacity-90 focus:outline-none focus:ring-0"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
              Regist
            </button>
          </form>

          <div className="text-[#49A47A]">
            <p>
              sudah punya akun?{" "}
              <Link to="/login">
                <span className="font-bold underline">log in disini</span>
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="relative flex-1 flex">
        <img
          src="src/assets/auth.jpg"
          alt="register"
          className="h-full object-cover object-left"
        />
        <div className="absolute inset-0 bg-[#95BB72] bg-opacity-20"></div>
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

export default Register;
