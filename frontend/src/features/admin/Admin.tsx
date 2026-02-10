import { useState } from 'react';
import { useAdminMessages } from './hooks/useAdminMessages';
import AdminHeader from './components/AdminHeader';
import AdminAuth from './components/AdminAuth';
import MessageList from './components/MessageList';

const Admin = () => {
  const [secret, setSecret] = useState('');
  const { messages, loading, error, fetchMessages } = useAdminMessages();

  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-8">
      <div className="max-w-5xl mx-auto">
        <AdminHeader />
        
        <AdminAuth 
          secret={secret}
          setSecret={setSecret}
          onFetch={fetchMessages}
          loading={loading}
        />

        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded-lg mb-8">
            ⚠️ {error}
          </div>
        )}

        <MessageList messages={messages} error={error} />
      </div>
    </div>
  );
};

export default Admin;