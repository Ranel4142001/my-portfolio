import { ContactRequest } from "../types/contact.types";

export const ContactService = {
  submitContact: async (payload: ContactRequest) => {
    // Replace with your real API call
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Failed to send contact");
    }

    return res.json();
  },
};
