import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Cadastro from "./components/Cadastro/Cadastro";
import Home from "./components/Home/Home";
import InformacoesPerfil from "./components/InformacoesPerfil/InformacoesPerfil";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/perfil" element={<InformacoesPerfil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;