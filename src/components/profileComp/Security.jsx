import React from "react";

const Security = ({ onChangePassword }) => {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-3xl font-bold">Kata Sandi & Keamanan</h1>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <p className="font-bold">Verifikasi Email</p>
          <p className="text-[#27AB27]">terverifikasi</p>
        </div>

        <div className="flex justify-between">
          <p className="font-bold">Ubah Kata Sandi</p>
          <button
            className="text-blue-500 underline"
            onClick={onChangePassword}
          >
            Ubah
          </button>
        </div>

        <div className="flex justify-between">
          <p className="font-bold">Nomor Handphone</p>
          <p>+62 6457926332</p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-bold">Login Terakhir</p>
          <p>Hari ini 24.44, Safari 198.123.23.23</p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-bold">Total sesi yang aktif (1)</p>
          <p>DESKTOP 00VNJK • INDONESIA</p>
        </div>
      </div>
    </div>
  );
};

export default Security;
