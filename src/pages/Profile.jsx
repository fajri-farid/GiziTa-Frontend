import "../styles/profile.css";

const Profile = () => {
  return (
    <div className="w-full flex justify-center items-center h-[80%]">
      <div className="box mt-10 bg-white w-[95%] max-w-[1500px] h-[100%] rounded-md shadow-md p-8 flex">
        <div className="w-1/4 pr-4 border-r">
          <div className="flex flex-col items-center">
            <img
              src="src/assets/profile/profile1.webp"
              alt="Profile"
              className="rounded-full mb-4 w-40 h-40 object-cover"
            />
            <h2 className="font-bold text-lg">Fajri Wajdi</h2>
          </div>
          <ul className="mt-8">
            <li className="mb-4 p-2 bg-gray-200 rounded-md">Profil</li>
            <li className="mb-4 p-2 hover:bg-gray-100 rounded-md">
              Notifikasi
            </li>
            <li className="mb-4 p-2 hover:bg-gray-100 rounded-md">
              Riwayat Donasi
            </li>
            <li className="mb-4 p-2 hover:bg-gray-100 rounded-md">
              Kata Sandi & Keamanan
            </li>
            <li className="p-2 text-red-500 hover:underline cursor-pointer">
              Keluar
            </li>
          </ul>
        </div>
        <div className="w-3/4 pl-4">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Profil</h1>
            <button className="bg-blue-400 text-white px-4 py-2 rounded-md">
              Edit Profil
            </button>
          </div>
          <form>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-600 mb-2">
                  Nama Pengguna
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">
                  Tanggal Lahir
                </label>
                <input
                  type="date"
                  className="w-full p-2 border rounded-md bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded-md bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Gender</label>
                <select className="w-full p-2 border rounded-md bg-gray-100">
                  <option>Laki-laki</option>
                  <option>Perempuan</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Nama Lengkap</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Alamat</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">Bio</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md bg-gray-100"
                />
              </div>
              <div>
                <label className="block text-gray-600 mb-2">
                  Nomor Handphone
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md bg-gray-100"
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-10 w-full bg-gray-300 text-gray-500 px-4 py-2 rounded-md cursor-not-allowed"
              disabled
            >
              Simpan Perubahan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
