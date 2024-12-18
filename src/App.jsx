import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/Register";
import NotFoundPage from "./pages/NotFoundPage";
import Profile from "./pages/Profile";
import { Header } from "./components/Header";
import Konsultasi from "./pages/Konsultasi";
import TanyaAI from "./pages/TanyaAI";
import ArticleList from "./pages/ArticleList";
import Notification from "./pages/Notification";
import SaranMakanan from "./pages/SaranMakanan";
import SaranResep from "./pages/SaranResep";
import Chatbot from "./pages/Chatbot";

function App() {
  const location = useLocation();

  const noNavbarPaths = ["/login", "/register"];

  return (
    <>
      <div className="main min-h-screen">
        {!noNavbarPaths.includes(location.pathname) && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/konsultasi" element={<Konsultasi />} />
          <Route path="/tanyaAI" element={<TanyaAI />} />
          <Route path="/artikel" element={<ArticleList />} />
          <Route path="/notifikasi" element={<Notification />} />
          <Route path="/tanyaAI/saran-makanan" element={<SaranMakanan />} />
          <Route path="/tanyaAI/saran-resep" element={<SaranResep />} />
          <Route path="/tanyaAI/chatbot" element={<Chatbot />} />
          <Route path="*" Component={NotFoundPage} />
        </Routes>
      </div>
    </>
  );
}

export default App;
