// customerService.js
import axios from "axios";

const BASE_URL = 'http://localhost:3000/customer';

export const submitChat = async (name, email, chat, userId) => {
  try {
    const response = await axios.post(`${BASE_URL}/submit`, {
      name,
      email,
      chat,
      userId
    });
    return response.data;
  } catch (error) {
    console.error('Error during submitChat:', error);
    throw error; // Re-throw the error to be caught in your handleSubmit
  }
};
