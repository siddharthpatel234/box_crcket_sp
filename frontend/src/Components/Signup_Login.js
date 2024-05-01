import React, { useState } from 'react';
// import axios from 'axios';
import '../Components/Signup_Login.css';

const Signup_Login = () => {
    const [isRightPanelActive, setIsRightPanelActive] = useState(false);

    const handleSignUpClick = () => {
        setIsRightPanelActive(true);
    };

    const handleSignInClick = () => {
        setIsRightPanelActive(false);
    };

const [signup,setsignup] = useState({
    name:  "Siddharth",
    email: "sid@gmail.com",
    password : "12345678",
});

// const handleSubmit = (e)=>{
//     e.preventDefault();
//     axios.post('http://localhost:4000/register',{signup}).then(() => {
//       console.log("succesfully signed up");
//       alert("Account Created Successfully!");
//     }).catch((error) => {
//       console.log(error);
//       alert("Error Creating Account! Please Try Again.");
//     });
// }

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

        if (response.ok) {
            console.log("Successfully signed up");
            alert("Account Created Successfully!");
        }
    } catch (error) {
        console.error(error);
        alert("Error Creating Account! Please Try Again.");
    }
};


    return (
        <div className={`box ${isRightPanelActive ? 'right-panel-active' : ''}`} id="box">
            <div className="form signup">
                <form method='POST'>
                    <h1 style={{ color: '#8ac85e' }}>Create Account</h1>
                    <div className="social-box">
                        <a href="#" className="social"><i className="fab fa-github"></i></a>
                        <a href="#" className="social"><i className="fab fa-google"></i></a>
                        <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#" className="social"><i className="far fa-envelope"></i></a>
                    </div>
                    <span className='span_style'>or use email for register</span>
                    <input className='input_data' type="text" placeholder="Name" onChange={e => setsignup({...signup, name:e.target.value})} />
                    <input className='input_data' type="email" placeholder="Email"  onChange={e => setsignup({...signup, email:e.target.value})}/>
                    <input className='input_data' type="password" placeholder="Password" onChange={e => setsignup({...signup, password:e.target.value})} />
                    <button onClick={handleSubmit} className='btn_design'>Sign Up</button>
                </form>
            </div>
            <div className="form signin">
                <form className='form_design' action="#">
                    <h1 style={{ color: '#8ac85e' }}>Sign In</h1>
                    <div className="social-box">
                        <a href="#" className="social"><i className="fab fa-github"></i></a>
                        <a href="#" className="social"><i className="fab fa-google"></i></a>
                        <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                        <a href="#" className="social"><i className="far fa-envelope"></i></a>
                    </div>
                    <span className='span_style'>or use your account</span>
                    <input className='input_data' type="email" placeholder="Email" />
                    <input className='input_data' type="password" placeholder="Password" />
                    <button className='btn_design'>Sign In</button>
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
