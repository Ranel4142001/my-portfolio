import { MessageCard } from './MessageCard';
import { ContactMessage } from '../types/admin.types';

interface MessageListProps {
  messages: ContactMessage[];
  error: string;
}

export const MessageList = ({ messages, error }: MessageListProps) => {
  if (messages.length === 0 && !error) {
    return (
      <div className="text-slate-500 italic py-10 text-center border-2 border-dashed border-slate-800 rounded-xl bg-slate-900/20">
        No messages found. Enter your secret key to load data.
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      {messages.map((msg) => <MessageCard key={msg.id} message={msg} />)}
    </div>
  );
};

