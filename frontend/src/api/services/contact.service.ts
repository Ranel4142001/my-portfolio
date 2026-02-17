import api from '../axios';

export interface ContactRequest {
  name: string;
  email: string;
  message: string;
  preferredDate?: string;
}

export const ContactService = {
  /**
   * Sends contact form data to the database
   * Best Practice: Logic is isolated to this specific feature
   */
  submitContact: async (data: ContactRequest) => {
    // baseURL handles the 'http://localhost:3000/api' part
    const response = await api.post('/contact', data);
    return response.data;
  }
};