import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import { createContext, useEffect, useState } from 'react';

const userInfo = createContext(null);

function App() {
  const [isloggedin, setIsloggedin] = useState(false);
  const [userData, setUserData] = useState(null);

  async function getData() {
    const token = localStorage.getItem('token');

    if (!token) {
      console.log('No token found');
      return;
    }

    try {
      const tokenPayload = token.split('.')[1]; // Extract the payload part of the token
      const decodedPayload = JSON.parse(atob(tokenPayload)); // Decode the payload from Base64

      // console.log("Decoded Token Payload:", decodedPayload.id);
      console.log(decodedPayload.id);
      setUserData(decodedPayload.id);

      const response = await fetch('http://localhost:4000/getUserdata', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const userData = await response.json();
        // console.log(userData.data.name);
        setUserData(userData);
      } 

    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }

  useEffect(() => {
    getData();
  }, []); // Empty array ensures it runs only once when the component mounts

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
