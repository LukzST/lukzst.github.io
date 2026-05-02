import { Link } from "react-router-dom";
import useExternalStyle from "../hooks/useExternalStyle";
import iconLogo from "../assets/images/logonew2.png";

export default function Games() {
    useExternalStyle('games.css');

    return (
        <div className="home-wrapper">
            <header className="pixel-header">
 
            </header>

            <section className="games-container">
                <div className="title">
                    <img src={iconLogo} className="img" alt="" />
                    <p className="tagline">
                        OUR GAMES
                    </p>
                </div>

                <div className="games-grid">
                    <div className="game-card">
                        <div className="game-img-3"></div>
                        <div className="game-info">
                            <h2>INSOMNIA</h2>
                            <span className="game-genre">NARRATIVE</span>
                            <p className="game-description">
                                In a world where the clock never moves, silence is your only companion.
                            </p>
                            <div className="game-features">
                                <span className="feature">5 HOURS</span>
                                <span className="feature">MULTIPLE ENDINGS</span>
                                <span className="feature">OMORI STYLE</span>
                            </div>
                            <Link to="/games/insomnia" className="game-btn">
                                COMING SOON
                            </Link>
                        </div>
                    </div>

                    <div className="game-card">
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
                                <span className="feature">ATMOSPHERIC</span>
                                <span className="feature">STORY-RICH</span>
                                <span className="feature">CORPORATE MYSTERY</span>
                            </div>
                            <a href="https://UnburiedPixels.itch.io/light" target="_blank" rel="noreferrer" className="game-btn">
                                AVAILABLE NOW
                            </a>
                        </div>
                    </div>
                </div>

                <div className="action">
                    <Link to="/" className="pixel-btn">BACK TO HOME</Link>
                </div>
            </section>

            <footer className="pixel-footer">
                <div className="social-icons">
                    <a href="https://www.instagram.com/UnburiedPixels" target="_blank" rel="noreferrer" className="social-link">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://twitter.com/UnburiedPixels" target="_blank" rel="noreferrer" className="social-link">
                        <i className="fab fa-x-twitter"></i>
                    </a>
                    <a href="https://github.com/LukzST" target="_blank" rel="noreferrer" className="social-link">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://UnburiedPixels.itch.io" target="_blank" rel="noreferrer" className="social-link">
                        <i className="fab fa-itch-io"></i>
                    </a>
                    <a href="https://youtube.com/@UnburiedPixels" target="_blank" rel="noreferrer" className="social-link">
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>
                <p>© 2026 UNBURIED PIXELS. ALL RIGHTS RESERVED.</p>
            </footer>
        </div>
    );
}