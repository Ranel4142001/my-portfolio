// src/api/axios.ts
import axios from "axios";
import { toast } from "@/hooks/use-toast"; // Import the toast hook used in your project

const api = axios.create({
  baseURL: import.meta.env.PROD 
    ? "https://rld-portfolio-backend.onrender.com/api" 
    : "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Best Practice: Global Response Interceptor
api.interceptors.response.use(
  (response) => {
    // If the request is successful, just return the response
    return response;
  },
  (error) => {
    // This triggers for any API error (400, 404, 500, or Network Error)
    const message =
      error.response?.data?.message ||
      "Unable to connect to the server. Please try again later.";

    // Automatically show the toast error [cite: 2026-01-20]
    toast({
      variant: "destructive",
      title: "System Error",
      description: message,
    });

    return Promise.reject(error);
  },
);

export default api;
