import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import { createContext, useEffect, useState } from 'react';

const userInfo = createContext(null);

function App() {
  const [isloggedin, setIsloggedin] = useState(false);
  const [userData, setUserData] = useState({});

  async function getData() {
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('No token found');
      return;
    }
    if (token) {
      console.log("TOKEN SET ALREADY");
      // console.log(JSON.stringify(localStorage.getItem('token')));
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/getUserdata', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.status === 200) {
        alert("Hello status : 200");
        const info = await response.json();
        console.log(info);
        setUserData(info.data);
        // localStorage.setItem('token', token);
      } else {
        console.log('Failed to fetch user data');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  useEffect(() => {
    getData();
  });

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsloggedin(true);
    }
  }, []); // Empty array ensures it runs only once when the component mounts

  const obj = {
    isloggedin,
    setIsloggedin,
    userData,
    setUserData
  };

  return (
    <>
      <userInfo.Provider value={obj}>
        <Navbar />
        <Home />
        <Footer />
      </userInfo.Provider>
    </>
  );
}

export default App;
export { userInfo };
