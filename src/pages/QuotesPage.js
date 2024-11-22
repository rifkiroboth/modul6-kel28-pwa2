import React from "react";
import { Link } from "react-router-dom";
import "./QuotesPage.css"; // Pastikan untuk menambahkan styling baru

export default function QuotesPage() {
    // Daftar kutipan pendek dan panjang beserta gambar
    const quotes = [
        {
            short: "Good food is the foundation of happiness.",
            full: "Good food is the foundation of genuine happiness. It brings people together, nurtures our bodies, and satisfies our souls. Cooking and sharing meals create bonds and lasting memories.",
            image: "happy.png", // Ganti dengan gambar makanan nyata
        },
        {
            short: "Cooking is an art, eating is a passion.",
            full: "Cooking is an art, eating is a passion. Each meal tells a story, crafted with love and seasoned with joy.",
            image: "seni.png", // Ganti dengan gambar makanan nyata
        },
        {
            short: "Life is uncertain. Eat dessert first.",
            full: "Life is uncertain. Eat dessert first. Indulge in the sweetness of life before anything else.",
            image: "sweet.png", // Ganti dengan gambar makanan nyata
        },
        {
            short: "You don’t need a silver fork to eat good food.",
            full: "You don’t need a silver fork to eat good food. True satisfaction comes from the simplicity of flavors done right.",
            image: "puas.png", // Ganti dengan gambar makanan nyata
        },
        {
            short: "Food is symbolic of love when words are inadequate.",
            full: "Food is symbolic of love when words are inadequate. Sharing a meal expresses care and connection in ways words never could.",
            image: "menyayangi.png", // Ganti dengan gambar makanan nyata
        },
    ];

    return (
        <div className="quotes-container">
            <h1 className="quotes-title">Food Quotes</h1>

            {/* Daftar Kutipan */}
            <div className="quotes-grid">
                {quotes.map((quote, index) => (
                    <Link
                        to={`/quote/${encodeURIComponent(quote.full)}`}
                        key={index}
                        className="quote-card"
                    >
                        <div className="quote-image-container">
                            <img src={quote.image} alt={`Food for quote ${index + 1}`} className="quote-image" />
                        </div>
                        <p className="quote-text">{quote.short}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
}
