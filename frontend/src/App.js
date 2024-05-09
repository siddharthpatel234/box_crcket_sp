import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import { createContext, useEffect, useState } from 'react';

const userInfo = createContext(null)

function App() {

  async function getData(){
    const response = await fetch('/getUserdata',{
      method : 'POST',
      headers: {'Content-Type': 'application/json'},
      body : JSON.stringify({token : localStorage.getItem('token')})
    })
    if(response.status === 308){
        const info = await response.json()
        console.log(info.data)
        setUserData(info.data)
    }
    else{
      console.log('NOOOOOOOOOOO')
    }

  }

  useEffect( ()=>{
    console.log(localStorage.getItem('token'))
    getData()
  },[])

  const [isloggedin,setIsloggedin] = useState(false)
  const [userData,setUserData] = useState({});
  const obj = {
      isloggedin,
      setIsloggedin,
      userData,
      setUserData
  }

  useEffect(()=>{
    if(localStorage.getItem('token'))
      {
        setIsloggedin(true)
      }
  },[])

  return (
    <>
      <userInfo.Provider value={obj} >
        <Navbar/>
        <Home/>
        <Footer/>
      </userInfo.Provider>
    </>
  );
}

export default App;
export {userInfo}