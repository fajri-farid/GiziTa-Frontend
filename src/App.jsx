import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header";
import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/Register";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const location = useLocation();

  const noNavbarPaths = ["/login", "/register"];

  return (
    <>
      <div className="main">
        {!noNavbarPaths.includes(location.pathname) && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" Component={NotFoundPage} />
        </Routes>
      </div>
    </>
  );
}

export default App;
