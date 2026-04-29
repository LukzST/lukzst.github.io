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

                    <a href="https://www.instagram.com/UndPixelGames" target="_blank" rel="noreferrer" className="contact-row">
                        <div className="contact-icon">
                            <i className="fab fa-instagram"></i>
                        </div>
                        <div className="contact-info">
                            <h3>Instagram</h3>
                            <p>@UndPixelGames</p>
                        </div>
                        <div className="contact-arrow">
                            <i className="fas fa-arrow-right"></i>
                        </div>
                    </a>

                    <a href="https://bsky.app/profile/lukzst.github.io" target="_blank" rel="noreferrer" className="contact-row">
                        <div className="contact-icon">
                            <svg width="28" height="28" viewBox="0 0 600 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z" fill="#a2ba28"/>
                            </svg>
                        </div>
                        <div className="contact-info">
                            <h3>Bluesky</h3>
                            <p>@lukzst.github.io</p>
                        </div>
                        <div className="contact-arrow">
                            <i className="fas fa-arrow-right"></i>
                        </div>
                    </a>

                    <a href="https://github.com/UndeadPixelGames" target="_blank" rel="noreferrer" className="contact-row">
                        <div className="contact-icon">
                            <i className="fab fa-github"></i>
                        </div>
                        <div className="contact-info">
                            <h3>GitHub</h3>
                            <p>/UndeadPixelGames</p>
                        </div>
                        <div className="contact-arrow">
                            <i className="fas fa-arrow-right"></i>
                        </div>
                    </a>

                    <a href="https://undpixelgames.itch.io/" target="_blank" rel="noreferrer" className="contact-row">
                        <div className="contact-icon">
                            <i className="fab fa-itch-io"></i>
                        </div>
                        <div className="contact-info">
                            <h3>Itch.io</h3>
                            <p>undpixelgames.itch.io</p>
                        </div>
                        <div className="contact-arrow">
                            <i className="fas fa-arrow-right"></i>
                        </div>
                    </a>
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
                <p>© 2026 Unburied Pixels. All rights reserved.</p>
            </footer>
        </div>
        </>
    );
}