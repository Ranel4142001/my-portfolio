// frontend/src/api/services/admin.service.ts
import { ContactMessage } from "../types/admin.types";

// Accessing the Vite environment variable
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const adminService = {
  /**
   * Fetches all contact messages from the backend.
   * Best Practice: Pass the secret as a parameter to keep this service stateless.
   */
  getAllMessages: async (secret: string): Promise<ContactMessage[]> => {
    const response = await fetch(`${BASE_URL}/api/contact/all`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-admin-secret": secret, // The header validated by your NestJS AdminGuard
      },
    });

    const result = await response.json();

    if (!response.ok) {
      // Handles 'Invalid Admin Secret' or 'Server configuration error'
      throw new Error(result.message || "Failed to fetch messages");
    }

    // Returns result.data because of your TransformInterceptor
    return result.data;
  },

  getVisitorStats: async (secret: string) => {
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const response = await fetch(`${BASE_URL}/api/tracker/stats`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-admin-secret": secret, // Secure this endpoint with the same guard
      },
    });

    const result = await response.json();
    if (!response.ok)
      throw new Error(result.message || "Failed to fetch stats");

    // TransformInterceptor returns data inside result.data
    return result.data;
  },
};
