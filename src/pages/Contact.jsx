import { Link } from "react-router-dom";
import useExternalStyle from "../hooks/useExternalStyle";

import iconLogo from "../assets/images/icon.png";

export default function Contact() {
    useExternalStyle('contact.css');

    return (
        <>

        <title>Contact - Unburied Pixels</title>

        <div className="contact-page-wrapper">
            <header>
                <Link to="/">
                    <img src={iconLogo} alt="Unburied Pixels" />
                </Link>
            </header>

            <main className="contact-container">
                <div className="page-title">
                    <h1>Contact</h1>
                </div>

                <div className="contact-links">
                    <a href="mailto:contatosadberry@gmail.com" className="contact-row">
                        <div className="contact-icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="contact-info">
                            <h3>Email</h3>
                            <p>contatosadberry@gmail.com</p>
                        </div>
                        <div className="contact-arrow">
                            <i className="fas fa-arrow-right"></i>
                        </div>
                    </a>

                    <a href="https://www.instagram.com/UnburiedPixels" target="_blank" rel="noreferrer" className="contact-row">
                        <div className="contact-icon">
                            <i className="fab fa-instagram"></i>
                        </div>
                        <div className="contact-info">
                            <h3>Instagram</h3>
                            <p>@UnburiedPixels</p>
                        </div>
                        <div className="contact-arrow">
                            <i className="fas fa-arrow-right"></i>
                        </div>
                    </a>

                    <a href="https://github.com/LukzST" target="_blank" rel="noreferrer" className="contact-row">
                        <div className="contact-icon">
                            <i className="fab fa-github"></i>
                        </div>
                        <div className="contact-info">
                            <h3>GitHub</h3>
                            <p>/LukzST</p>
                        </div>
                        <div className="contact-arrow">
                            <i className="fas fa-arrow-right"></i>
                        </div>
                    </a>

                    <a href="https://UnburiedPixels.itch.io/" target="_blank" rel="noreferrer" className="contact-row">
                        <div className="contact-icon">
                            <i className="fab fa-itch-io"></i>
                        </div>
                        <div className="contact-info">
                            <h3>Itch.io</h3>
                            <p>UnburiedPixels.itch.io</p>
                        </div>
                        <div className="contact-arrow">
                            <i className="fas fa-arrow-right"></i>
                        </div>
                    </a>
                </div>
            </main>

            <footer>
                <div className="social-icons">
                    <a href="https://www.instagram.com/UnburiedPixels" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://github.com/LukzST" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </div>
                <p>© 2026 Unburied Pixels. All rights reserved.</p>
            </footer>
        </div>
        </>
    );
}