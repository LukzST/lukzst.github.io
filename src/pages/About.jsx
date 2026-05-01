import { Link } from "react-router-dom";
import useExternalStyle from "../hooks/useExternalStyle";
import iconLogo from "../assets/images/logonew.png";

export default function About() {
    useExternalStyle('about.css');

    return (
        <>

        <title>About - Unburied Pixels</title>

            <div className="about-page-wrapper">
                <header>
                    <Link to="/">
                        <img src={iconLogo} alt="Unburied Pixels" />
                    </Link>
                </header>

                <main className="about-container">
                    <div className="page-title">
                        <h1>About</h1>
                    </div>

                    <div className="studio-mission">
                        <h2>Our Mission</h2>
                        <p>
                            Unburied Pixels is an independent game studio dedicated to creating 
                            experiences that blend retro aesthetics with modern gameplay mechanics. 
                            We believe that great games don't need millions of dollars — just passion, 
                            creativity, and a relentless drive to push pixels.
                        </p>
                    </div>

                    <div className="team-list">
                        <h2>The Team</h2>
                        
                        <div className="team-row">
                            <div className="team-icon">
                                <i className="fas fa-gamepad"></i>
                            </div>
                            <div className="team-info">
                                <h3>Lucas Eduardo</h3>
                                <div className="team-role">Game Designer · Programmer · Creator</div>
                                <p className="team-bio">Programmer, Creator and Game Designer behind LIGHT.</p>
                            </div>
                        </div>

                        <div className="team-row">
                            <div className="team-icon">
                                <i className="fas fa-headphones"></i>
                            </div>
                            <div className="team-info">
                                <h3>Isabella Sanches</h3>
                                <div className="team-role">Sound Designer</div>
                                <p className="team-bio">Sound Design and Music Composition.</p>
                            </div>
                        </div>

                        <div className="team-row">
                            <div className="team-icon">
                                <i className="fas fa-vial"></i>
                            </div>
                            <div className="team-info">
                                <h3>Luiz Otávio</h3>
                                <div className="team-role">Beta Tester</div>
                                <p className="team-bio">Quality Assurance and Beta Testing.</p>
                            </div>
                        </div>
                    </div>

                    <div className="thanks-section">
                        <h2>Special Thanks</h2>
                        <div className="thanks-row">
                            <div className="thanks-icon">
                                <i className="fas fa-heart"></i>
                            </div>
                            <div className="thanks-info">
                                <h3>Hagrajag (ROSE)</h3>
                                <div className="thanks-role">Special Thanks & Support</div>
                            </div>
                        </div>
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