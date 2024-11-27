import React from "react";
import { Link } from "react-router-dom";

const TanyaAI = () => {
  return (
    <div className="flex items-center justify-center gap-16 min-h-[80vh]">
      <Link to="/tanyaAI/saran-makanan">
        <div className="bg-white px-10 py-14 text-center flex flex-col gap-6 rounded-md">
          <img
            src="src\assets\TanyaAI\saran makanan.svg"
            alt=""
            className="w-40"
          />
          <p className="font-semibold text-[#5A5A5A] text-lg">Saran Makanan</p>
        </div>
      </Link>

      <Link to="/tanyaAI/saran-resep">
        <div className="bg-white px-10 py-14 text-center flex flex-col gap-6 rounded-md">
          <img
            src="src\assets\TanyaAI\saran resep.svg"
            alt=""
            className="w-40"
          />
          <p className="font-semibold text-[#5A5A5A] text-lg">Saran Resep</p>
        </div>{" "}
      </Link>
    </div>
  );
};

export default TanyaAI;
