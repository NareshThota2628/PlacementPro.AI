
import React, { useState } from 'react';
import StudentDashboard from './Dashboard/StudentDashboard';

interface StudentPortalProps {
  onLogout: () => void;
}

const StudentPortal: React.FC<StudentPortalProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const navItems = [
    { name: 'Dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { name: 'Analytics', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
    { name: 'Wallet', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
    { name: 'Profile', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#DCE4F0] to-[#E8EEF7] p-4 lg:p-8 font-sans flex items-center justify-center overflow-hidden">
      {/* 
        Main Application Floating Container 
        Exact replica of the white bordered glass container
      */}
      <div className="w-full max-w-[1700px] h-[92vh] bg-[#F2F5FA] rounded-[3rem] shadow-[0_40px_100px_-10px_rgba(0,0,0,0.1)] flex overflow-hidden border-[6px] border-white/60 relative">
        
        {/* Sidebar - Exact match */}
        <aside className="w-[100px] bg-[#F2F5FA] flex flex-col items-center py-10 z-20">
          {/* Logo - Purple Hexagon Style */}
          <div className="mb-12">
             <div className="w-12 h-12 bg-[#8B5CF6] rounded-2xl rotate-3 flex items-center justify-center shadow-lg shadow-purple-300">
               <svg className="w-7 h-7 text-white -rotate-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
             </div>
          </div>

          {/* Nav Items */}
          <nav className="flex-1 space-y-6 flex flex-col items-center w-full">
             {navItems.map((item) => (
               <button 
                 key={item.name}
                 onClick={() => setActiveTab(item.name)}
                 className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group relative ${
                   activeTab === item.name 
                   ? 'bg-[#8B5CF6] text-white shadow-lg shadow-purple-200 scale-110' 
                   : 'text-slate-400 hover:bg-white hover:text-slate-600 hover:shadow-sm'
                 }`}
               >
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                 </svg>
                 {activeTab === item.name && <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-1 h-4 bg-[#8B5CF6] rounded-l-full"></div>}
               </button>
             ))}
          </nav>

          {/* Bottom Action */}
          <div className="mt-auto">
             <button onClick={onLogout} className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-red-500 shadow-sm transition-colors">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
             </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col min-w-0 bg-[#F2F5FA] relative rounded-l-[3rem]">
          
          {/* Header Section */}
          <header className="h-32 px-10 flex items-center justify-between">
             
             {/* Brand Pill */}
             <div className="flex items-center">
                <div className="bg-white px-5 py-3 rounded-[2rem] shadow-sm flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
                   </div>
                   <span className="text-lg font-bold text-slate-700 tracking-tight">innrev.ai</span>
                </div>
             </div>

             {/* Center Search Pill - Exact replica of 'Going to | Dates' */}
             <div className="hidden lg:flex items-center bg-white p-2 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.03)] mx-auto">
                
                {/* Location Input */}
                <div className="flex items-center gap-4 px-6 py-2 border-r border-slate-100">
                   <div className="w-6 h-6 text-slate-400">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                   </div>
                   <div>
                      <p className="text-[11px] font-bold text-slate-400 leading-none mb-1">Going to</p>
                      <p className="text-sm font-bold text-slate-800 leading-none">Roswell, New Mexico, United States</p>
                   </div>
                </div>

                {/* Dates Input */}
                <div className="flex items-center gap-4 px-6 py-2">
                   <div className="w-6 h-6 text-slate-400">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                   </div>
                   <div>
                      <p className="text-[11px] font-bold text-slate-400 leading-none mb-1">Dates</p>
                      <p className="text-sm font-bold text-slate-800 leading-none">Jan 9 - Jan 10</p>
                   </div>
                </div>

                {/* Search Action */}
                <button className="w-12 h-12 rounded-full bg-white border border-slate-100 flex items-center justify-center hover:bg-slate-50 transition-colors">
                   <svg className="w-5 h-5 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                </button>
             </div>

             {/* User Profile */}
             <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden">
                    <img src="https://ui-avatars.com/api/?name=User+Profile&background=0D8ABC&color=fff" className="w-full h-full object-cover" />
                 </div>
             </div>

          </header>

          {/* Dashboard Content */}
          <div className="flex-1 overflow-y-auto px-10 pb-10 custom-scrollbar">
             {activeTab === 'Dashboard' ? <StudentDashboard /> : (
                <div className="h-full flex flex-col items-center justify-center opacity-30">
                   <p className="text-2xl font-bold text-slate-400">Module: {activeTab}</p>
                </div>
             )}
          </div>
        </main>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 0px; }
      `}</style>
    </div>
  );
};

export default StudentPortal;
