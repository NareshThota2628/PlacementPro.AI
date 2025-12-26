
import React, { useState } from 'react';

interface LoginPageProps {
  onLoginSuccess: () => void;
  onForgotPassword: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess, onForgotPassword }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Credentials: naresh@superadmin.com / 1234
    setTimeout(() => {
      if (email === 'naresh@superadmin.com' && password === '1234') {
        onLoginSuccess();
      } else {
        setError('Invalid credentials. Access denied.');
        setIsLoading(false);
      }
    }, 1200);
  };

  const bgImageUrl = "https://raw.githubusercontent.com/NareshThota2628/images/main/backgroundimage.jpeg";

  return (
    <div className="min-h-screen w-full relative flex items-center justify-center overflow-hidden font-sans bg-slate-900">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[60s] ease-linear"
        style={{ backgroundImage: `url('${bgImageUrl}')` }}
      >
        {/* Subtle overlay for contrast */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="container mx-auto px-10 md:px-20 lg:px-32 flex flex-col lg:flex-row items-center justify-between z-10 relative">
        
        {/* Left Section: Branding & Main Typography */}
        <div className="text-white max-w-2xl mb-16 lg:mb-0 animate-fade-in">
          <div className="flex flex-col mb-8">
            <div className="flex items-center gap-3">
               <span className="text-4xl font-black tracking-[0.25em] uppercase drop-shadow-xl">PLACEMENT</span>
               <div className="relative">
                  <svg className="w-10 h-10 rotate-45 text-white animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full blur-[2px]"></div>
               </div>
            </div>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black leading-[0.8] tracking-tighter mb-10 drop-shadow-2xl uppercase">
            EXPLORE<br />
            <span className="text-white/90">HORIZONS</span>
          </h1>
          
          <div className="space-y-6 max-w-lg">
            <p className="text-2xl md:text-3xl font-bold tracking-wide drop-shadow-xl text-white">
              Where Your Dream Careers <br/>Become Reality.
            </p>
            <p className="text-lg text-white/70 leading-relaxed font-medium">
              Embark on a journey where every corner of <br/>the professional world is within your reach.
            </p>
          </div>
        </div>

        {/* Right Section: The Denser Frosty Glass Login Card */}
        <div className="w-full max-w-[540px] animate-fade-in-delayed">
          {/* Dense Glassy Finish: bg-white/40, backdrop-blur-[40px] */}
          <div className="backdrop-blur-[40px] bg-white/40 border border-white/60 rounded-[3rem] p-12 md:p-16 shadow-[0_50px_100px_rgba(0,0,0,0.3)] relative overflow-hidden group transition-all duration-500">
            
            <form onSubmit={handleLogin} className="space-y-8 relative z-20">
              
              <div className="space-y-2">
                <label className="text-slate-800 text-[11px] font-black tracking-widest ml-1 uppercase">Email</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-7 py-5 bg-white/60 hover:bg-white/80 border border-white/40 rounded-2xl text-slate-900 placeholder:text-slate-500 font-bold outline-none shadow-sm focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-slate-800 text-[11px] font-black tracking-widest ml-1 uppercase">Password</label>
                <div className="relative">
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    required
                    className="w-full px-7 py-5 bg-white/60 hover:bg-white/80 border border-white/40 rounded-2xl text-slate-900 placeholder:text-slate-500 font-bold outline-none shadow-sm focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100/50 transition-all"
                  />
                  <div className="text-right mt-3">
                    <button 
                      type="button" 
                      onClick={onForgotPassword}
                      className="text-slate-600 hover:text-blue-600 text-xs font-black transition-colors"
                    >
                      Forgot password?
                    </button>
                  </div>
                </div>
              </div>

              {error && (
                <div className="p-3 bg-red-100/80 backdrop-blur-xl border border-red-200 rounded-xl text-red-600 text-xs font-black text-center animate-shake">
                  {error}
                </div>
              )}

              <button 
                type="submit" 
                disabled={isLoading}
                className={`w-full py-5 rounded-2xl font-black text-white tracking-[0.2em] uppercase transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3 ${
                  isLoading 
                  ? 'bg-blue-600/50 cursor-not-allowed' 
                  : 'bg-[#007AFF] hover:bg-[#0066FF] shadow-blue-500/30 hover:shadow-blue-500/40'
                }`}
              >
                {isLoading ? (
                  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : 'SIGN IN'}
              </button>

              <div className="flex items-center gap-6 py-2">
                <div className="h-[1.5px] flex-1 bg-slate-400/30 rounded-full"></div>
                <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">or</span>
                <div className="h-[1.5px] flex-1 bg-slate-400/30 rounded-full"></div>
              </div>

              <button 
                type="button"
                className="w-full py-5 bg-white/60 hover:bg-white/80 border border-white/40 rounded-2xl text-slate-700 font-black tracking-widest uppercase text-[11px] transition-all flex items-center justify-center gap-5 shadow-sm active:scale-95 group"
              >
                <div className="bg-white p-1 rounded-full scale-110 shadow-sm group-hover:scale-125 transition-transform">
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </div>
                Sign in with Google
              </button>

              <div className="text-center pt-2">
                <p className="text-slate-600 text-sm font-bold uppercase tracking-widest">
                  Are you new? <a href="#" className="text-blue-600 hover:text-blue-500 transition-all font-black decoration-blue-200">Create Account</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        .animate-fade-in { animation: fade-in 1.2s ease-out forwards; }
        .animate-fade-in-delayed { animation: fade-in 1.2s ease-out 0.4s forwards; opacity: 0; }
        .animate-shake { animation: shake 0.4s ease-in-out; }
      `}</style>
    </div>
  );
};

export default LoginPage;
