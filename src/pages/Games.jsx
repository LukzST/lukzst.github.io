import { Link } from "react-router-dom";
import useExternalStyle from "../hooks/useExternalStyle";
import iconLogo from "../assets/images/icon.png";

export default function Games() {
    useExternalStyle('games.css');

    return (
        <>

        <title>Games - Undead Pixel Games</title>

        <div className="games-page-wrapper">
            <header>
                <Link to="/">
                    <img src={iconLogo} alt="Undead Pixel Games" />
                </Link>
            </header>
            
            <main className="games-container">
                <div className="page-title">
                    <h1>Our Games</h1>
                </div>
                
                <div className="games-grid">
                    <div className="game-card insomnia">
                        <div className="game-img-3"></div>
                        <div className="game-info">
                            <h2>Insomnia</h2>
                            <span className="game-genre">NARRATIVE</span>
                            <p className="game-description">
                                In a world where the clock never moves, silence is your only companion.
                            </p>
                            <div className="game-features">
                                <span className="feature">5 hours</span>
                                <span className="feature">multiple endings</span>
                                <span className="feature">omori style</span>
                            </div>
                            <Link to="/games/insomnia" className="game-btn" style={{ marginTop: '15px' }}>
                                COMING SOON
                            </Link>
                        </div>
                    </div>
                    <div className="game-card light">
                        <div className="game-img-1"></div>
                        <div className="game-info">
                            <h2>LIGHT</h2>
                            <span className="game-genre">ACTION · SURVIVAL · NARRATIVE</span>
                            <p className="game-description">
                                You are Operator 07, the last sentinel in an isolated relay bunker. 
                                Fight against the Fade to keep the generator alive, uncover corporate secrets, 
                                and decide the fate of a fading reality.
                            </p>
                            <div className="game-features">
                                <span className="feature">atmospheric</span>
                                <span className="feature">story-rich</span>
                                <span className="feature">corporate mystery</span>
                            </div>
                            <a href="https://undpixelgames.itch.io/light" target="_blank" rel="noreferrer" className="game-btn">
                                AVAILABLE NOW
                            </a>
                        </div>
                    </div>
                </div>
            </main>

            <footer>
                <div className="social-icons">
                    <a href="https://www.instagram.com/UndPixelGames" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://x.com/UndPixelStudio" target="_blank" rel="noreferrer" className="social-icon">
                        <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="https://github.com/UndeadPixelGames" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </div>
                <p>© 2026 Undead Pixel Games. All rights reserved.</p>
            </footer>
        </div>
        </>
    );
}