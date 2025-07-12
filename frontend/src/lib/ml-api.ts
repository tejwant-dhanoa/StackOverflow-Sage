import axios from "axios";

export const mlApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ML_API_URL,
  withCredentials: true, // optional depending on setup
});
