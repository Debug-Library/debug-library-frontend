import React from "react";
import { Camera } from "lucide-react";

type ProfileImageUploaderProps = {
  initialImage: string;
  onImageChange: (newImage: string) => void;
};

const ProfileImageUploader: React.FC<ProfileImageUploaderProps> = ({
  initialImage,
  onImageChange,
}) => {
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === "string") {
        onImageChange(reader.result); // passa o novo base64 pro estado do pai
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="relative w-44 h-44 rounded-full border-4 border-purple-500 shadow-md overflow-hidden bg-gray-300 flex items-center justify-center"
        style={{ minWidth: 176, minHeight: 176 }}
      >
        <img
          src={initialImage}
          alt="Foto de perfil"
          className="w-full h-full object-cover relative"
          style={{ zIndex: 0, position: "relative" }}
        />

        <label
          htmlFor="fileInput"
          className="absolute bottom-2 right-2 cursor-pointer z-20"
        >
          <div className="bg-purple-600 p-2 rounded-full hover:bg-purple-500">
            <Camera size={30} color="#ffffff" />
          </div>
        </label>

        <input
          id="fileInput"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
      </div>
    </div>
  );
};

export default ProfileImageUploader;
