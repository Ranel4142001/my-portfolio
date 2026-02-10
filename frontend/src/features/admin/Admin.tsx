import { useState } from 'react';
import { useAdminMessages } from './hooks/useAdminMessages';
import AdminHeader from './components/AdminHeader';
import AdminAuth from './components/AdminAuth';
import MessageList from './components/MessageList';
import VisitorList from './components/VisitorList';

const Admin = () => {
  const [secret, setSecret] = useState('');
  const [activeTab, setActiveTab] = useState<'messages' | 'analytics'>('messages');
  const { messages, stats, loading, error, fetchMessages } = useAdminMessages();

  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <AdminHeader />
        
        <AdminAuth 
          secret={secret}
          setSecret={setSecret}
          onFetch={fetchMessages}
          loading={loading}
        />

        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-4 rounded-lg">
            ⚠️ {error}
          </div>
        )}

        {/* 🚀 TAB NAVIGATION: Best practice for separating different data types */}
        {messages.length > 0 && (
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
        )}

        {/* 🚀 TAB CONTENT: Only show what is selected */}
        <div className="mt-6">
          {activeTab === 'messages' ? (
            <MessageList messages={messages} error={error} />
          ) : (
            <VisitorList stats={stats} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;