import React, { useState } from "react";

const Notification = () => {
  const [notificationEnabled, setNotificationEnabled] = useState(true);
  const [desktopNotificationEnabled, setDesktopNotificationEnabled] =
    useState(true);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Preferensi Notifikasi</h1>
      <p className="text-gray-600 mb-6">
        Pilih notifikasi yang ingin Anda terima dari GiziTa’ untuk situs ini.
      </p>

      <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex items-center">
        <div className="flex gap-4">
          <div className="flex items-center">
            <div className="text-xl text-gray-600">
              <img
                src="src\assets\profile\Bell.svg"
                alt=""
                className="w-[5rem]"
              />
            </div>
          </div>
          <div>
            <h2 className="text-lg font-medium">
              Aktifkan notifikasi untuk situs ini
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              Anda dapat dengan mudah mengaktifkan atau menonaktifkan semua
              notifikasi untuk setiap situs. Perubahan ini hanya memengaruhi
              situs ini dan akun Anda.
            </p>
          </div>
          <div className="flex items-center">
            <label
              htmlFor="site-notification-toggle"
              className="relative inline-block w-12 mr-2 align-middle select-none"
            >
              <input
                id="site-notification-toggle"
                type="checkbox"
                checked={notificationEnabled}
                onChange={() => setNotificationEnabled(!notificationEnabled)}
                className="hidden"
              />
              <span
                className={`toggle-bg block w-10 h-6 rounded-full transition-all duration-300 ${
                  notificationEnabled ? "bg-green-500" : "bg-gray-400"
                }`}
              ></span>
              <span
                className={`dot absolute left-0 top-0 w-6 h-6 bg-white rounded-full transition-all duration-300 transform ${
                  notificationEnabled ? "translate-x-4" : "translate-x-0"
                }`}
              ></span>
            </label>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md mb-6 flex items-center">
        <div className="flex gap-4">
          <div className="flex items-center space-x-4">
            <div className="text-xl text-gray-600">
              <img
                src="src\assets\profile\Monitor.svg"
                alt=""
                className="w-[5rem]"
              />
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium">Aktifkan notifikasi desktop</h2>
            <p className="text-gray-500 mt-2 text-sm">
              Jangan lewatkan pembaruan penting. Dapatkan pemberitahuan push di
              peramban web Anda, bahkan saat Anda tidak mengunjungi GiziTa’.
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <label
            htmlFor="desktop-notification-toggle"
            className="relative inline-block w-12 mr-2 align-middle select-none"
          >
            <input
              id="desktop-notification-toggle"
              type="checkbox"
              checked={desktopNotificationEnabled}
              onChange={() =>
                setDesktopNotificationEnabled(!desktopNotificationEnabled)
              }
              className="hidden"
            />
            <span
              className={`toggle-bg block w-10 h-6 rounded-full transition-all duration-300 ${
                desktopNotificationEnabled ? "bg-green-500" : "bg-gray-400"
              }`}
            ></span>
            <span
              className={`dot absolute left-0 top-0 w-6 h-6 bg-white rounded-full transition-all duration-300 transform ${
                desktopNotificationEnabled ? "translate-x-4" : "translate-x-0"
              }`}
            ></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Notification;
