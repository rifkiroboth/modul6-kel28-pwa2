import React from "react";
import "./index.css";

const placeholderImage = "https://example.com/placeholder.jpg";

export default function Card({ data, onClick }) {
    return (
        <div className="card" onClick={onClick}>
            {data ? (
                <>
                    <figure>
                        <img 
                            src={data.images ? data.images[0] : placeholderImage} 
                            alt={data.displayName || "No Title"} 
                        />
                    </figure>
                    <div className="card-info">
                        <h3>{data.displayName || "No Title Available"}</h3>
                        <p>{data.flag || ""}</p>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
