import axios from "axios";

const API_URL = process.env.EXPO_PUBLIC_API_URL;
const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

async function SignIn(credenciais) {
  try {
    const response = await axios.post(
      `${API_URL}:signInWithPassword?Key=${API_KEY}`,
      credenciais
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

