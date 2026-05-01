import { Link } from "react-router-dom";
import useExternalStyle from "../hooks/useExternalStyle";
import lightImg from "../assets/images/logonew2.png";

export default function Home() {
    useExternalStyle('home.css');

    return (
        <>
        
        <div className="home-wrapper">
            <header>
            </header>

            <section className="hero-container">
                <div className="hero">
                    <div className="title">
                        <img src={lightImg} alt="" />
                        Making retro adventures with modern mechanics
                    </div>
                    <div className="action">
                        <Link to="/about">About</Link>
                        <Link to="/games">Games</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>
            </section>

            <footer>
                <div className="social-icons">
                    <a href="https://www.instagram.com/UnburiedPixels" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://github.com/LukzST" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://UnburiedPixels.itch.io" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-itch-io"></i>
                    </a>
                    <a href="https://youtube.com/@UnburiedPixels" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                </div>
                <p>© 2026 Unburied Pixels. All rights reserved.</p>
            </footer>
        </div>
        </>
    );
}