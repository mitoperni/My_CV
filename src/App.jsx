import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from './pages/Home/Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <div id="app-wrapper">
          <div id="navbar">
            <Navbar />
          </div>
          <div id="main">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
          <div id="footer">
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
