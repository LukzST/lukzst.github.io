import React from "react";
import { Link } from "react-router-dom";
import useExternalStyle from "../hooks/useExternalStyle";

export default function Login() {
    useExternalStyle('login.css');

    const CLIENT_ID = "ccb6dd3304b379c7f65a92839bd0371f";
    const REDIRECT_URI = window.location.origin + "/#/profile";
    const AUTH_URL = `https://itch.io/user/oauth?client_id=${CLIENT_ID}&scope=profile:me&response_type=token&redirect_uri=${REDIRECT_URI}`;

    const handleLogin = () => {
        window.location.href = AUTH_URL;
    };

    return (
        <div className="login-viewport">
            <nav className="ubp-nav">
                <div className="nav-container">
                    <Link to="/" className="brand">
                        <span className="brand-name">UNBURIED PIXELS</span>
                    </Link>
                </div>
            </nav>

            <main className="login-grid">
                <section className="login-title-cell">
                    <h1 className="massive-title">USER</h1>
                    <h1 className="massive-title outline">ENTRY_</h1>
                </section>

                <section className="login-form-cell">
                    <div className="login-box">
                        <p className="login-tags">SYSTEM // AUTHENTICATION_REQUIRED</p>
                        <h2 className="login-heading">CONNECT YOUR ITCH.IO ACCOUNT TO ACCESS THE VAULT.</h2>
                        
                        <button onClick={handleLogin} className="itch-auth-btn">
                            <i className="fab fa-itch-io"></i> AUTHORIZE VIA ITCH.IO
                        </button>

                        <div className="login-footer-info">
                            <p>Direct encrypted connection to itch.io servers.</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}