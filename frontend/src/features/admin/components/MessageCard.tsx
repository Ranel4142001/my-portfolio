import { ContactMessage } from '../types/admin.types';

export const MessageCard = ({ message }: { message: ContactMessage }) => (
  <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl hover:border-cyan-500/50 transition-colors shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-500">
    <div className="flex justify-between items-start mb-4">
      <div>
        <h2 className="text-xl font-bold text-slate-100">{message.name}</h2>
        <p className="text-cyan-400 text-sm font-medium">{message.email}</p>
      </div>
      <span className="text-xs text-slate-500 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
        {new Date(message.created_at).toLocaleDateString()}
      </span>
    </div>
    <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800">
      <p className="text-slate-300 leading-relaxed italic">"{message.message}"</p>
    </div>
  </div>
);
