import { ContactMessage } from '../admin.types';
import MessageCard from './MessageCard';

interface MessageListProps {
  messages: ContactMessage[];
  error: string;
}

const MessageList = ({ messages, error }: MessageListProps) => {
  if (messages.length === 0 && !error) {
    return (
      <div className="text-slate-500 italic py-10 text-center border-2 border-dashed border-slate-800 rounded-xl">
        No messages found. Enter your secret key to load data.
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      {messages.map((msg) => (
        <MessageCard key={msg.id} message={msg} />
      ))}
    </div>
  );
};

export default MessageList;