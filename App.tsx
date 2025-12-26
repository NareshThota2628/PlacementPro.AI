
import React, { useState } from 'react';
import LoginPage from './pages/auth/Login/LoginPage';
import StudentLoginPage from './pages/auth/StudentLogin/StudentLoginPage';
import ForgotPasswordPage from './pages/auth/Login/ForgotPasswordPage';
import SuperAdminPortal from './pages/super-admin/SuperAdminPortal';
import StudentPortal from './pages/student/StudentPortal';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'ready' | 'login' | 'student-login' | 'forgot-password' | 'dashboard'>('ready');
  const [userRole, setUserRole] = useState<'super_admin' | 'student' | null>(null);

  const handleSuperAdminLogin = () => {
    setUserRole('super_admin');
    setCurrentPage('dashboard');
  };

  const handleStudentLogin = () => {
    setUserRole('student');
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setUserRole(null);
    setCurrentPage('ready');
  };

  if (currentPage === 'ready') {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-indigo-500/30 flex items-center justify-center p-6">
        <div className="max-w-xl text-center">
          <h1 className="text-5xl font-extrabold text-white mb-6">PlacementPro<span className="text-indigo-500">.AI</span></h1>
          <p className="text-slate-400 text-lg mb-10 italic">Enterprise Portal Ready. Choose your entry point.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setCurrentPage('login')}
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-black tracking-widest transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(79,70,229,0.5)] active:scale-95"
            >
              SUPER ADMIN
            </button>
            <button 
              onClick={() => setCurrentPage('student-login')}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-black tracking-widest transition-all transform hover:scale-105 border border-white/20 active:scale-95"
            >
              STUDENT PORTAL
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentPage === 'login') {
    return (
      <LoginPage 
        onLoginSuccess={handleSuperAdminLogin} 
        onForgotPassword={() => setCurrentPage('forgot-password')}
      />
    );
  }

  if (currentPage === 'student-login') {
    return (
      <StudentLoginPage 
        onLoginSuccess={handleStudentLogin}
      />
    );
  }

  if (currentPage === 'forgot-password') {
    return <ForgotPasswordPage onBackToLogin={() => setCurrentPage('login')} />;
  }

  if (currentPage === 'dashboard') {
    if (userRole === 'student') {
      return <StudentPortal onLogout={handleLogout} />;
    }
    // Default to Super Admin if role is super_admin or null (fallback)
    return <SuperAdminPortal onLogout={handleLogout} />;
  }

  return null;
};

export default App;
