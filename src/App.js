import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import QuotesPage from "./pages/QuotesPage";
import ProfilePage from "./pages/ProfilePage";
import FullQuotePage from "./pages/FullQuotePage";
import Navbar from "./components/navbar";


export default function App() {
    return (
        <Router>
            <div style={{ paddingBottom: "60px" }}> {/* Tambahkan padding bawah agar tidak tertutup navbar */}
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/quotes" element={<QuotesPage />} />
                    <Route path="/about" element={<ProfilePage />} />
                    <Route path="/quote/:quote" element={<FullQuotePage />} />
                </Routes>
            </div>
            <Navbar />
        </Router>
    );
}
