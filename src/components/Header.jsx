import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import "../styles/header.css";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const checkLoginStatus = () => {
    const cookies = document.cookie.split("; ");
    const sessionCookie = cookies.find((cookie) =>
      cookie.startsWith("JSESSIONID=")
    );

    if (sessionCookie && sessionCookie.split("=")[1] !== "") {
      setIsLoggedIn(true);
      console.log("User logged in with session:", sessionCookie);
    } else {
      setIsLoggedIn(false);
      console.log("No valid session found");
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const handleProfileClick = () => {
    navigate("/profile");
  };

  console.log(document.cookie);

  return (
    <header>
      <div className="container mx-auto flex justify-between items-center py-4">
        <Link to="/">
          <h1 className="nama text-[38px] tracking-wider font-bold text-white">
            GiziTa'
          </h1>
        </Link>

        <nav>
          <ul className="grotesk flex space-x-6 items-center text-white">
            <Link to="/">
              <li className=" cursor-pointer">Beranda</li>
            </Link>
            <li className=" cursor-pointer">Konsultasi</li>
            <li className=" cursor-pointer">Donasi</li>
            <li className=" cursor-pointer">Saran Nutrisi</li>
            <li className="cursor-pointer">Artikel</li>
            {isLoggedIn ? (
              <li>
                <button onClick={handleProfileClick}>
                  <img
                    src="src\assets\profile\profile1.webp"
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </button>
              </li>
            ) : (
              <li>
                <Link to="/login">
                  <button className="bg-white text-[#49A47A] py-2 px-8 rounded-lg">
                    Login
                  </button>
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};
