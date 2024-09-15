import axios from 'axios';

const FIREBASE_API_URL = 'https://solutech-fiap-default-rtdb.firebaseio.com/';

export const registerUser = async (email, password) => {
  try {
    const response = await axios.post(`${FIREBASE_API_URL}/usuarios.json`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('Error registering user: ', error);
    return null;
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.get(`${FIREBASE_API_URL}/usuarios.json`);
    const users = response.data;

    for (let key in users) {
      if (users[key].email === email && users[key].password === password) {
        return true; 
      }
    }

    return false; 
  } catch (error) {
    console.error('Error logging in: ', error);
    return false;
  }
};

export const getPortfolioData = async () => {
    try {
      const response = await axios.get(`${FIREBASE_API_URL}/portifolio.json`);
      return response.data;
    } catch (error) {
      console.error("Error fetching portfolio data: ", error);
      return [];
    }
  };
  
  export const getMarketInsights = async () => {
    try {
      const response = await axios.get(`${FIREBASE_API_URL}/noticias.json`);
      return response.data;
    } catch (error) {
      console.error("Error fetching market insights: ", error);
      return [];
    }
  };