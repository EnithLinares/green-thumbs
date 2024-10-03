import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage";
import NewPlantPage from "./pages/NewPlantPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/new-plant" element={<NewPlantPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
