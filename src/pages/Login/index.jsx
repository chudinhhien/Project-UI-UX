import React, { useEffect } from "react";
import "./LoginForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Logo from "./../../components/Logo/Logo";
import { Link, useLocation } from "react-router-dom";

const LoginForm = () => {
    const location = useLocation();

    useEffect(() => {
        const sign_in_btn = document.querySelector("#sign-in-btn");
        const sign_up_btn = document.querySelector("#sign-up-btn");
        const container = document.querySelector(".container");

        const handleSignUp = () => {
            container.classList.add("sign-up-mode");
        };

        const handleSignIn = () => {
            container.classList.remove("sign-up-mode");
        };

        if (location.search.includes("mode=signup")) {
            handleSignUp();
        }

        sign_up_btn.addEventListener("click", handleSignUp);
        sign_in_btn.addEventListener("click", handleSignIn);

        return () => {
            sign_up_btn.removeEventListener("click", handleSignUp);
            sign_in_btn.removeEventListener("click", handleSignIn);
        };
    }, [location.search]);

    return (
        <div className="container">
            <div className="forms-container">
                <div className="signin-signup">
                    <form action="#" className="sign-in-form">
                        <h2 className="title">Sign in</h2>
                        <div className="input-field">
                            <input type="text" required autoComplete="off" />
                            <label htmlFor="username">Username</label>
                        </div>
                        <div className="input-field">
                            <input type="password" required autoComplete="off" />
                            <label htmlFor="password">Password</label>
                        </div>
                        <Link to="/dashboard">
                            <button className="btn solid">Login</button>
                        </Link>
                        <p className="social-text">Or Sign in with social platforms</p>
                        <div className="social-media">
                            <a href="#" className="social-icon">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="#" className="social-icon">
                                <FontAwesomeIcon icon={faGoogle} />
                            </a>
                        </div>
                    </form>
                    <form action="#" className="sign-up-form">
                        <h2 className="title">Sign up</h2>
                        <div className="input-field">
                            <input type="text" required autoComplete="off" />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="input-field">
                            <input type="text" required autoComplete="off" />
                            <label htmlFor="username">Username</label>
                        </div>
                        <div className="input-field">
                            <input type="text" required autoComplete="off" />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field">
                            <input type="password" required autoComplete="off" />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="input-field">
                            <input type="password" required autoComplete="off" />
                            <label htmlFor="confirmPassword">Confirm Password</label>
                        </div>
                        <Link to="/dashboard">
                            <button className="btn solid">Sign up</button>
                        </Link>
                        <p className="social-text">Or Sign up with social platforms</p>
                        <div className="social-media">
                            <a href="#" className="social-icon">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="#" className="social-icon">
                                <FontAwesomeIcon icon={faGoogle} />
                            </a>
                        </div>
                    </form>
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <div className="logo">
                            <Logo />
                        </div>
                        <h3>New here ?</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Debitis, ex ratione. Aliquid!
                        </p>
                        <button
                            className="btn-sign-in transparent"
                            id="sign-up-btn"
                        >
                            Sign up
                        </button>
                    </div>
                    {/* <img src="img/log.svg" className="image" alt="hihi" /> */}
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <div className="logo">
                            <Logo />
                        </div>
                        <h3>One of us ?</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nostrum laboriosam ad deleniti.
                        </p>
                        <button
                            className="btn-sign-in transparent"
                            id="sign-in-btn"
                        >
                            Sign in
                        </button>
                    </div>
                    <img src="img/register.svg" className="image" alt="" />
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
