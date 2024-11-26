import React from "react";

const Konsultasi = () => {
  return (
    <div className="flex flex-col h-[calc(100vh-90px)] bg-[rgba(73,148,122,0.9)]">
      <div className="text-center bg-white bg-opacity-[0.88] w-full py-4 rounded-t-lg shadow">
        <h1 className="text-2xl font-semibold grotesk text-gray-700 mt-4">
          Konsultasi Online
        </h1>

        <div className="w-[80%] mx-auto border-t-2 border-[#C9C9C9] mt-4"></div>
      </div>

      <div className="bg-white bg-opacity-[0.88] w-full flex-1 rounded-b-lg shadow-md p-6 flex flex-col justify-between">
        <div className="flex flex-col text-sm items-center justify-center text-center mb-6">
          <p className="text-gray-600 grotesk mb-2">Mohon tunggu sebentar...</p>
          <p className="text-gray-600 grotesk flex items-center justify-center">
            Sedang mencari dokter yang tersedia
            <img
              src="/src/assets/Konsultasi/Loader.svg"
              alt="Loading"
              className="inline-block w-4 h-6 ml-2"
            />
          </p>
        </div>

        <div className="relative flex items-center w-[90%] mt-auto justify-center mx-auto">
          <img
            src="/src/assets/Konsultasi/Smiley Happy.svg"
            alt="Smiley"
            className="absolute left-4 w-6 h-6"
          />
          <input
            type="text"
            placeholder="Ketik pesan..."
            className="w-full px-12 pr-12 py-2 border border-[#49A47A] rounded-full text-gray-700 focus:outline-none"
          />
          <img
            src="/src/assets/Konsultasi/Send.svg"
            alt="Send"
            className="absolute right-4 w-6 h-6 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Konsultasi;
