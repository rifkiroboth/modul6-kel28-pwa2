import React from "react";
import "./index.css";

export default function Modal({ isShow, data, onCancel }) {
    console.log(data); // Debugging untuk memeriksa data
    const placeholderImage = "https://example.com/placeholder.jpg";

    return (
        <div className={!isShow ? "hidden" : ""} datacy="modal-delete">
            <div className="modal-bg" onClick={onCancel}></div>
            <div className="modal">
                {data ? (
                    <>
                        {/* Gambar Resep */}
                        <img
                            src={data.display.images ? data.display.images[0] : placeholderImage}
                            alt={data.display.displayName || "No Title"}
                            className="modal-image"
                        />
                        
                        {/* Informasi Utama */}
                        <div className="modal-info">
                            <h3>{data.display.displayName || "No Title Available"}</h3>
                            <p><strong>Author:</strong> {data.display.profiles[0].displayName || "No description available."}</p>
                            <a
                                href={data.content.details?.directionsUrl || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="recipe-link"
                            >
                                View Full Recipe
                            </a>
                        </div>

                         
                        {/* Tag Resep */}
{data.content.tags && (
    <div className="modal-section">
        <h4>Tags</h4>
        <ul>
            {/* Cek kategori difficulty */}
            {data.content.tags.difficulty &&
                data.content.tags.difficulty.map((tag, index) => (
                    <li key={`difficulty-${index}`}>
                        {tag["display-name"] || "Unknown Difficulty"}
                    </li>
                ))}

            {/* Cek kategori technique */}
            {data.content.tags.technique &&
                data.content.tags.technique.map((tag, index) => (
                    <li key={`technique-${index}`}>
                        {tag["display-name"] || "Unknown Technique"}
                    </li>
                ))}
        </ul>
    </div>
)}


                        {/* Bahan-bahan */}
                        {data.content.ingredientLines && data.content.ingredientLines.length > 0 && (
                            <div className="modal-section">
                                <h4>Ingredients</h4>
                                <ul>
                                    {data.content.ingredientLines.map((ingredient, index) => (
                                        <li key={index}>{ingredient.wholeLine}</li>
                                    ))}
                                </ul>
                            </div>
                        )}


                        {/* Tombol Tutup */}
                        <button onClick={onCancel} className="close-btn">
                            Close
                        </button>
                    </>
                ) : (
                    <p>Data not available</p>
                )}
            </div>
        </div>
    );
}
