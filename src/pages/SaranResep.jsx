import React, { useState } from "react";
import axios from "axios";
import "../styles/saranResep.css";

const SaranResep = () => {
  const [ingredients, setIngredients] = useState(""); // Menyimpan input user
  const [loading, setLoading] = useState(false); // Status loading
  const [response, setResponse] = useState(null); // Menyimpan respons dari API
  const [error, setError] = useState(null); // Menyimpan error

  const handleSend = async () => {
    if (!ingredients.trim()) {
      setError("Silakan masukkan bahan makanan.");
      return;
    }
    setError(null); // Reset error
    setLoading(true); // Tampilkan loading
    setResponse(null); // Reset respons sebelumnya

    try {
      const res = await axios.post("http://localhost:8080/chatbot/olah-bahan", {
        ingredients,
      });
      setResponse(res.data); // Simpan respons
    } catch (err) {
      setError("Gagal mendapatkan resep. Silakan coba lagi.");
    } finally {
      setLoading(false); // Sembunyikan loading
    }
  };

  return (
    <div className="saran-resep-container text-white">
      <div className="mt-10 w-full">
        <h1 className="text-4xl">Saran Resep</h1>
        <p>Masukkan bahan dan kami siapkan resepnya!</p>
        <div className="w-[100%] mx-auto border-t-2 border-[#C9C9C9] mt-4"></div>

        <div className="relative flex items-center w-[70%] mt-4 justify-center mx-auto">
          <input
            type="text"
            placeholder="Ketikkan bahan makanan yang kamu punya..."
            className="w-full px-12 pr-12 py-4 border border-[#49A47A] rounded-full text-gray-700 focus:outline-none"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          <img
            src="/src/assets/TanyaAI/kirim.svg"
            alt="Send"
            className="absolute right-4 w-8 h-8 cursor-pointer"
            onClick={handleSend}
          />
        </div>

        {loading && (
          <div className="loading-spinner mt-6">
            <div className="spinner"></div>
            <p>Loading...</p>
          </div>
        )}

        {error && <p className="error-message mt-4">{error}</p>}

        {response && (
          <div className="response mt-10 m-10 bg-white p-6 rounded-lg text-black">
            <h2 className="text-2xl font-bold">{response.menu}</h2>
            <ol className="mt-4 list-decimal list-inside">
              {response.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
            <p className="mt-4 text-black">
              <strong>Alasan: </strong>
              {response.reason}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SaranResep;
