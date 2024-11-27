import React, { useState } from "react";
import axios from "axios";
import "../styles/saranMakanan.css";

const SaranMakanan = () => {
  const [suggestion, setSuggestion] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateSaranMakanan = async () => {
    setIsLoading(true);
    setError("");
    setSuggestion(null);

    try {
      const response = await axios.post(
        "http://localhost:8080/chatbot/saran-makanan",
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setSuggestion(response.data);
    } catch (error) {
      console.error("Full Error:", error);
      console.error("Error Response:", error.response);
      if (error.response) {
        setError(
          error.response.data.error ||
            "Terjadi kesalahan saat mendapatkan saran makanan."
        );
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        setError("Tidak ada respon dari server");
        console.log(error.request);
      } else {
        setError("Kesalahan dalam pengaturan permintaan");
        console.log("Error", error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="saran-makanan-container text-white">
      <div className="mt-10 w-full">
        <h1 className="text-4xl">Saran Makanan</h1>
        <div className="w-[100%] mx-auto border-t-2 border-[#C9C9C9] mt-4"></div>
        <h4 className="text-2xl mt-10">
          Generate saran makanmu untuk seharian disini!
        </h4>
        <button
          onClick={handleGenerateSaranMakanan}
          disabled={isLoading}
          className={`
            bg-gray-300 text-[#49A47A] py-2 px-6 rounded-full 
            hover:bg-gray-100 hover:scale-105 
            transition-all duration-200 mt-10
            ${isLoading ? "opacity-50 cursor-not-allowed" : ""}
          `}
        >
          {isLoading ? "Sedang Memproses..." : "Buat Saran Makanan"}
        </button>

        {error && <div className="text-red-500 mt-4">{error}</div>}

        {suggestion && (
          <div className="mt-10 m-10 bg-white p-6 rounded-lg text-black">
            <div className="mb-2">
              <h4 className="text-md font-bold">Sarapan</h4>
              <p>
                <strong>Menu:</strong> {suggestion.sarapan.menu}
              </p>
              <p>
                <strong>Alasan:</strong> {suggestion.sarapan.alasan}
              </p>
            </div>

            <div className="mb-2">
              <h4 className="text-md font-bold">Makan Siang</h4>
              <p>
                <strong>Menu:</strong> {suggestion.makanSiang.menu}
              </p>
              <p>
                <strong>Alasan:</strong> {suggestion.makanSiang.alasan}
              </p>
            </div>

            <div className="mb-2">
              <h4 className="text-md font-bold">Makan Malam</h4>
              <p>
                <strong>Menu:</strong> {suggestion.makanMalam.menu}
              </p>
              <p>
                <strong>Alasan:</strong> {suggestion.makanMalam.alasan}
              </p>
            </div>

            <div>
              <h4 className="text-md font-bold">Informasi Tambahan</h4>
              <p>
                <strong>Total Gizi:</strong> {suggestion.totalGizi}
              </p>
              <p>
                <strong>Perkiraan Biaya:</strong> {suggestion.biayaPerHari}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SaranMakanan;
