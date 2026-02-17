// features/admin/components/Dashboard.tsx
import { useState } from 'react';
import MessageList from './MessageList';
import VisitorList from './VisitorList';
import type { ContactMessage, VisitorStats } from '../types/admin.types';

interface DashboardProps {
  messages: ContactMessage[];
  stats: VisitorStats[];
  error: string;
}

const Dashboard = ({ messages, stats, error }: DashboardProps) => {
  const [activeTab, setActiveTab] = useState<'messages' | 'analytics'>(
    'messages'
  );

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-12 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
        <h1 className="text-3xl font-bold text-white">
          Dashboard <span className="text-cyan-500">.</span>
        </h1>

        <div className="flex p-1 bg-slate-900/80 rounded-lg border border-slate-800">
          {(['messages', 'analytics'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                activeTab === tab
                  ? 'bg-slate-800 text-cyan-400 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              {tab === 'messages'
                ? `Inquiries (${messages.length})`
                : 'Analytics'}
            </button>
          ))}
        </div>
      </div>

      <div className="min-h-[400px]">
        {activeTab === 'messages' ? (
          <MessageList messages={messages} error={error} />
        ) : (
          <VisitorList stats={stats} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
