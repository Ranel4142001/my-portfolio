// features/admin/components/AdminSection.tsx
import { useState } from 'react';
import { useAdminMessages } from '../hooks/useAdminMessages';
import  LoginView  from './LoginView';
import  Dashboard  from './Dashboard';

const AdminSection = () => {
  const [secret, setSecret] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const { messages, stats, loading, error, fetchMessages } =
    useAdminMessages();

  const handleLogin = async () => {
    if (!secret) return;

    const success = await fetchMessages(secret);

    if (success) {
      setStatusMessage('Log in successful! Loading dashboard...');
      setTimeout(() => {
        setIsLoggedIn(true);
        setStatusMessage('');
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white font-sans selection:bg-cyan-500/30">
      {!isLoggedIn ? (
        <LoginView
          secret={secret}
          setSecret={setSecret}
          handleLogin={handleLogin}
          loading={loading}
          statusMessage={statusMessage}
          error={error}
        />
      ) : (
        <Dashboard
          messages={messages}
          stats={stats}
          error={error}
        />
      )}
    </div>
  );
};

export default AdminSection;
