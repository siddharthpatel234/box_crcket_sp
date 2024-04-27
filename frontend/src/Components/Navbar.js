import React from 'react'
import '../Components/Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
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
                        {/* <a className="active" href="/">
                            Home
                        </a> */}
                        <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                        {/* <a href="#">About</a> */}
                        <Link to={'/About'}>About</Link>
                    </li>
                    <li>
                        {/* <a href="#">Contact</a> */}
                        <Link to={'/Contact'}>Contact Us</Link>
                    </li>
                    <li>
                        <Link to={'/Login'}>SignUp/Login</Link>
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
