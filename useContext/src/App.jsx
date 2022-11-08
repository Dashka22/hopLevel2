import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/signUp";
import Header from "./components/header";
import { useState, createContext } from "react";

export const darkModeContext = createContext();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <darkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path=":userId" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </darkModeContext.Provider>
  );
}

export default App;
