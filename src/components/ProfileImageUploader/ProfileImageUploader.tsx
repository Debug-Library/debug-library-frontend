import { Camera } from "lucide-react";

const ProfileImageUploader: React.FC = () => {
  const profileImageUrl = "https://avatars.githubusercontent.com/u/94319702?v=4";

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // lógica para trocar a imagem se quiser
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="relative w-44 h-44 rounded-full border-4 border-purple-500 shadow-md overflow-hidden bg-gray-300 flex items-center justify-center"
        style={{ minWidth: 176, minHeight: 176 }}
      >
        <img
          src={profileImageUrl}
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