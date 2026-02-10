interface AdminAuthProps {
  secret: string;
  setSecret: (value: string) => void;
  onFetch: (secret: string) => void;
  loading: boolean;
}

const AdminAuth = ({ secret, setSecret, onFetch, loading }: AdminAuthProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-12 items-end">
      <div className="flex flex-col gap-2">
        <label className="text-sm text-slate-400">Admin Secret Key</label>
        <input 
          type="password" 
          placeholder="••••••••" 
          className="bg-slate-800 border border-slate-700 p-2.5 rounded-lg w-72 text-white focus:ring-2 focus:ring-cyan-500 outline-none"
          value={secret}
          onChange={(e) => setSecret(e.target.value)}
        />
      </div>
      <button 
        onClick={() => onFetch(secret)}
        disabled={loading || !secret}
        className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-2.5 rounded-lg font-bold transition-all disabled:opacity-50 h-[46px]"
      >
        {loading ? 'Fetching...' : 'View Messages'}
      </button>
    </div>
  );
};

export default AdminAuth;