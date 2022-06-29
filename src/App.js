import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./views/auth/Login";
import Home from "./views/home/Home";
import Restaurant from "./views/restaurant/Restaurant";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/restaurant/:id" element={<Restaurant />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
