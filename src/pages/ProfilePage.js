import React from "react";
import "./ProfilePage.css"; // Pastikan file CSS untuk styling

function ProfileScreen() {
    return (
        <div className="profile-container">
            {/* Header */}
            <header className="profile-header">
                <h1>About Me</h1>
            </header>

            {/* Section Foto Profil dan Informasi */}
            <section className="profile-section">
                <img
                    src="/images.png" // Ganti path sesuai lokasi file gambar
                    alt="Profile"
                    className="profile-image"
                />
                <h2 className="profile-name">Rifki Roboth</h2>
                <p className="profile-bio">21120122140094 | Kelompok 28</p>
                <p className="profile-description">
                    Hobby masak biar bisa makan.
                </p>
            </section>

            {/* Section Social Media */}
            <section className="social-media-section">
                <h3>Follow Me</h3>
                <div className="social-media-links">
                    <a
                        href="https://www.instagram.com/robothrifki/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-media-link"
                    >
                        Instagram
                    </a>
                    <a
                        href="https://x.com/robothrifki"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-media-link"
                    >
                        Twitter
                    </a>
                    <a
                        href="https://github.com/rifkiroboth"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-media-link"
                    >
                        GitHub
                    </a>
                </div>
            </section>
        </div>
    );
}

export default ProfileScreen;
