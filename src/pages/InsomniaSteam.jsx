import { Link } from "react-router-dom";
import insomniaLogo from "../assets/images/i2.png";
import useExternalStyle from "../hooks/useExternalStyle";

export default function InsomniaSteam() {
    useExternalStyle('InsomniaSteam.css');

    return (
        <>
            <header>
                <Link to="/games/insomnia" className="header">
                    <img className="img" src={insomniaLogo} alt="Unburied Pixels" />
                </Link>
            </header>

            <main>
                <p style={{ marginTop: '20px', fontSize: '1.5rem' }}>
                    STEAM PRE-ORDER
                </p>
                
                <div className="message-box">
                    <h2>Currently not available on Steam</h2>
                    <p>
                        We're working hard to bring INSOMNIA to Steam as soon as possible.
                        Stay tuned for updates!
                    </p>
                </div>

                <div className="action-buttons">
                    <a 
                        href="https://www.instagram.com/unburiedpixels"
                        target="_blank"
                        className="link"
                        rel="noreferrer"
                    >
                        <div className="border">Instagram</div>
                    </a>
                    
                    <a 
                        href="https://unburiedpixels.itch.io/insomnia"
                        target="_blank"
                        className="link-4"
                        rel="noreferrer"
                    >
                        <div className="border2">Leave a comment on itch.io</div>
                    </a>
                </div>

                <div className="updates-section">
                    <h3>Future Updates</h3>
                    <div className="update-list">
                        <p>Steam page coming soon</p>
                        <p>Wishlist will be available</p>
                        <p>Steam achievements planned</p>
                        <p>Community hub in development</p>
                    </div>
                </div>
            </main>

            <footer>
                <Link to="/games/insomnia/preorder" className="link-2">
                    <p>Back to Pre-Order page</p>
                </Link>
                <p className="copy">
                    © 2026 Unburied Pixels. All rights reserved.
                </p>
            </footer>
        </>
    );
}