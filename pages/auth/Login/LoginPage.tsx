
import React, { useState } from 'react';

interface LoginPageProps {
  onLoginSuccess: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Hardcoded credentials: naresh@superadmin.com / 1234
    setTimeout(() => {
      if (email === 'naresh@superadmin.com' && password === '1234') {
        onLoginSuccess();
      } else {
        setError('Invalid credentials. Check your email and password.');
        setIsLoading(false);
      }
    }, 1200);
  };

  return (
    <div className="min-h-screen w-full relative flex items-center justify-center overflow-hidden font-sans">
      {/* High-Quality Campus Background - Using a similar high-res university asset */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-100 transition-transform duration-[20s] ease-out animate-background-zoom"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Floating Academic Icons - Exact placement from reference */}
      <div className="absolute inset-0 pointer-events-none z-[5]">
        <div className="absolute top-[15%] right-[35%] opacity-40 animate-float-slow">
          <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
        </div>
        <div className="absolute top-[28%] right-[42%] opacity-30 animate-float-reverse">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <div className="absolute top-[20%] right-[25%] opacity-20">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-10 md:px-20 lg:px-32 flex flex-col lg:flex-row items-center justify-between z-10">
        
        {/* Left Section: Matching "EXPLORE HORIZONS" Typography */}
        <div className="text-white max-w-2xl mb-12 lg:mb-0 animate-fade-in-left">
          <div className="flex items-center gap-2 mb-4 opacity-90">
            <div className="h-0.5 w-8 bg-white/60"></div>
            <span className="text-2xl font-black tracking-[0.3em] uppercase">Placement</span>
            <svg className="w-6 h-6 rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black leading-[0.85] tracking-tight mb-8 drop-shadow-2xl">
            EXPLORE<br />
            <span className="text-white">FUTURE</span>
          </h1>
          
          <div className="space-y-6 max-w-lg">
            <p className="text-2xl font-bold tracking-wide drop-shadow-md">
              Where Your Career Ambitions Become Reality.
            </p>
            <p className="text-lg text-white/80 leading-relaxed font-medium">
              Join the elite ecosystem of institutions and corporates. Navigate the placement landscape with AI-driven precision.
            </p>
          </div>
        </div>

        {/* Right Section: The Glass Card */}
        <div className="w-full max-w-[480px] animate-fade-in-right">
          <div className="backdrop-blur-[60px] bg-white/10 border border-white/20 rounded-[3rem] p-10 md:p-14 shadow-[0_40px_100px_rgba(0,0,0,0.4)] relative">
            <form onSubmit={handleLogin} className="space-y-8 relative z-20">
              
              {error && (
                <div className="p-3 bg-red-500/40 border border-red-500/50 rounded-xl text-white text-xs font-bold text-center animate-shake">
                  {error}
                </div>
              )}

              <div className="space-y-3">
                <label className="text-white/90 text-sm font-semibold ml-1">Email</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-6 py-4 bg-white border-none outline-none rounded-xl text-slate-700 placeholder:text-slate-400 font-medium transition-all focus:ring-4 focus:ring-blue-500/30"
                />
              </div>

              <div className="space-y-3">
                <label className="text-white/90 text-sm font-semibold ml-1">Password</label>
                <div className="relative">
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    required
                    className="w-full px-6 py-4 bg-white border-none outline-none rounded-xl text-slate-700 placeholder:text-slate-400 font-medium tracking-widest transition-all focus:ring-4 focus:ring-blue-500/30"
                  />
                  <div className="text-right mt-3">
                    <a href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Forgot password?</a>
                  </div>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isLoading}
                className={`w-full py-4 rounded-xl font-bold text-white tracking-widest uppercase transition-all shadow-xl ${
                  isLoading 
                  ? 'bg-blue-400/50 cursor-not-allowed' 
                  : 'bg-[#2587FF] hover:bg-[#1a76e6] shadow-[#2587FF]/40 active:scale-[0.98]'
                }`}
              >
                {isLoading ? 'Verifying...' : 'SIGN IN'}
              </button>

              <div className="flex items-center gap-4 py-1">
                <div className="h-px flex-1 bg-white/20"></div>
                <span className="text-white/40 text-[10px] font-black uppercase tracking-widest">or</span>
                <div className="h-px flex-1 bg-white/20"></div>
              </div>

              <button 
                type="button"
                className="w-full py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white font-bold transition-all flex items-center justify-center gap-4"
              >
                <div className="bg-white p-1 rounded-full">
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </div>
                Sign in with Google
              </button>

              <div className="text-center">
                <p className="text-white/80 text-sm">
                  Are you new? <a href="#" className="text-white font-bold underline underline-offset-4 hover:text-blue-200 transition-colors">Contact Admin</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(4deg); }
        }
        @keyframes background-zoom {
          from { transform: scale(1); }
          to { transform: scale(1.15); }
        }
        @keyframes fade-in-left {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-in-right {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-6px); }
          75% { transform: translateX(6px); }
        }
        .animate-float-slow { animation: float 10s ease-in-out infinite; }
        .animate-float-reverse { animation: float 12s ease-in-out infinite reverse; }
        .animate-background-zoom { animation: background-zoom 30s ease-out forwards; }
        .animate-fade-in-left { animation: fade-in-left 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-in-right { animation: fade-in-right 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards; opacity: 0; }
        .animate-shake { animation: shake 0.3s ease-in-out 0s 2; }
      `}</style>
    </div>
  );
};

export default LoginPage;
