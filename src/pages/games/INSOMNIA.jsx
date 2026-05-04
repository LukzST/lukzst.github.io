import { Link } from "react-router-dom";
import insomniaLogo from "../../assets/images/i2.png";
import insomniaTrailer from "../../assets/videos/INSOMNIA - Official Reveal Trailer.mp4";
import useExternalStyle from "../../hooks/useExternalStyle";

export default function GamesINSOMNIA() {
    useExternalStyle('insomnia.css');
    
    return (
        <>

            <title>INSOMNIA</title>

            <header>
                <Link to="/" className="header">
                    <img className="img" src={insomniaLogo} alt="Unburied Pixels" />
                </Link>
            </header>

            <main>
                <p>Coming Soon</p>

                <div className="action">
                    <a href="https://UnburiedPixels.itch.io/insomnia" target="_blank" className="link" rel="noreferrer">
                        <div className="border">itch.io</div>
                    </a>
                    <a href="https://media.githubusercontent.com/media/LukzST/INSOMNIA/refs/heads/main/files/0.0.2/insomnia_v002a_setup.exe" target="_blank" className="link-4" rel="noreferrer">
                        <div className="border2">Download Alpha</div>
                    </a>
                    <Link to="/games/insomnia/404.html" className="link">
                        <div className="border">Steam</div>
                    </Link>
                </div>

                <div className="trailer">
                    <video controls width="50%">
                        <source src={insomniaTrailer} type="video/mp4" />
                        Seu navegador não suporta vídeos.
                    </video>
                </div>
            </main>

            <footer>
                <Link to="/games" className="link-2">
                    <p>Back to games page</p>
                </Link>
                <p className="copy">
                    © 2026 Unburied Pixels. All rights reserved.
                </p>
            </footer>
        </>
    );
}