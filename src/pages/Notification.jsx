import React from "react";

const Notification = () => {
  const icons = {
    jam: "src/assets/notifikasi/jam.svg",
    suara: "src/assets/notifikasi/suara.svg",
    tandaSeru: "src/assets/notifikasi/tandaseru.svg",
  };

  return (
    <div className="flex flex-col">
      <div className="bg-white bg-opacity-[0.88] w-full p-10 rounded-t-lg shadow min-h-[calc(100vh-90px)]">
        <h1 className="text-[#5A5A5A] text-4xl font-bold">Notifikasi</h1>
        <div className="w-[100%] mx-auto border-t-2 border-[#C9C9C9] mt-4"></div>

        <div className="mt-10 flex flex-col gap-4">
          <div className="bg-white bg-opacity-[0.60] px-12 py-4 rounded-lg flex gap-10">
            <div className="flex items-center">
              <img src={icons.jam} alt="" className="w-15" />
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="font-bold">Waktu untuk Makan Siang Sehat</h4>
              <p>
                Jangan lewatkan makan siang yang bergizi! Coba rekomendasi kami!
              </p>
            </div>
          </div>

          <div className="bg-white bg-opacity-[0.60] px-12 py-4 rounded-lg flex gap-10">
            <div className="flex items-center">
              <img src={icons.tandaSeru} alt="" className="w-15" />
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="font-bold">Waktu Minum Air</h4>
              <p>Jangan lupa minum air untuk menjaga tubuh tetap terhidrasi!</p>
            </div>
          </div>

          <div className="bg-white bg-opacity-[0.60] px-12 py-4 rounded-lg flex gap-10">
            <div className="flex items-center">
              <img src={icons.suara} alt="" className="w-15" />
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="font-bold">Butuh Saran Nutrisi?</h4>
              <p>
                Tanyakan pada chatbot kami untuk saran makanan sehat setiap
                saat! Klik untuk memulai.
              </p>
            </div>
          </div>

          <div className="bg-white bg-opacity-[0.60] px-12 py-4 rounded-lg flex gap-10">
            <div className="flex items-center">
              <img src={icons.jam} alt="" className="w-15" />
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="font-bold">Waktu untuk Makan Pagi Sehat</h4>
              <p>
                Nikmati pagi Anda dengan sarapan sehat! Pastikan Anda
                mendapatkan asupan nutrisi yang cukup.
              </p>
            </div>
          </div>

          <div className="bg-white bg-opacity-[0.60] px-12 py-4 rounded-lg flex gap-10">
            <div className="flex items-center">
              <img src={icons.jam} alt="" className="w-15" />
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="font-bold">Waktu untuk Makan Malam Sehat</h4>
              <p>
                Akhiri hari dengan makan malam yang menyehatkan. Rekomendasi
                kami!
              </p>
            </div>
          </div>

          <div className="bg-white bg-opacity-[0.60] px-12 py-4 rounded-lg flex gap-10">
            <div className="flex items-center">
              <img src={icons.tandaSeru} alt="" className="w-15" />
            </div>

            <div className="flex flex-col gap-2">
              <h4 className="font-bold">Waktu Minum Air</h4>
              <p>Jangan lupa minum air untuk menjaga tubuh tetap terhidrasi!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
