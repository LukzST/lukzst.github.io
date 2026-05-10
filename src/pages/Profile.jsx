import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useExternalStyle from "../hooks/useExternalStyle";

export default function Profile() {
    useExternalStyle('profile.css');
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const studioGames = [
        { id: "light", name: "LIGHT", owned: true, url: "https://unburiedpixels.itch.io/light" },
        { id: "insomnia", name: "INSOMNIA", owned: false, url: "https://unburiedpixels.itch.io/insomnia" },
        { id: "paleluna", name: "PALE LUNA", owned: false, url: "https://unburiedpixels.itch.io/pale-luna" }
    ];

    useEffect(() => {
        const parseToken = () => {
            // Pega o token se ele vier na URL (mesmo com a bagunça do HashRouter)
            const fullHash = window.location.hash;
            let token = localStorage.getItem('itch_token');

            if (fullHash.includes("access_token=")) {
                token = fullHash.split("access_token=")[1].split("&")[0];
                localStorage.setItem('itch_token', token);
                // Limpa a URL para ficar bonita: luxjson.github.io/#/profile
                window.history.replaceState({}, document.title, window.location.pathname + window.location.search + "#/profile");
            }

            if (!token) {
                navigate('/login');
                return;
            }

            fetchUserData(token);
        };

        const fetchUserData = (token) => {
            fetch(`https://itch.io/api/1/key/me`, {
                headers: { 'Authorization': `Bearer ${token}` }
            })
            .then(res => res.json())
            .then(data => {
                if (data.user) {
                    setUser(data.user);
                    setLoading(false);
                } else {
                    logout();
                }
            })
            .catch(logout);
        };

        parseToken();
    }, [navigate]);

    const logout = () => {
        localStorage.removeItem('itch_token');
        navigate('/login');
    };

    if (loading) return <div className="loading-vault">DECRYPTING_VAULT...</div>;

    return (
        <div className="profile-viewport">
            <nav className="ubp-nav">
                <div className="nav-container">
                    <Link to="/" className="brand">UNBURIED PIXELS_</Link>
                    <button onClick={logout} className="logout-btn">LOGOUT_</button>
                </div>
            </nav>

            <header className="user-header-grid">
                <div className="avatar-cell">
                    <img src={user.cover_url || "https://placehold.co/200x200/000/fff?text=?"} alt="User" className="user-photo" />
                </div>
                <div className="name-cell">
                    <span className="id-tag">SUBJECT_ID: {user.id}</span>
                    <h1 className="user-name">{user.username.toUpperCase()}</h1>
                    <p className="user-link">{user.url}</p>
                </div>
            </header>

            <main className="library-section">
                <div className="library-header">
                    <h2 className="massive-title outline">VAULT_</h2>
                </div>

                <div className="games-grid">
                    {studioGames.map(game => (
                        <div key={game.id} className={`game-card ${game.owned ? 'owned' : 'locked'}`}>
                            <div className="card-info">
                                <span className="game-status">{game.owned ? 'UNLOCKED' : 'RESTRICTED'}</span>
                                <h3 className="game-title">{game.name}</h3>
                            </div>
                            <div className="card-action">
                                {game.owned ? (
                                    <button className="action-btn download">DOWNLOAD_DATA</button>
                                ) : (
                                    <button onClick={() => window.open(game.url)} className="action-btn buy">ACQUIRE_LICENSE ↗</button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}