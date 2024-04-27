import React from 'react';
import '../Components/Footer.css';

export default function Footer() {
    return (
        <>

            <footer>
                <div className="con">
                    <div className="footer_content">
                        <div className="first_section">
                            <h3 className="footer_headings">About Us</h3>
                            <img src="images/logo-1.png" alt="" />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. A adipisci
                                minus ratione nulla cum ut repellendus omnis, odit ducimus nisi?
                            </p>
                            <div className="social_icons">
                                <i className="fa-brands fa-facebook" />
                                <i className="fa-brands fa-twitter" />
                                <i className="fa-brands fa-pinterest" />
                                <i className="fa-brands fa-youtube" />
                            </div>
                        </div>
                        <div className="second_section">
                            <h3 className="footer_headings">Useful links</h3>
                            <ul>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Services</a>
                                </li>
                                <li>
                                    <a href="#">Projects</a>
                                </li>
                                <li>
                                    <a href="#">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="third_section">
                            <h3 className="footer_headings">Address</h3>
                            <ul>
                                <li>
                                    <img src={require('../Components/email.png')} />
                                    <span>admin@onlineittuts.com</span>
                                </li>
                                <li>
                                    <img src={require('../Components/address.png')} />
                                    <span>A108 Adam Street, New York, NY </span>
                                </li>
                                <li>
                                    <img src={require('../Components/phone.png')} />
                                    <span>+15589 55488 55</span>
                                </li>
                            </ul>
                        </div>
                        <div className="fourth_section">
                            <h3 className="footer_headings">Contact Us</h3>
                            <form action="#">
                                <div className="form_control">
                                    <input type="text" placeholder="Enter an Email" />
                                </div>
                                <div className="form_control">
                                    <textarea
                                        name=""
                                        id=""
                                        cols={10}
                                        rows={5}
                                        placeholder="Write Message....."
                                        defaultValue={""}
                                    />
                                </div>
                                <button type="button">Send</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="footer_txt">
                    <p>
                        All rights reservered by
                        <a href="">Siddharth</a> © 2024.
                    </p>
                </div>
            </footer>


        </>
    )
}
