import { Link } from "react-router-dom";
import useExternalStyle from "../hooks/useExternalStyle";

export default function NotFound() {
    useExternalStyle('insomnia2.css');

    return (
        <div className="error-page-wrapper">
            <title>Page Not Found</title>

            <div className="error-container">
                <div className="error-content">
                    <div className="error-code">404</div>
                    <div className="error-glitch">PAGE NOT FOUND</div>
                    
                    <div className="error-pixel">
                        <div className="pixel"></div>
                        <div className="pixel"></div>
                        <div className="pixel"></div>
                        <div className="pixel"></div>
                    </div>

                    <div className="error-message">
                        The page you're looking for has been consumed by the Fade.<br />
                        Maybe it never existed. Or maybe it's waiting in the darkness.
                    </div>

                    <div className="action">
                        <Link to="/" className="error-btn">Return to Light</Link>
                    </div>
                </div>
            </div>

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
    );
}