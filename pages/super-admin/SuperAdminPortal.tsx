
import React, { useState } from 'react';
import OverviewPage from './Overview/OverviewPage';

interface SuperAdminPortalProps {
  onLogout: () => void;
}

const SuperAdminPortal: React.FC<SuperAdminPortalProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const navItems = [
    { name: 'Dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { name: 'Analytics', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
    { name: 'Health', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { name: 'Intelligence', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2' },
    { name: 'Partners', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857' },
    { name: 'Settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065' },
  ];

  return (
    <div className="min-h-screen bg-[#E5E7EB] text-slate-900 flex p-4 lg:p-6 font-sans overflow-hidden">
      <div className="flex-1 bg-white/60 backdrop-blur-2xl border border-white/80 rounded-[3rem] shadow-[0_20px_100px_rgba(0,0,0,0.05)] flex overflow-hidden">
        
        <aside className={`transition-all duration-500 ease-in-out border-r border-slate-200/50 flex flex-col ${isSidebarOpen ? 'w-72' : 'w-24'}`}>
          <div className="p-8 flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
               <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
               </svg>
            </div>
            {isSidebarOpen && <span className="text-xl font-bold tracking-tight text-slate-800">PlacementPro</span>}
          </div>

          <nav className="flex-1 px-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveTab(item.name === 'Dashboard' ? 'Overview' : item.name)}
                className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all group ${
                  (activeTab === 'Overview' && item.name === 'Dashboard') || activeTab === item.name 
                  ? 'bg-indigo-600/10 text-indigo-600 font-bold' 
                  : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d={item.icon} />
                </svg>
                {isSidebarOpen && <span className="text-sm tracking-tight">{item.name}</span>}
              </button>
            ))}
          </nav>

          <div className="p-8 border-t border-slate-100 mt-auto">
            <div className="flex items-center gap-4 mb-6">
               <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border border-white shadow-sm">
                  <img src="https://ui-avatars.com/api/?name=Naresh+Thota&background=6366f1&color=fff" className="w-full h-full object-cover" />
               </div>
               {isSidebarOpen && (
                 <div className="overflow-hidden">
                    <p className="text-sm font-bold text-slate-800 truncate">Naresh Thota</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider truncate">Super Admin</p>
                 </div>
               )}
            </div>
            <button 
              onClick={onLogout}
              className="mt-6 w-full flex items-center gap-3 text-slate-400 hover:text-red-500 transition-colors px-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              {isSidebarOpen && <span className="text-xs font-bold uppercase tracking-widest">Logout</span>}
            </button>
          </div>
        </aside>

        <main className="flex-1 flex flex-col overflow-hidden bg-slate-50/30">
          <header className="px-10 py-8 flex items-center justify-between">
            <div className="animate-fade-in-left">
              <h2 className="text-2xl font-black text-slate-800 tracking-tight">Welcome back, Naresh!</h2>
              <p className="text-sm text-slate-400 font-medium">Platform status is optimal.</p>
            </div>
            <div className="flex items-center gap-4">
               <button className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all">
                  Generate Report
               </button>
            </div>
          </header>

          <div className="flex-1 overflow-y-auto px-10 pb-10 custom-scrollbar animate-fade-in">
             {activeTab === 'Overview' ? <OverviewPage /> : (
               <div className="flex flex-col items-center justify-center h-full opacity-30 italic font-medium">
                  Initializing module: {activeTab}...
               </div>
             )}
          </div>
        </main>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #E2E8F0; border-radius: 10px; }
        @keyframes fade-in-left { from { opacity: 0; transform: translateX(-10px); } to { opacity: 1; transform: translateX(0); } }
        .animate-fade-in-left { animation: fade-in-left 0.8s ease-out; }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </div>
  );
};

export default SuperAdminPortal;
