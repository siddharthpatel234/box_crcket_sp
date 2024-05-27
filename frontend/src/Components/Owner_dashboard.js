import React, { useState, useEffect } from 'react';
import '../css/Owner_dashboard.css';
// import 'https://unicons.iconscout.com/release/v4.0.0/css/line.css';

const OwnerDashboard = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [sidebarClosed, setSidebarClosed] = useState(false);

    useEffect(() => {
        const savedMode = localStorage.getItem('mode');
        const savedStatus = localStorage.getItem('status');

        if (savedMode === 'dark') {
            setDarkMode(true);
        }
        if (savedStatus === 'close') {
            setSidebarClosed(true);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('mode', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    useEffect(() => {
        localStorage.setItem('status', sidebarClosed ? 'close' : 'open');
    }, [sidebarClosed]);

    const toggleDarkMode = () => setDarkMode(!darkMode);
    const toggleSidebar = () => setSidebarClosed(!sidebarClosed);

    return (
        <div className={darkMode ? 'owner-dark' : ''}>
            <nav className={sidebarClosed ? 'owner-close' : ''}>
                <div className="owner-logo-name">
                    <div className="owner-logo-image">
                        <img src="images/logo.png" alt="Logo" />
                    </div>
                    <span className="owner-logo_name">CodingLab</span>
                </div>
                <div className="owner-menu-items">
                    <ul className="owner-nav-links">
                        <li>
                            <a href="#">
                                <i className="uil uil-estate"></i>
                                <span className="owner-link-name">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="uil uil-files-landscapes"></i>
                                <span className="owner-link-name">Content</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="uil uil-chart"></i>
                                <span className="owner-link-name">Analytics</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="uil uil-thumbs-up"></i>
                                <span className="owner-link-name">Like</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="uil uil-comments"></i>
                                <span className="owner-link-name">Comment</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="uil uil-share"></i>
                                <span className="owner-link-name">Share</span>
                            </a>
                        </li>
                    </ul>
                    <ul className="owner-logout-mode">
                        <li>
                            <a href="#">
                                <i className="uil uil-signout"></i>
                                <span className="owner-link-name">Logout</span>
                            </a>
                        </li>
                        <li className="owner-mode">
                            <a href="#" onClick={toggleDarkMode}>
                                <i className="uil uil-moon"></i>
                                <span className="owner-link-name">Dark Mode</span>
                            </a>
                            <div className="owner-mode-toggle">
                                <span className="owner-switch"></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

            <section className="owner-dashboard">
                <div className="owner-top">
                    <i className="uil uil-bars owner-sidebar-toggle" onClick={toggleSidebar}></i>
                    <div className="owner-search-box">
                        <i className="uil uil-search"></i>
                        <input type="text" placeholder="Search here..." />
                    </div>
                </div>

                <div className="owner-dash-content">
                    <div className="owner-overview">
                        <div className="owner-title">
                            <i className="uil uil-tachometer-fast-alt"></i>
                            <span className="owner-text">Dashboard</span>
                        </div>
                        <div className="owner-boxes">
                            <div className="owner-box owner-box1">
                                <i className="uil uil-thumbs-up"></i>
                                <span className="owner-text">Total Likes</span>
                                <span className="owner-number">50,120</span>
                            </div>
                            <div className="owner-box owner-box2">
                                <i className="uil uil-comments"></i>
                                <span className="owner-text">Comments</span>
                                <span className="owner-number">20,120</span>
                            </div>
                            <div className="owner-box owner-box3">
                                <i className="uil uil-share"></i>
                                <span className="owner-text">Total Share</span>
                                <span className="owner-number">10,120</span>
                            </div>
                        </div>
                    </div>

                    <div className="owner-activity">
                        <div className="owner-title">
                            <i className="uil uil-clock-three"></i>
                            <span className="owner-text">Recent Activity</span>
                        </div>
                        <div className="owner-activity-data">
                            <div className="owner-data owner-names">
                                <span className="owner-data-title">Name</span>
                                <span className="owner-data-list">Prem Shahi</span>
                                <span className="owner-data-list">Deepa Chand</span>
                                <span className="owner-data-list">Manisha Chand</span>
                                <span className="owner-data-list">Pratima Shahi</span>
                                <span className="owner-data-list">Man Shahi</span>
                                <span className="owner-data-list">Ganesh Chand</span>
                                <span className="owner-data-list">Bikash Chand</span>
                            </div>
                            <div className="owner-data owner-email">
                                <span className="owner-data-title">Email</span>
                                <span className="owner-data-list">premshahi@gmail.com</span>
                                <span className="owner-data-list">deepachand@gmail.com</span>
                                <span className="owner-data-list">prakashhai@gmail.com</span>
                                <span className="owner-data-list">manishachand@gmail.com</span>
                                <span className="owner-data-list">pratimashhai@gmail.com</span>
                                <span className="owner-data-list">manshahi@gmail.com</span>
                                <span className="owner-data-list">ganeshchand@gmail.com</span>
                            </div>
                            <div className="owner-data owner-joined">
                                <span className="owner-data-title">Joined</span>
                                <span className="owner-data-list">2022-02-12</span>
                                <span className="owner-data-list">2022-02-12</span>
                                <span className="owner-data-list">2022-02-13</span>
                                <span className="owner-data-list">2022-02-13</span>
                                <span className="owner-data-list">2022-02-14</span>
                                <span className="owner-data-list">2022-02-14</span>
                                <span className="owner-data-list">2022-02-15</span>
                            </div>
                            <div className="owner-data owner-type">
                                <span className="owner-data-title">Type</span>
                                <span className="owner-data-list">New</span>
                                <span className="owner-data-list">Member</span>
                                <span className="owner-data-list">Member</span>
                                <span className="owner-data-list">New</span>
                                <span className="owner-data-list">Member</span>
                                <span className="owner-data-list">New</span>
                                <span className="owner-data-list">Member</span>
                            </div>
                            <div className="owner-data owner-status">
                                <span className="owner-data-title">Status</span>
                                <span className="owner-data-list">Liked</span>
                                <span className="owner-data-list">Liked</span>
                                <span className="owner-data-list">Liked</span>
                                <span className="owner-data-list">Liked</span>
                                <span className="owner-data-list">Liked</span>
                                <span className="owner-data-list">Liked</span>
                                <span className="owner-data-list">Liked</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OwnerDashboard;