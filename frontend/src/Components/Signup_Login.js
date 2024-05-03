import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Components/Signup_Login.css';

const Signup_Login = () => {
    const [isRightPanelActive, setIsRightPanelActive] = useState(false);
    const navigate = useNavigate(); //  for redirecting to different pages

    const handleSignUpClick = () => {
        setIsRightPanelActive(true);
    };

    const handleSignInClick = () => {
        setIsRightPanelActive(false);
    };

    const [signup, setsignup] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:4000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(signup),
            });

            const responseData = await response.json();

            if (response.ok) {
                // User successfully registered
                alert(responseData.message);
                navigate("/");
            } else {
                // Error occurred during registration
                alert(responseData.message);
            }
        } catch (error) {
            console.error(error);
            alert("Error Creating Account! Please Try Later.");
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {

            const response = await fetch('http://localhost:4000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signup)
            });

            const responseData = await response.json();

            if (response.status === 200) {
                // User successfully logged in
                alert(responseData.message);
                navigate("/");
            } else if (response.status === 401) {
                // Email not found, ask user to register first
                alert(responseData.message);
            } else {
                // Handle other errors
                alert("An error occurred during login.");
            }


        } catch (error) {
            console.error(error);
            alert("Error While Login! Please Try Later.");
        }
    }


    return (
        <div className={`box ${isRightPanelActive ? 'right-panel-active' : ''}`} id="box">
            <div className="form signup">
                <form method='POST'>
                    <h1 style={{ color: '#8ac85e' }}>Create Account</h1>
                    <div className="social-box">
                        <a href="https://github.com/" className="social"><i className="fab fa-github"></i></a>
                        <a href="https://www.google.com/" className="social"><i className="fab fa-google"></i></a>
                        <a href="https://www.linkedin.com/feed/" className="social"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://twitter.com/" className="social"><i className="far fa-envelope"></i></a>
                    </div>
                    <span className='span_style'>or use email for register</span>
                    <input className='input_data' type="text" placeholder="Name" onChange={e => setsignup({ ...signup, name: e.target.value })} />
                    <input className='input_data' type="email" placeholder="Email" onChange={e => setsignup({ ...signup, email: e.target.value })} />
                    <input className='input_data' type="password" placeholder="Password" onChange={e => setsignup({ ...signup, password: e.target.value })} />
                    <button onClick={handleSubmit} className='btn_design'>Sign Up</button>
                </form>
            </div>
            <div className="form signin">
                <form className='form_design' action="#">
                    <h1 style={{ color: '#8ac85e' }}>Sign In</h1>
                    <div className="social-box">
                        <a href="https://github.com/" className="social"><i className="fab fa-github"></i></a>
                        <a href="https://github.com/" className="social"><i className="fab fa-google"></i></a>
                        <a href="https://github.com/" className="social"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://github.com/" className="social"><i className="far fa-envelope"></i></a>
                    </div>
                    <span className='span_style'>or use your account</span>
                    <input className='input_data' type="email" placeholder="Email" onChange={e => setsignup({ ...signup, email: e.target.value })}  />
                    <input className='input_data' type="password" placeholder="Password" onChange={e => setsignup({ ...signup, password: e.target.value })} />
                    <button onClick={handleLogin} className='btn_design'>Sign In</button>
                </form>
            </div>
            <div className="overlay-box">
                <div className="overlay">
                    <div className={`panel overlay-left ${isRightPanelActive ? 'right-panel-active' : ''}`}>
                        <h1>Welcome To<br />Box Cricket World</h1>
                        <h4 className='heading_4'>CRICKET | PICKLE BALL | FOOTBALL</h4>
                        <button className=" btn_design press" id="signIn" onClick={handleSignInClick}>Sign In</button>
                        <div className="credit">Play it close, play it tight <a href="">– box cricket's where we find our delight! </a></div>
                    </div>
                    <div className={`panel overlay-right ${isRightPanelActive ? 'right-panel-active' : ''}`}>
                        <h1>Welcome Back</h1>
                        <h4 className='heading_4'>CRICKET | PICKLE BALL | FOOTBALL</h4>
                        <button className="btn_design press" id="signUp" onClick={handleSignUpClick}>Sign Up</button>
                        <div className="credit">Think Inside the Box,<a href="">Outside the Boundaries! </a></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup_Login;
