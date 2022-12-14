import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AutoPage, HomePage, TablasPage } from "./pages";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Auto" element={<AutoPage />} />
        <Route path="/Tablas" element={<TablasPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
