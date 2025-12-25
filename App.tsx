
import React, { useState } from 'react';
import LoginPage from './pages/auth/Login/LoginPage';
import ForgotPasswordPage from './pages/auth/Login/ForgotPasswordPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'ready' | 'login' | 'forgot-password' | 'dashboard'>('ready');

  // Simple routing logic for the sequential development flow
  if (currentPage === 'ready') {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30 flex items-center justify-center p-6">
        <div className="max-w-xl text-center">
          <h1 className="text-5xl font-extrabold text-white mb-6">PlacementPro<span className="text-indigo-500">.AI</span></h1>
          <p className="text-slate-400 text-lg mb-10">Analysis complete. Ready to enter the Authentication Layer.</p>
          <button 
            onClick={() => setCurrentPage('login')}
            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(79,70,229,0.4)]"
          >
            Access Super Admin Portal
          </button>
        </div>
      </div>
    );
  }

  if (currentPage === 'login') {
    return (
      <LoginPage 
        onLoginSuccess={() => setCurrentPage('dashboard')} 
        onForgotPassword={() => setCurrentPage('forgot-password')}
      />
    );
  }

  if (currentPage === 'forgot-password') {
    return <ForgotPasswordPage onBackToLogin={() => setCurrentPage('login')} />;
  }

  if (currentPage === 'dashboard') {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white p-10">
        <div className="h-20 w-20 bg-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(16,185,129,0.4)]">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold">Authentication Successful</h1>
        <p className="text-slate-400 mt-2 italic">Welcome back, Super Admin Naresh.</p>
        <button 
          onClick={() => setCurrentPage('login')}
          className="mt-8 text-slate-500 hover:text-white text-sm underline underline-offset-4"
        >
          Logout
        </button>
      </div>
    );
  }

  return null;
};

export default App;
