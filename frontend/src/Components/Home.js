import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import List from './List';
import Contact from './Contact';
import SignupLogin from './Signup_Login';
import AddBox from './AddBox';


export default function Home() {
        
    return (
        <>
            <br></br><br></br>
            <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap'}}>
                
            <Routes>
            <Route path="/" element={<List/>} />
            <Route path="/About" element={<About></About>}></Route>
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/Login" element={<SignupLogin/>}/>
            <Route path="/add" element={<AddBox/>}/>
            </Routes>
            </div>
        </>
    )
}
