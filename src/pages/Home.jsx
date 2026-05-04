import { Link } from "react-router-dom";
import useExternalStyle from "../hooks/useExternalStyle";
import iconLogo from "../assets/images/logonew2.png";
import { useState } from "react";

export default function Home() {
    useExternalStyle('home.css');
    const [showTerminal, setShowTerminal] = useState(false);
    const [command, setCommand] = useState("");
    const [output, setOutput] = useState(["Unburied Pixels Terminal v1.0", "Type 'help' for commands", ""]);

    const executeCommand = (cmd) => {
    const lowerCmd = cmd.toLowerCase().trim();
    
    if (lowerCmd !== "clear") {
        setOutput([]);
    }
    
    let newOutput = [`> ${cmd}`];

    switch(lowerCmd) {
        case "help":
            newOutput.push("");
            newOutput.push("=== UNBURIED PIXELS TERMINAL COMMANDS ===");
            newOutput.push("");
            newOutput.push("  latest   - Latest game release");
            newOutput.push("  studio   - Who we are");
            newOutput.push("  social   - Our social media links");
            newOutput.push("  next     - Upcoming projects");
            newOutput.push("  stats    - Studio statistics");
            newOutput.push("  clear    - Clear terminal");
            newOutput.push("  exit     - Close terminal");
            newOutput.push("  help     - Show this message");
            newOutput.push("");
            break;
        
        case "latest":
            newOutput.push("");
            newOutput.push("=== LATEST GAME RELEASE ===");
            newOutput.push("");
            newOutput.push("TITLE: LIGHT");
            newOutput.push("GENRE: Action · Survival · Narrative");
            newOutput.push("STATUS: AVAILABLE NOW");
            newOutput.push("PLATFORM: PC / Itch.io");
            newOutput.push("");
            newOutput.push("DESCRIPTION:");
            newOutput.push("You are Operator 07, the last sentinel in an isolated");
            newOutput.push("relay bunker. Fight against the Fade to keep the");
            newOutput.push("generator alive, uncover corporate secrets, and");
            newOutput.push("decide the fate of a fading reality.");
            newOutput.push("");
            newOutput.push("LINKS:");
            newOutput.push("Play Now: https://UnburiedPixels.itch.io/light");
            newOutput.push("");
            break;
        
        case "studio":
            newOutput.push("");
            newOutput.push("=== WHO WE ARE ===");
            newOutput.push("");
            newOutput.push("UNBURIED PIXELS");
            newOutput.push("Independent game studio founded in 2024");
            newOutput.push("");
            newOutput.push("MISSION:");
            newOutput.push("Creating retro experiences with modern mechanics.");
            newOutput.push("Pixel art is timeless.");
            newOutput.push("");
            newOutput.push("TEAM:");
            newOutput.push("  Lucas Eduardo   - Game Designer / Programmer");
            newOutput.push("  Isabella Sanches - Sound Designer");
            newOutput.push("  Luiz Otávio     - Beta Tester / QA");
            newOutput.push("");
            newOutput.push("VALUES:");
            newOutput.push("  Simplicity · Intentionality · Nostalgia");
            newOutput.push("");
            break;
        
        case "social":
            newOutput.push("");
            newOutput.push("=== SOCIAL MEDIA LINKS ===");
            newOutput.push("");
            newOutput.push("INSTAGRAM:");
            newOutput.push("  https://instagram.com/UnburiedPixels");
            newOutput.push("");
            newOutput.push("TWITTER/X:");
            newOutput.push("  https://twitter.com/UnburiedPixels");
            newOutput.push("");
            newOutput.push("GITHUB:");
            newOutput.push("  https://github.com/LuxJson");
            newOutput.push("");
            newOutput.push("ITCH.IO:");
            newOutput.push("  https://UnburiedPixels.itch.io");
            newOutput.push("");
            newOutput.push("YOUTUBE:");
            newOutput.push("  https://youtube.com/@UnburiedPixels");
            newOutput.push("");
            break;
        
        case "next":
            newOutput.push("");
            newOutput.push("=== UPCOMING PROJECTS ===");
            newOutput.push("");
            newOutput.push("INSOMNIA");
            newOutput.push("  Genre: Narrative");
            newOutput.push("  Status: Coming Soon");
            newOutput.push("  Description: In a world where the clock never moves,");
            newOutput.push("  silence is your only companion.");
            newOutput.push("");
            newOutput.push("More info coming soon...");
            newOutput.push("");
            break;
        
        case "stats":
            newOutput.push("");
            newOutput.push("=== STUDIO STATISTICS ===");
            newOutput.push("");
            newOutput.push("Games Released: 1");
            newOutput.push("Games in Development: 2");
            newOutput.push("Team Members: 3");
            newOutput.push("Years Active: 2");
            newOutput.push("Lines of Code: ~15,000");
            newOutput.push("Coffee Consumed: ∞");
            newOutput.push("");
            break;
        
        case "clear":
            setOutput([]);
            return;
        
        case "exit":
            setShowTerminal(false);
            return;
        
        default:
            newOutput.push("");
            newOutput.push(`Command not found: ${cmd}`);
            newOutput.push("Type 'help' to see available commands");
            newOutput.push("");
    }
    
    setOutput([...newOutput, ""]);
    setCommand("");
};

    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            executeCommand(command);
        }
    };

    return (
        <div className="home-wrapper">
            <header className="pixel-header">
 
            </header>

            <section className="hero-container">
                <div className="hero">
                    <div className="title">
                        <img src={iconLogo} className="img" alt="" />
                        <p className="tagline">
                            MAKING RETRO ADVENTURES WITH MODERN MECHANICS
                        </p>
                    </div>
                    <div className="action">
                        <Link to="/about" className="pixel-btn">ABOUT</Link>
                        <Link to="/games" className="pixel-btn">GAMES</Link>
                        <Link to="/contact" className="pixel-btn">CONTACT</Link>
                    </div>
                </div>
            </section>

            <button className="terminal-btn" onClick={() => setShowTerminal(true)}>
                <i class="fa-solid fa-terminal"></i>
            </button>

            {showTerminal && (
                <div className="terminal-overlay" onClick={() => setShowTerminal(false)}>
                    <div className="terminal" onClick={(e) => e.stopPropagation()}>
                        <div className="terminal-header">
                            <span>UNBURIED PIXELS TERMINAL</span>
                            <button className="terminal-close" onClick={() => setShowTerminal(false)}>×</button>
                        </div>
                        <div className="terminal-output">
                            {output.map((line, i) => (
                                <div key={i} className="terminal-line">{line}</div>
                            ))}
                        </div>
                        <div className="terminal-input-line">
                            <span className="terminal-prompt">{"> "}</span>
                            <input
                                type="text"
                                className="terminal-input"
                                value={command}
                                onChange={(e) => setCommand(e.target.value)}
                                onKeyPress={handleKeyPress}
                                autoFocus
                            />
                        </div>
                    </div>
                </div>
            )}

            <footer className="pixel-footer">
                <div className="social-icons">
                    <a href="https://www.instagram.com/UnburiedPixels" target="_blank" rel="noreferrer" className="social-link">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://twitter.com/UnburiedPixels" target="_blank" rel="noreferrer" className="social-link">
                        <i className="fab fa-x-twitter"></i>
                    </a>
                    <a href="https://github.com/LuxJson" target="_blank" rel="noreferrer" className="social-link">
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