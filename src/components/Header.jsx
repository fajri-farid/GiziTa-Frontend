import { Link } from "react-router-dom";
import "../App.css";
import "../styles/header.css";

export const Header = () => {
  return (
    <header>
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <h1 className="nama text-[38px] tracking-wider font-bold text-white">
          GiziTa'
        </h1>

        <nav>
          <ul className="grotesk flex space-x-6 items-center text-white">
            <li className=" cursor-pointer">Beranda</li>
            <li className=" cursor-pointer">Konsultasi</li>
            <li className=" cursor-pointer">Donasi</li>
            <li className=" cursor-pointer">Saran Nutrisi</li>
            <li className="cursor-pointer">Artikel</li>
            <Link to="/login">
              <button className="bg-white  text-[#49A47A] py-2 px-8 rounded-lg">
                Login
              </button>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};
