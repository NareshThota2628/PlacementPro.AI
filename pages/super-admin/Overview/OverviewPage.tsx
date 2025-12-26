
import React from 'react';

const OverviewPage: React.FC = () => {
  return (
    <div className="grid grid-cols-12 gap-8">
      {/* Metrics Row */}
      <div className="col-span-12 lg:col-span-4 bg-white border border-slate-100 rounded-[2.5rem] p-8 flex items-center justify-between shadow-sm">
         <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 font-black">P</div>
            <div>
               <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Total Placements</p>
               <h3 className="text-3xl font-black text-slate-800">14,231 <span className="text-xs text-emerald-500 ml-1">↑ 25%</span></h3>
            </div>
         </div>
      </div>
      
      <div className="col-span-12 lg:col-span-4 bg-white border border-slate-100 rounded-[2.5rem] p-8 flex items-center justify-between shadow-sm">
         <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 font-black">S</div>
            <div>
               <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Partner Score</p>
               <h3 className="text-3xl font-black text-slate-800">92 <span className="text-xs text-slate-400 ml-1">avg</span></h3>
            </div>
         </div>
      </div>

      <div className="col-span-12 lg:col-span-4 bg-white border border-slate-100 rounded-[2.5rem] p-8 flex items-center justify-between shadow-sm">
         <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 font-black">T</div>
            <div>
               <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Active Trials</p>
               <h3 className="text-3xl font-black text-slate-800">1,204 <span className="text-xs text-amber-500 ml-1">New</span></h3>
            </div>
         </div>
      </div>

      {/* Hero Card */}
      <div className="col-span-12 lg:col-span-8 bg-indigo-600 rounded-[3rem] p-12 shadow-2xl shadow-indigo-100 flex flex-col md:flex-row items-center justify-between text-white relative overflow-hidden group">
         <div className="relative z-10 max-w-sm">
            <h4 className="text-3xl font-black leading-tight mb-4">Neural Engine V2 <br/><span className="text-indigo-200">The Future of Matching</span></h4>
            <p className="text-indigo-100 text-sm font-medium leading-relaxed mb-8">Harnessing advanced LLMs to identify the precise career trajectories for every candidate.</p>
            <button className="px-8 py-3 bg-white text-indigo-600 rounded-xl font-bold hover:bg-indigo-50 transition-all shadow-xl">Upgrade Access</button>
         </div>
         <div className="relative mt-12 md:mt-0 animate-float">
            <div className="w-64 h-64 bg-indigo-500/20 backdrop-blur-3xl border border-indigo-400/30 rounded-full flex items-center justify-center p-4">
               <div className="w-full h-full bg-white/20 rounded-full flex items-center justify-center text-white text-6xl font-black">AI</div>
            </div>
         </div>
      </div>

      <div className="col-span-12 lg:col-span-4 bg-white border border-slate-100 rounded-[3rem] p-10 shadow-sm">
         <h4 className="text-lg font-black text-slate-800 mb-8">Performance Gauge</h4>
         <div className="relative flex flex-col items-center justify-center">
            <div className="w-48 h-48 rounded-full border-[12px] border-indigo-50 flex items-center justify-center relative">
               <div className="absolute inset-0 rounded-full border-[12px] border-indigo-600 border-t-transparent -rotate-45"></div>
               <div className="flex flex-col items-center">
                  <span className="text-5xl font-black text-slate-800">85</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Efficiency</span>
               </div>
            </div>
         </div>
      </div>

      <style>{`
         @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
         }
         .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default OverviewPage;
