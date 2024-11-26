import React, { useState, useEffect } from "react";
import "../styles/profile.css";
import ProfileComp from "../components/profileComp/ProfileComp";
import Security from "../components/profileComp/Security";
import axios from "axios";
import Notification from "../components/profileComp/Notification";
import ChangePassword from "../components/profileComp/ChangePassword";

const Profile = () => {
  const [activeMenu, setActiveMenu] = useState("profile");
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [profile, setProfile] = useState({
    userName: "",
    profilePicture: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("http://localhost:8080/profile", {
          withCredentials: true,
        });

        if (response.data.success) {
          const { userName, profilePicture } = response.data.data;
          setProfile({ userName, profilePicture });
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  const renderMenuComponent = () => {
    if (isChangingPassword) {
      return <ChangePassword />;
    }

    switch (activeMenu) {
      case "profile":
        return <ProfileComp />;
      case "notifications":
        return <Notification />;
      case "security":
        return (
          <Security onChangePassword={() => setIsChangingPassword(true)} />
        );
      default:
        return <ProfileComp />;
    }
  };

  return (
    <div className="w-full flex justify-center items-center h-full">
      <div className="box mt-10 bg-white w-[95%] max-w-[1500px] h-[100%] rounded-md shadow-md p-12 flex">
        <div className="w-1/4 pr-4 border-r">
          <div className="flex flex-col items-center">
            <img
              src="src/assets/profile/profile1.webp"
              alt="Profile"
              className="rounded-full mb-4 w-40 h-40 object-cover"
            />
            <h2 className="font-bold text-lg">{profile.userName}</h2>
          </div>
          <ul className="mt-8">
            <li
              className={`mb-4 p-2 ${
                activeMenu !== "profile" ? "" : "bg-gray-200"
              } rounded-md cursor-pointer`}
              onClick={() => setActiveMenu("profile")}
            >
              Profil
            </li>
            <li
              className={`mb-4 p-2 ${
                activeMenu !== "notifications" ? "" : "bg-gray-200"
              } rounded-md cursor-pointer`}
              onClick={() => setActiveMenu("notifications")}
            >
              Notifikasi
            </li>
            <li
              className={`mb-4 p-2 ${
                activeMenu !== "security" ? "" : "bg-gray-200"
              } rounded-md cursor-pointer`}
              onClick={() => setActiveMenu("security")}
            >
              Keamanan & Kata Sandi
            </li>
            <li className="p-2 text-red-500 hover:underline cursor-pointer">
              Keluar
            </li>
          </ul>
        </div>

        {/* Content */}
        <div className="w-3/4 pl-4">{renderMenuComponent()}</div>
      </div>
    </div>
  );
};

export default Profile;
