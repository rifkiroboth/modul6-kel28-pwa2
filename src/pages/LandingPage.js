import React, { useState, useEffect } from "react";
import axios from "axios";
import "./LandingPage.css"

// Components
import Card from "../components/card";
import Modal from "../components/modal";

export default function LandingPage() {
    const [data, setData] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [query, setQuery] = useState(
        localStorage.getItem("lastQuery") || "strawberry jam"
    );

    // Modal
    const [modalShow, setModalShow] = useState(false);
    const [modalItem, setModalItem] = useState(null);

    useEffect(() => {
        const fetchData = async (query) => {
            setIsLoading(true);
            try {
                const response = await axios.get(
                    "https://yummly2.p.rapidapi.com/feeds/search",
                    {
                        params: { q: query },
                        headers: {
                            "x-rapidapi-host": "yummly2.p.rapidapi.com",
                            "x-rapidapi-key": "f53141dda2msh525aed757a3f09cp174a30jsnc105eb1de96d"
                        },
                    }
                );

                if (response.status === 200) {
                    setData(response.data.feed);  // Adjusted to use the feed data array
                    setIsLoaded(true);
                    setIsLoading(false);
                    localStorage.setItem("lastData", JSON.stringify(response.data.feed));
                    localStorage.setItem("lastQuery", query);
                }
            } catch (err) {
                console.log(err);
                const cachedData = localStorage.getItem("lastData");
                if (cachedData) {
                    setData(JSON.parse(cachedData));
                }
                setIsLoading(false);
            }
        };

        if (!isLoaded) {
            fetchData(query);
        }
    }, [isLoaded, query]);

    const onSearch = (e) => {
        if (e.key === "Enter") {
            setIsLoaded(false);
            setQuery(e.target.value);
        }
    };

    const handleClick = (item) => {
        setModalShow(true);
        setModalItem(item); // Kirim seluruh objek item
    };
    
    return (
        <main>
            <div>
            <input
            className="input"
                type="text"
                placeholder="Search for a recipe"
                onKeyDown={(e) => onSearch(e)}
            />
            <h3 className="title">Search : {query}</h3>
            </div>
            {!data || isLoading ? (
                <p>Loading...</p>
            ) : (
                <div className="card-container">
                    {data.map((item, index) => (
                        <Card
                            data={item.display} // Use display for recipe details
                            key={index}
                            onClick={() => handleClick(item)}
                        />
                    ))}
                </div>
            )}
            <Modal
                data={modalItem}
                isShow={modalShow}
                onCancel={() => setModalShow(false)}
            />
        </main>
    );
}