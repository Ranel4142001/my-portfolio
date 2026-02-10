import { useState } from 'react';
import { useAdminMessages } from './hooks/useAdminMessages';
import AdminHeader from './components/AdminHeader';
import AdminAuth from './components/AdminAuth';
import MessageList from './components/MessageList';
import VisitorList from './components/VisitorList';

const Admin = () => {
  const [secret, setSecret] = useState('');
  const [activeTab, setActiveTab] = useState<'messages' | 'analytics'>('messages');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const { messages, stats, loading, error, fetchMessages } = useAdminMessages();

// Handle the login process
  const handleAuthSuccess = async () => {
    const success = await fetchMessages(secret);
    
    if (success) {
      setStatusMessage('Log in successful! Loading dashboard...');
      
      // Delay hiding the input so the user can see the success message
      setTimeout(() => {
        setIsLoggedIn(true);
        setStatusMessage(''); 
      }, 2000);
    }
  };
 
  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      {/* 🔒 Auth Screen: Only shows before login */}
      {!isLoggedIn ? (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 animate-in fade-in zoom-in duration-300">
          <div className="w-full max-w-md space-y-6">
            <AdminHeader /> {/* Keep header here if you want your name visible during login */}
            
            {statusMessage && (
              <div className="bg-emerald-500/20 border border-emerald-500 text-emerald-400 p-4 rounded-lg animate-pulse text-center">
                ✅ {statusMessage}
              </div>
            )}

            <AdminAuth 
              secret={secret}
              setSecret={setSecret}
              onFetch={handleAuthSuccess} 
              loading={loading}
            />

            {error && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded-lg text-center">
                ⚠️ {error}
              </div>
            )}
          </div>
        </div>
      ) : (
        /* 📊 Dashboard Screen: Only shows AFTER login */
        <div className="max-w-5xl mx-auto p-8 space-y-8 animate-in slide-in-from-bottom-4 duration-500">
          <AdminHeader />
          
          <div className="flex gap-4 border-b border-slate-700 pb-2">
            <button 
              onClick={() => setActiveTab('messages')}
              className={`pb-2 px-4 transition-all ${activeTab === 'messages' ? 'border-b-2 border-cyan-400 text-cyan-400' : 'text-slate-400'}`}
            >
              Contact Inquiries ({messages.length})
            </button>
            <button 
              onClick={() => setActiveTab('analytics')}
              className={`pb-2 px-4 transition-all ${activeTab === 'analytics' ? 'border-b-2 border-cyan-400 text-cyan-400' : 'text-slate-400'}`}
            >
              Audience Analytics
            </button>
          </div>

          <div className="mt-6">
            {activeTab === 'messages' ? (
              <MessageList messages={messages} error={error} />
            ) : (
              <VisitorList stats={stats} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;