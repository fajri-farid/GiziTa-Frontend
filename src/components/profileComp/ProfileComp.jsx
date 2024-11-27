import React, { useEffect, useState } from "react";
import axios from "axios";

const ProfileComp = () => {
  const [profile, setProfile] = useState({
    email: "",
    userName: "",
    fullName: "",
    address: "",
    phoneNumber: "",
    bio: "",
    gender: "",
    birthDate: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [originalProfile, setOriginalProfile] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("http://localhost:8080/profile", {
          withCredentials: true,
        });

        if (response.data.success) {
          const {
            email,
            userName,
            fullName,
            address,
            phoneNumber,
            bio,
            gender,
            birthDate,
          } = response.data.data;

          const formattedProfile = {
            email: email || "",
            userName: userName || "",
            fullName: fullName || "",
            address: address || "",
            phoneNumber: phoneNumber || "",
            bio: bio || "",
            gender: gender || "",
            birthDate: birthDate
              ? new Date(birthDate).toISOString().split("T")[0]
              : "",
          };

          setProfile(formattedProfile);
          setOriginalProfile(formattedProfile);
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        setError(error.response?.data?.message || "Failed to fetch profile");
      }
    };

    fetchProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setProfile(originalProfile);
    setIsEditing(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare update payload
    const updatePayload = {
      userName: profile.userName,
      fullName: profile.fullName || null,
      address: profile.address || null,
      phoneNumber: profile.phoneNumber || null,
      bio: profile.bio || null,
      gender: profile.gender ? profile.gender.toLowerCase() : null,
      birthDate: profile.birthDate || null,
    };

    try {
      console.log("Payload to send:", updatePayload);
      const response = await axios.put(
        "http://localhost:8080/profile",
        updatePayload,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        alert("Profile updated successfully");
        setOriginalProfile(profile);
        setIsEditing(false);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert(
        "Failed to update profile: " +
          (error.response?.data?.message || "Unknown error")
      );
    }
  };
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Profil</h1>
        {!isEditing ? (
          <button
            onClick={handleEditProfile}
            className="bg-blue-400 text-white px-4 py-2 rounded-md"
          >
            Edit Profil
          </button>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={handleCancelEdit}
              className="bg-gray-400 text-white px-4 py-2 rounded-md"
            >
              Batal
            </button>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-600 mb-2">Nama Pengguna</label>
            <input
              type="text"
              name="userName"
              value={profile.userName}
              onChange={handleInputChange}
              disabled={!isEditing}
              className={`w-full p-2 border rounded-md ${
                isEditing ? "bg-white" : "bg-gray-100"
              }`}
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-2">Tanggal Lahir</label>
            <input
              type="date"
              name="birthDate"
              value={profile.birthDate}
              onChange={handleInputChange}
              disabled={!isEditing}
              className={`w-full p-2 border rounded-md ${
                isEditing ? "bg-white" : "bg-gray-100"
              }`}
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              disabled
              className="w-full p-2 border rounded-md bg-gray-200 cursor-not-allowed"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-2">Gender</label>
            <select
              name="gender"
              value={profile.gender}
              onChange={handleInputChange}
              disabled={!isEditing}
              className={`w-full p-2 border rounded-md ${
                isEditing ? "bg-white" : "bg-gray-200"
              }`}
            >
              <option value="">Pilih Gender</option>
              <option value="male">Laki-laki</option>
              <option value="female">Perempuan</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-600 mb-2">Nama Lengkap</label>
            <input
              type="text"
              name="fullName"
              value={profile.fullName}
              onChange={handleInputChange}
              disabled={!isEditing}
              className={`w-full p-2 border rounded-md ${
                isEditing ? "bg-white" : "bg-gray-200"
              }`}
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-2">Alamat</label>
            <input
              type="text"
              name="address"
              value={profile.address}
              onChange={handleInputChange}
              disabled={!isEditing}
              className={`w-full p-2 border rounded-md ${
                isEditing ? "bg-white" : "bg-gray-200"
              }`}
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-2">Bio</label>
            <input
              type="text"
              name="bio"
              value={profile.bio}
              onChange={handleInputChange}
              disabled={!isEditing}
              className={`w-full p-2 border rounded-md ${
                isEditing ? "bg-white" : "bg-gray-200"
              }`}
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-2">Nomor Handphone</label>
            <input
              type="text"
              name="phoneNumber"
              value={profile.phoneNumber}
              onChange={handleInputChange}
              disabled={!isEditing}
              className={`w-full p-2 border rounded-md ${
                isEditing ? "bg-white" : "bg-gray-200"
              }`}
            />
          </div>
        </div>
        {isEditing && (
          <button
            type="submit"
            className="mt-10 w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Simpan Perubahan
          </button>
        )}
      </form>
    </>
  );
};

export default ProfileComp;
