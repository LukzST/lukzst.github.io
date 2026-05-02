import { Link } from "react-router-dom";
import useExternalStyle from "../hooks/useExternalStyle";
import iconLogo from "../assets/images/logonew2.png";

export default function Contact() {
    useExternalStyle('contact.css');

    return (
        <div className="home-wrapper">
            <header className="pixel-header">
 
            </header>

            <section className="contact-container">
                <div className="title">
                    <Link to={'/'}>
                        <img src={iconLogo} className="img" alt="" />
                    </Link>
                    <p className="tagline">
                        GET IN TOUCH
                    </p>
                </div>

                <div className="contact-links">
                    <a href="mailto:contatosadberry@gmail.com" className="contact-row">
                        <div className="contact-icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="contact-info">
                            <h3>EMAIL</h3>
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
                            <h3>INSTAGRAM</h3>
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
                            <h3>GITHUB</h3>
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
                            <h3>ITCH.IO</h3>
                            <p>UnburiedPixels.itch.io</p>
                        </div>
                        <div className="contact-arrow">
                            <i className="fas fa-arrow-right"></i>
                        </div>
                    </a>
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
                <p>© 2026 Unburied Pixels. All rights reserved.</p>
            </footer>
        </div>
    );
}