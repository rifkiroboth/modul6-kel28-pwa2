import React from "react";
import { useParams, Link } from "react-router-dom";

export default function FullQuotePage() {
    const { quote } = useParams(); // Ambil parameter dari URL

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Full Quote</h1>
            <p style={styles.quote}>{decodeURIComponent(quote)}</p>

            {/* Tombol Kembali */}
            <Link to="/quotes" style={styles.backLink}>
                Back to Quotes
            </Link>
        </div>
    );
}

const styles = {
    container: {
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        textAlign: "center",
    },
    title: {
        fontSize: "24px",
        fontWeight: "bold",
        color: "#2f3640",
        marginBottom: "20px",
    },
    quote: {
        fontSize: "18px",
        color: "#333",
        marginBottom: "20px",
        lineHeight: "1.6",
    },
    backLink: {
        fontSize: "16px",
        color: "#007bff",
        textDecoration: "none",
    },
};
