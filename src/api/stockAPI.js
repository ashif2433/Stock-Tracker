import axios from 'axios';

const API_KEY = 'C7KZ55N0LGXS3B64'; // Replace with actual API key
const BASE_URL = 'https://www.alphavantage.co/query'; // Replace with actual API URL

export const fetchStockPrice = async (symbol) => {
  try {
    const response = await axios.get(`${BASE_URL}?symbol=${symbol}&apikey=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching stock data:", error);
    return null;
  }
};
