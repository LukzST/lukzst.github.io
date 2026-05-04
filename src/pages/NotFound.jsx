import { Link } from "react-router-dom";
import useExternalStyle from "../hooks/useExternalStyle";

export default function NotFound() {
    useExternalStyle('notfound.css');

    return (
        <div className="home-wrapper">
            <header className="pixel-header">
            </header>

            <section className="error-container">

                <div className="error-content">
                    <div className="error-code">404</div>
                    <div className="error-glitch">PAGE NOT FOUND</div>
                    
                    <div className="error-pixel">
                        <span className="pixel-block">■</span>
                        <span className="pixel-block">■</span>
                        <span className="pixel-block">■</span>
                        <span className="pixel-block">■</span>
                    </div>

                    <div className="error-message">
                        The page you're looking for has been consumed by the Fade.<br />
                        Maybe it never existed. Or maybe it's waiting in the darkness.
                    </div>

                    <div className="action">
                        <Link to="/" className="pixel-btn">RETURN TO LIGHT</Link>
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
                    <a href="https://github.com/LuxJson" target="_blank" rel="noreferrer" className="social-link">
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