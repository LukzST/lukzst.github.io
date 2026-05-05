import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import insomniaLogo from "../../assets/images/i2.png";
import trailer1 from "../../assets/videos/trailer1.mp4";
import trailer2 from "../../assets/videos/trailer2.mp4";
import useExternalStyle from "../../hooks/useExternalStyle";

export default function GamesINSOMNIA() {
    useExternalStyle('insomnia.css');

    const [ downloadUrl, setDownloadUrl ] = useState('https://media.githubusercontent.com/media/LuxJson/INSOMNIA/refs/heads/main/files/0.0.2/insomnia_v002a_setup.exe')
    
     useEffect(() => {
        async function fetchLatestVersion() {
            try {
                const response = await fetch('https://github.com');
                const data = await response.json();

                if (Array.isArray(data)) {
                    const folders = data
                        .filter(item => item.type === 'dir')
                        .sort((a, b) => b.name.localeCompare(a.name, undefined, { numeric: true }));

                    if (folders.length > 0) {
                        const latestVersion = folders[0].name;
                        const fileVersion = latestVersion.replace(/\./g, ''); 
                        
                        const newUrl = `https://githubusercontent.com{latestVersion}/insomnia_v${fileVersion}a_setup.exe`;
                        setDownloadUrl(newUrl);
                    }
                }
            } catch (error) {
                console.error("Erro ao buscar versão recente:", error);
            }
        }

        fetchLatestVersion();
    }, []);

    const hoje = new Date();
    const dataStoryTrailer = new Date('2026-10-31T12:00:00-03:00');
    const mostrarStoryTrailer = hoje >= dataStoryTrailer;
    
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
                    <a href={downloadUrl} target="_blank" className="link-4" rel="noreferrer">
                        <div className="border2">Download Alpha</div>
                    </a>
                    <Link to="/games/insomnia/404.html" className="link">
                        <div className="border">Steam</div>
                    </Link>
                </div>

                <div className="trailer">
                    <h2>
                        Official Reveal Trailer - 01.05.2026
                    </h2>
                    <video controls width="50%">
                        <source src={trailer1} type="video/mp4" />
                        Seu navegador não suporta vídeos.
                    </video>
                    
                    {mostrarStoryTrailer && (
                        <>
                            <h2 style={{ marginTop: '2rem' }}>
                                Official Story Trailer - 31.10.2026
                            </h2>
                            <video controls width="50%">
                                <source src={trailer2} type="video/mp4" />
                                Seu navegador não suporta vídeos.
                            </video>
                        </>
                    )}

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