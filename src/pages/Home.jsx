import { Link } from "react-router-dom";
import useExternalStyle from "../hooks/useExternalStyle";
import iconLogo from "../assets/images/logonew2.png";

export default function Home() {
    useExternalStyle('home.css');

    return (
        <div className="home-wrapper">
            <header className="pixel-header">
 
            </header>

            <section className="hero-container">
                <div className="hero">
                    <div className="title">
                        <img src={iconLogo} className="img" alt="" />
                        <p className="tagline">
                            MAKING RETRO ADVENTURES WITH MODERN MECHANICS
                        </p>
                    </div>
                    <div className="action">
                        <Link to="/about" className="pixel-btn">ABOUT</Link>
                        <Link to="/games" className="pixel-btn">GAMES</Link>
                        <Link to="/contact" className="pixel-btn">CONTACT</Link>
                    </div>
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
                <p>© 2026 Unburied Pixels. All rights reserved.</p>
            </footer>
        </div>
    );
}