import { useState } from "react";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";

export function Home() {
  const [user, setUser] = useState({
    name: "Maria de Fátima",
    avatar: "https://avatars.githubusercontent.com/u/94319702?v=4",
  });

  const handleLogout = () => {
    setUser(null);
    // Aqui você pode limpar o token, contexto etc.
  };

  return (
    <div className="bg-purple-950 min-h-screen">
      <Navbar user={user} onLogout={handleLogout} />
      <Banner />
    </div>
  );
}

export default Home;