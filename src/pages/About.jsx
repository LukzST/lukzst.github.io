import { Link } from "react-router-dom";
import useExternalStyle from "../hooks/useExternalStyle";
import iconLogo from "../assets/images/logonew2.png";

export default function About() {
    useExternalStyle('about.css');

    return (
        <div className="home-wrapper">
            <header className="pixel-header">
 
            </header>

            <section className="about-container">
                <div className="title">
                    <Link to={'/'}>
                        <img src={iconLogo} className="img" alt="" />
                    </Link>
                    <p className="tagline">
                        ABOUT UNBURIED PIXELS
                    </p>
                </div>

                <div className="studio-mission">
                    <p className="mission-text">
                        Unburied Pixels is an independent game studio dedicated to creating 
                        experiences that blend retro aesthetics with modern gameplay mechanics. 
                        We believe that great games don't need millions of dollars — just passion, 
                        creativity, and a relentless drive to push pixels.
                    </p>
                </div>

                <div className="team-section">
                    <h2 className="section-title">THE TEAM</h2>
                    
                    <div className="team-card">
                        <div className="team-icon">
                            <i className="fas fa-gamepad"></i>
                        </div>
                        <div className="team-info">
                            <h3>LUCAS EDUARDO</h3>
                            <p className="team-role">GAME DESIGNER · PROGRAMMER · CREATOR</p>
                            <p className="team-bio">Programmer, Creator and Game Designer behind LIGHT.</p>
                        </div>
                    </div>

                    <div className="team-card">
                        <div className="team-icon">
                            <i className="fas fa-headphones"></i>
                        </div>
                        <div className="team-info">
                            <h3>ISABELLA SANCHES</h3>
                            <p className="team-role">SOUND DESIGNER</p>
                            <p className="team-bio">Sound Design and Music Composition.</p>
                        </div>
                    </div>

                    <div className="team-card">
                        <div className="team-icon">
                            <i className="fas fa-vial"></i>
                        </div>
                        <div className="team-info">
                            <h3>LUIZ OTÁVIO</h3>
                            <p className="team-role">BETA TESTER</p>
                            <p className="team-bio">Quality Assurance and Beta Testing.</p>
                        </div>
                    </div>
                </div>

                <div className="thanks-section">
                    <h2 className="section-title">SPECIAL THANKS</h2>
                    <div className="team-card">
                        <div className="team-icon">
                            <i className="fas fa-heart"></i>
                        </div>
                        <div className="team-info">
                            <h3>HAGRAJAG (ROSE)</h3>
                            <p className="team-role">SPECIAL THANKS & SUPPORT</p>
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
                <p>© 2026 Unburied Pixels. All rights reserved.</p>
            </footer>
        </div>
    );
}