import React from "react";
import { Link } from "react-router-dom";
import useExternalStyle from "../hooks/useExternalStyle";

export default function Login() {
    useExternalStyle('login.css');

    const handleLogin = () => {
        // O link exato que você configurou no Itch.io
        window.location.href = "https://itch.io/user/oauth?client_id=ccb6dd3304b379c7f65a92839bd0371f&scope=profile%3Ame&response_type=token&redirect_uri=https%3A%2F%2Fluxjson.github.io%2F%23%2Fprofile";
    };

    return (
        <div className="login-viewport">
            <nav className="ubp-nav">
                <div className="nav-container">
                    <Link to="/" className="brand">UNBURIED PIXELS_</Link>
                </div>
            </nav>

            <main className="login-grid">
                <section className="login-title-cell">
                    <h1 className="massive-title">USER</h1>
                    <h1 className="massive-title outline">ENTRY_</h1>
                </section>

                <section className="login-form-cell">
                    <div className="login-box">
                        <span className="login-tags">SYSTEM // AUTH_REQUIRED</span>
                        <h2 className="login-heading">CONNECT YOUR ACCOUNT TO ACCESS THE VAULT.</h2>
                        
                        <button onClick={handleLogin} className="itch-auth-btn">
                            <i className="fab fa-itch-io"></i> AUTHORIZE VIA ITCH.IO
                        </button>

                        <p className="login-footer-info">Secure OAuth2 handshake via itch.io</p>
                    </div>
                </section>
            </main>
        </div>
    );
}