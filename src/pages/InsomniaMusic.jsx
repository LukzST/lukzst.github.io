import useExternalStyle from "../hooks/useExternalStyle";
import insomniaLogo from "../assets/images/asasas.png";
import { Link } from "react-router-dom";
import dreams from "../assets/videos/dreams.mp4";

export default function InsomniaMusic() {
    useExternalStyle("InsomniaMusic.css");

    return (
        <>
            <header>
                <Link to="/games/insomnia" className="header">
                    <img className="img" src={insomniaLogo} alt="Unburied Pixels" />
                </Link>
            </header>

            <main>
                <p className="titles">
                    Streaming on
                </p>

                <div className="marcas">
                    <div className="item-m">
                        <a href="https://spotify.com" className="item-m">
                            <i className="fa-brands fa-spotify" alt="Spotify"></i>
                        </a>
                    </div>
                    <div className="item-m">
                        <a href="https://youtube.com" className="item-m">
                            <i className="fa-brands fa-youtube" alt="Youtube"></i>
                        </a>
                    </div>
                    <div className="item-m">
                        <a href="https://music.youtube.com" className="item-m">
                            <i class="fa-solid fa-music" alt="Youtube Music"></i>
                        </a>
                    </div>
                    <div className="item-m">
                        <a href="https://instagram.com" className="item-m">
                            <i className="fa-brands fa-instagram" alt="Instagram"></i>
                        </a>
                    </div>
                    <div className="item-m">
                        <a href="https://facebook.com" className="item-m">
                            <i className="fa-brands fa-facebook" alt="Facebook"></i>
                        </a>
                    </div>
                    <div className="item-m">
                        <a href="https://deezer.com" className="item-m">
                            <i className="fa-brands fa-deezer" alt="Deezer"></i>
                        </a>
                    </div>
                    <div className="item-m">
                        <a href="https://music.apple.com" className="item-m">
                            <i class="fab fa-itunes" alt="Apple Music"></i>
                        </a>
                    </div>
                </div>

                <div className="trailer">
                    <h2 className="titles">
                        Tracks
                    </h2>
                        <video controls width="50%">
                            <source src={dreams} type="video/mp4" />
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
    )
}