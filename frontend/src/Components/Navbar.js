import { useContext } from 'react'
import React from 'react'
import '../Components/Navbar.css'
import { Link } from 'react-router-dom'
import { userInfo } from '../App'
import BOXCRICKET from '../Components/BOXCRICKET.png';

export default function Navbar() {

    // const [token, setToken] = useState(localStorage.getItem('token'));

    const User_details = useContext(userInfo);


    const context = useContext(userInfo)

    const handleLogOut = () => {
        context.setIsloggedin(false);
        localStorage.removeItem('token');
        // Force re-rendering of the Navbar component by updating its state
        // setToken(null);
        alert('Log-Out');
    }


    return (
        <>
            <nav>
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="checkbtn">
                    <i className="fas fa-bars" />
                </label>
                <label className="logo"><img src={BOXCRICKET} alt='BOXCRICKET' style={{width:'35vh', marginTop:'2.5vh'}} /></label>
                <ul>
                    <li>
                        {/* <span>Welcome, {User_details}!</span> */}
                        
                    </li>
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
