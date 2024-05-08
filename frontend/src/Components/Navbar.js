import { useState,useEffect, useContext } from 'react'
import React from 'react'
import '../Components/Navbar.css'
import { Link } from 'react-router-dom'
// import useNavigate from 'react-router-dom'
import { userInfo } from '../App'

export default function Navbar() {
    
    const [token, setToken] = useState(localStorage.getItem('token'));

    const context = useContext(userInfo)


    useEffect(() => {
        // Update token state whenever it changes in localStorage
        setToken(localStorage.getItem('token'));
    }, [localStorage.getItem('token')]);

    const handleLogOut = () => {
        context.setIsloggedin(false);
        localStorage.removeItem('token');
        // Force re-rendering of the Navbar component by updating its state
        setToken(null);
        alert('Log-Out');
    }


    return (
        <>
            <nav>
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="checkbtn">
                    <i className="fas fa-bars" />
                </label>
                <label className="logo">Box Cricket</label>
                <ul>
                    <li>
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link to={'/About'}>About</Link>
                    </li>
                    <li>
                        <Link to={'/Contact'}>Contact Us</Link>
                    </li>
                    <li>
                        <Link to={'/add'}>Add Box</Link>
                    </li>
                    <li>
                        {/* If Token set Display Logout else Sigup/Login */}
                        {context.isloggedin ? (
                            <>
                                <Link onClick={handleLogOut}>Log Out</Link>
                            </>
                        ) : (
                            <>
                                <Link to={'/Login'}>SignUp/Login</Link>
                            </>
                        )}

                    </li>
                    <li>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Location" aria-label="Search" />
                            <input type="button" class="btn my-2 my-sm-0" style={{ backgroundColor: '#8ac85e', color: 'white' }} value={'Search'}></input>
                        </form>
                    </li>
                </ul>

            </nav>

        </>
    )
}
