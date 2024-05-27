// In Services/GetUserData.js

export async function GetUserData(setUserData) {
    const token = localStorage.getItem('token');
  
    if (!token) {
      console.log('No token found');
      return null;
    }
  
    try {
      const tokenPayload = token.split('.')[1]; // Extract the payload part of the token
      const decodedPayload = JSON.parse(atob(tokenPayload)); // Decode the payload from Base64
  
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
        console.log(userData.data.name);
        setUserData(userData);
        return userData.data; // Return the user data
      } else {
        console.error('Failed to fetch user data');
        return null;
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      return null;
    }
  }
  