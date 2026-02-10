import { useState } from 'react';
import { ContactMessage } from '../admin.types';

export const useAdminMessages = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchMessages = async (secret: string) => {
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('http://localhost:3000/api/contact/all', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-secret': secret,
        },
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Access Denied');
      }

      setMessages(result.data);
    } catch (err: any) {
      setError(err.message);
      setMessages([]);
    } finally {
      setLoading(false);
    }
  };

  return {
    messages,
    loading,
    error,
    fetchMessages,
  };
};