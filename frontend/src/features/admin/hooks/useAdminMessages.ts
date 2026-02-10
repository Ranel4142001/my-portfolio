import { useState } from 'react';
import { ContactMessage } from '../admin.types';
import { adminService } from '../../../api/services/admin.service';

export const useAdminMessages = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

    
   const fetchMessages = async (secret: string) => {
    setLoading(true);
    setError('');
    
    try {
      // Using the centralized service
      const [msgs, visitorData] = await Promise.all([
        adminService.getAllMessages(secret),
        adminService.getVisitorStats(secret)
      ]);
      setMessages(msgs);
      setStats(visitorData);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

     return { messages,stats, loading, error, fetchMessages };
}