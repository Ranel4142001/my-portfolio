// frontend/src/features/admin/components/VisitorList.tsx

interface VisitorStats {
  page_path: string;
  _count: { page_path: number }; // Prisma group-by result format
  last_visited?: string; // Optional in case it's missing from the query
}

const VisitorList = ({ stats }: { stats: VisitorStats[] }) => {
  // 🛡️ BEST PRACTICE: Check if stats is a valid array before rendering.
  // This prevents the "Cannot read properties of undefined" error.
  if (!stats || !Array.isArray(stats) || stats.length === 0) {
    return (
      <div className="mt-10 p-6 bg-slate-800/30 border border-dashed border-slate-700 rounded-xl text-center">
        <p className="text-slate-500 italic">No traffic data recorded yet.</p>
      </div>
    );
  }

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold text-cyan-400 mb-4 flex items-center gap-2">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
        </span>
        Live Traffic Analytics
      </h2>
      
      <div className="grid gap-2 text-sm">
        {stats.map((s, i) => (
          <div 
            key={i} 
            className="flex justify-between items-center p-3 bg-slate-800/50 rounded border border-slate-700 hover:border-cyan-500/50 transition-colors"
          >
            <div className="flex flex-col">
              {/* 🛡️ Optional chaining ensures we don't crash if an object is empty */}
              <span className="font-mono text-slate-200">{s?.page_path || "Unknown Path"}</span>
              {s?.last_visited && (
                <span className="text-[10px] text-slate-500">
                  Last seen: {new Date(s.last_visited).toLocaleString()}
                </span>
              )}
            </div>
            
            <div className="text-right">
              <span className="text-cyan-300 font-bold px-2 py-1 bg-cyan-500/10 rounded">
                {s?._count?.page_path ?? 0} views
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisitorList;