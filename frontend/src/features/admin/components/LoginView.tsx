interface LoginViewProps {
  secret: string;
  setSecret: (val: string) => void;
  handleLogin: () => void;
  loading: boolean;
  statusMessage: string;
  error: string;
}

export const LoginView = ({ secret, setSecret, handleLogin, loading, statusMessage, error }: LoginViewProps) => (
  <div className="flex flex-col items-center justify-center min-h-screen p-6 animate-in fade-in zoom-in duration-300">
    <div className="w-full max-w-md space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Admin Portal
        </h1>
        <p className="text-slate-400">Secure access required</p>
      </div>

      {statusMessage && <StatusMessage text={statusMessage} type="success" />}
      {error && <StatusMessage text={error} type="error" />}

      <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 shadow-2xl space-y-6">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Secret Key</label>
          <input 
            type="password" 
            placeholder="••••••••••••" 
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            className="w-full bg-slate-950 border border-slate-800 p-3 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all placeholder:text-slate-700"
          />
        </div>
        <button 
          onClick={handleLogin}
          disabled={loading || !secret}
          className="w-full bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-800 disabled:text-slate-600 text-white p-3 rounded-lg font-bold transition-all shadow-lg shadow-cyan-900/20 active:scale-[0.98]"
        >
          {loading ? 'Verifying...' : 'Access Dashboard'}
        </button>
      </div>
    </div>
  </div>
);

const StatusMessage = ({ text, type }: { text: string; type: 'success' | 'error' }) => (
  <div className={`p-3 rounded-lg text-center text-sm font-medium ${
    type === 'success' 
      ? 'bg-emerald-500/10 border border-emerald-500/50 text-emerald-400'
      : 'bg-red-500/10 border border-red-500/50 text-red-400'
  }`}>
    {type === 'success' ? '✅ ' : '⚠️ '}{text}
  </div>
);

export default LoginView;
