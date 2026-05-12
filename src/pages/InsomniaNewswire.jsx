import { Link } from "react-router-dom"
import useExternalStyle from "../hooks/useExternalStyle"
import insomniaLogo from "../assets/images/i2.png";
import { useState, useEffect } from "react";

export default function InsomniaNewswire() {

    const [hoje, setHoje] = useState(new Date());
    const dataStoryTrailer = new Date('2026-10-31T12:00:00-03:00');
    const dataLaunch = new Date('2027-12-25T12:00:00-03:00');
    const mostrarStoryTrailer = hoje >= dataStoryTrailer;
    const mostrarLaunch = hoje >= dataLaunch;

    const [downloadUrl, setDownloadUrl] = useState('https://github.com/luxjson/INSOMNIA/releases/latest');
    
        useEffect(() => {
        async function fetchLatestVersion() {
            try {
                const response = await fetch('https://api.github.com/repos/luxjson/INSOMNIA/releases/latest');
                const data = await response.json();
                
                if (data && data.assets && data.assets.length > 0) {
                    const exeAsset = data.assets.find(asset => asset.name.endsWith('.exe'));
                    if (exeAsset) {
                        setDownloadUrl(exeAsset.browser_download_url);
                    }
                }


                const timeResponse = await fetch('https://worldtimeapi.org');
                const timeData = await timeResponse.json();
                if (timeData.datetime) {
                    setHoje(new Date(timeData.datetime));
                }
            } catch (error) {
                console.error(error);
                setDownloadUrl('https://github.com/luxjson/INSOMNIA/releases/latest');
            }
        }
        fetchLatestVersion();
    }, []);
    useExternalStyle('InsomniaNewswire.css')

    return (
        <>
            <header>
                <Link to="/games/insomnia" className="header">
                    <img className="img" src={insomniaLogo} alt="Unburied Pixels" />
                </Link>
            </header>


            <main>
                    <p>Discover the latest news and updates for INSOMNIA</p>


                    {!mostrarStoryTrailer && !mostrarLaunch && (
                        <>
                        <div className="action">
                            <a href="https://UnburiedPixels.itch.io/insomnia" target="_blank" className="link" rel="noreferrer">
                                <div className="border">itch.io</div>
                            </a>
                            <a href={downloadUrl} target="_blank" className="link-4" rel="noreferrer">
                                <div className="border2">Download Alpha</div>
                            </a>
                            <Link to="/games/insomnia" className="link-4">
                                <div className="border2">Back to Home</div>
                            </Link>
                        </div>
                        </>    
                    )}
                    
                    {mostrarLaunch && mostrarStoryTrailer && (
                    <div className="action">
                        <a href="https://UnburiedPixels.itch.io/insomnia" target="_blank" className="link" rel="noreferrer">
                            <div className="border">itch.io</div>
                        </a>
                        <Link to="/games/insomnia/download" className="link-4" rel="noreferrer">
                            <div className="border2">Download</div>
                        </Link>
                        <a href="https://github.com/luxjson/INSOMNIA/releases/latest" target="_blank" className="link-4" rel="noreferrer">
                            <div className="border2">View Changelog</div>
                        </a>
                    </div>

                    )}


                    <div className="post">
                        <div className="border3">
                            <div className="top">
                                <div className="title">
                                    Watch the Official Reveal Trailer for INSOMNIA
                                </div>
                                <div className="date">
                                    01/05/2026
                                </div>
                            </div>
                                <div className="content">
                                    <div className="text">
                                        In a world where the clock never moves, silence is your only companion. Watch the official trailer for INSOMNIA and prepare to uncover the secrets of endless time.
                                    </div>
                                    <div className="links">
                                        <a href="https://www.youtube.com/watch?v=Gngwa0oHbiM">
                                            Watch Trailer on YouTube
                                        </a>
                                    </div>
                                </div>
                        </div>
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