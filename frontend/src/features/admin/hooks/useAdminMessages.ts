// features/admin/hooks/useAdminMessages.ts
import { useState } from 'react';
import { ContactMessage } from '../types/admin.types';
import { adminService } from '../services/admin.service';

export const useAdminMessages = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchMessages = async (secret: string): Promise<boolean> => {
    setLoading(true);
    setError('');

    try {
      const [msgs, visitorData] = await Promise.all([
        adminService.getAllMessages(secret),
        adminService.getVisitorStats(secret)
      ]);

      setMessages(msgs);
      setStats(visitorData);
      return true;
    } catch (err: any) {
      setError(err.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { messages, stats, loading, error, fetchMessages };
};
