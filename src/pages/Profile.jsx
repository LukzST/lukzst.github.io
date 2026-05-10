import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useExternalStyle from "../hooks/useExternalStyle";

export default function Profile() {
    useExternalStyle('profile.css');
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Lista de jogos do estúdio para mostrar na biblioteca
    const studioGames = [
        { id: "light", name: "LIGHT", owned: true, url: "https://unburiedpixels.itch.io/light" },
        { id: "insomnia", name: "INSOMNIA", owned: false, url: "https://unburiedpixels.itch.io/insomnia" },
        { id: "paleluna", name: "PALE LUNA", owned: false, url: "https://unburiedpixels.itch.io/pale-luna" }
    ];

    useEffect(() => {
        const hash = new URLSearchParams(location.hash.replace('#', '?'));
        let token = hash.get('access_token') || localStorage.getItem('itch_token');

        if (token) {
            localStorage.setItem('itch_token', token);
            fetch(`https://itch.io/api/1/key/me`, {
                headers: { 'Authorization': `Bearer ${token}` }
            })
            .then(res => res.json())
            .then(data => {
                if (data.user) {
                    setUser(data.user);
                    setLoading(false);
                } else {
                    handleLogout();
                }
            })
            .catch(handleLogout);
        } else {
            navigate('/login');
        }
    }, [navigate, location]);

    const handleLogout = () => {
        localStorage.removeItem('itch_token');
        navigate('/login');
    };

    const buyGame = (url) => {
        window.open(url, 'itch-purchase', 'width=800,height=600');
    };

    if (loading) return <div className="loading-vault">DECRYPTING_VAULT...</div>;

    return (
        <div className="profile-viewport">
            <nav className="ubp-nav">
                <div className="nav-container">
                    <Link to="/" className="brand">UNBURIED PIXELS</Link>
                    <button onClick={handleLogout} className="logout-btn">LOGOUT_</button>
                </div>
            </nav>

            <header className="user-header-grid">
                <div className="avatar-cell">
                    <img src={user.cover_url} alt="Avatar" className="user-photo" />
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
                                    <button className="action-btn download">DOWNLOAD</button>
                                ) : (
                                    <button onClick={() => buyGame(game.url)} className="action-btn buy">BUY ON ITCH.IO ↗</button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}