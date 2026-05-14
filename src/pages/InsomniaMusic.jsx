import useExternalStyle from "../hooks/useExternalStyle";
import insomniaLogo from "../assets/images/asasas.png";
import { Link } from "react-router-dom";
import dreamsAudio from "../assets/music/dreams.mp3";
import { useRef, useState } from "react";

export default function InsomniaMusic() {
    useExternalStyle("InsomniaMusic.css");

    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            setIsPlaying(true);
            audioRef.current.play();
        }
    };

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
                        <a href="https://spotify.com" target="_blank" className="item-m">
                            <i className="fa-brands fa-spotify" alt="Spotify"></i>
                        </a>
                    </div>
                    <div className="item-m">
                        <a href="https://youtu.be/qKbtRQFnQz8?si=LQhzkCMh_E_6ZctJ" target="_blank" className="item-m">
                            <i className="fa-brands fa-youtube" alt="Youtube"></i>
                        </a>
                    </div>
                    <div className="item-m">
                        <a href="https://music.youtube.com/watch?v=qKbtRQFnQz8" target="_blank" className="item-m">
                            <i className="fa-solid fa-music" alt="Youtube Music"></i>
                        </a>
                    </div>
                    <div className="item-m">
                        <a href="https://instagram.com/unburiedpixels" target="_blank" className="item-m">
                            <i className="fa-brands fa-instagram" alt="Instagram"></i>
                        </a>
                    </div>
                    <div className="item-m">
                        <a href="https://facebook.com" target="_blank" className="item-m">
                            <i className="fa-brands fa-facebook" alt="Facebook"></i>
                        </a>
                    </div>
                    <div className="item-m">
                        <a href="https://deezer.com" target="_blank" className="item-m">
                            <i className="fa-brands fa-deezer" alt="Deezer"></i>
                        </a>
                    </div>
                    <div className="item-m">
                        <a href="https://music.apple.com" target="_blank" className="item-m">
                            <i className="fab fa-itunes" alt="Apple Music"></i>
                        </a>
                    </div>
                </div>

                <div className="tracks-section">
                    <h2 className="tracks-title">TrackList</h2>
                    <div className="tracks-container">
                        <div className="track-glass-card">
                            <div className="track-info">
                                <button className="play-pause-btn" onClick={handlePlayPause}>
                                    <i className={`fa-${isPlaying ? "solid fa-pause" : "solid fa-play"}`}></i>
                                </button>
                                <p className="track-title">Dreams</p>
                            </div>
                        </div>
                    </div>
                </div>

                <audio 
                    ref={audioRef} 
                    src={dreamsAudio} 
                    style={{ display: 'none' }} 
                    onLoadedData={(e) => {
                        e.target.volume = 0.1;
                    }}
                />
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