import useExternalStyle from "../hooks/useExternalStyle"
import { useState, useEffect } from "react";

export default function Loader() {
    useExternalStyle('loader.css');
    const [loading, setLoading] = useState(true);

    const [pixelsData] = useState(() => {
        const colors = ["#39FF14", "#001CFF", "#FF00FF", "#FF9900", "#FF0000", "#ffffff"];
        return [...Array(25)].map(() => ({
            color: colors[Math.floor(Math.random() * colors.length)],
            delay: (Math.random() * 1.5).toFixed(2) + "s"
        }));
    });

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3000);
        return () => clearTimeout(timer);
    }, []);
    
    return (
        <>
            {loading && (
            <div className="ubp-intro-loader">
                <div className="loader-grid">
                    {pixelsData.map((pixel, i) => (
                    <div 
                        key={i} 
                        className="loader-pixel" 
                        style={{ 
                            backgroundColor: pixel.color, 
                            animationDelay: pixel.delay 
                        }} 
                    />
                ))}
                </div>
            </div>
        )}
        
        <div className={`home-content ${!loading ? 'fade-in-site' : ''}`}>
        </div>
        </>
    )
}