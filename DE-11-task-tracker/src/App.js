import React from 'react'
import "./App.css"
import Home from './pages/Home'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  // CloseOnClick: Bildirimin herhangi bir yerine tıklandığında bildirimin kaldırmayı sağlar.Varsayılan değeri true’dur.AutoClose: Ne zaman otomatik kapanması gerektiğini ayarlarabiliyoruz.Milisaniye cinsinden değer giriyoruz.
  return (
    <div className="container">
      <Home />
      <ToastContainer position="top-right" autoClose={4000} closeOnClick />
    </div>
  );
}

export default App
