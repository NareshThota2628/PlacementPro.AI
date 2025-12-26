
import React, { useState } from 'react';

interface StudentLoginPageProps {
  onLoginSuccess: () => void;
}

const StudentLoginPage: React.FC<StudentLoginPageProps> = ({ onLoginSuccess }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLoginSuccess();
  };

  // The specific background image provided
  const cardBgImage = "https://raw.githubusercontent.com/NareshThota2628/images/main/WhatsApp%20Image%202025-12-26%20at%204.04.37%20PM.jpeg";

  return (
    <div className="min-h-screen bg-[#C4DDFE] flex items-center justify-center p-4 md:p-6 font-sans">
      {/* 
         Main Card Container 
         Significantly increased size to max-w-[1400px] and min-h-[800px] as requested.
      */}
      <div 
        className="w-full max-w-[1400px] min-h-[800px] rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(50,50,93,0.25)] overflow-hidden flex flex-col md:flex-row relative bg-white"
        style={{ 
            backgroundImage: `url('${cardBgImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Left Side Spacer - Occupies the image area (Students strips) */}
        <div className="hidden md:block w-full md:w-[50%]"></div>

        {/* Right Panel: Login Form Area */}
        <div className="w-full md:w-[50%] h-full relative flex flex-col justify-center items-center p-8 lg:p-16">
            
            {/* 
                Dense Glassy Card for Login 
                Wraps the form in a frosted glass container to float over the background.
            */}
            <div className="w-full max-w-[500px] backdrop-blur-[40px] bg-white/40 border border-white/60 rounded-[2.5rem] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.05)] relative">
                
                <div className="mb-10 text-center">
                    <h1 className="text-[42px] font-black text-slate-900 tracking-tighter mb-2 leading-none">
                        Welcome back.
                    </h1>
                    <p className="text-slate-600 font-bold text-sm tracking-wide">Enter your credentials to access the portal.</p>
                </div>

                {/* Social Buttons */}
                <div className="flex gap-4 mb-8">
                    <button type="button" className="flex-1 flex items-center justify-center gap-3 py-4 bg-white/80 border border-white/50 rounded-2xl hover:bg-white transition-all text-[13px] font-bold text-slate-600 shadow-sm active:scale-[0.98] group">
                        <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                        Google
                    </button>
                    <button type="button" className="flex-1 flex items-center justify-center gap-3 py-4 bg-white/80 border border-white/50 rounded-2xl hover:bg-white transition-all text-[13px] font-bold text-slate-600 shadow-sm active:scale-[0.98] group">
                        <svg className="w-6 h-6 text-[#1877F2] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                             <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        Facebook
                    </button>
                </div>

                {/* OR Divider */}
                <div className="flex items-center gap-4 mb-8 opacity-50">
                    <div className="flex-1 h-[1.5px] bg-slate-400/30 rounded-full"></div>
                    <span className="text-[11px] text-slate-500 font-black uppercase tracking-widest">or</span>
                    <div className="flex-1 h-[1.5px] bg-slate-400/30 rounded-full"></div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Input */}
                    <div className="space-y-2">
                        <label className="text-[11px] font-black uppercase tracking-wider text-slate-800 ml-1">Email Address</label>
                        <div className="relative group">
                            <input 
                                type="email" 
                                value={formData.email} 
                                onChange={(e) => setFormData({...formData, email: e.target.value})} 
                                className="w-full pl-12 pr-4 py-4 bg-white/60 hover:bg-white/80 border border-white/40 rounded-2xl text-slate-900 placeholder:text-slate-400 text-[15px] font-bold outline-none shadow-sm focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100/50 transition-all"
                                placeholder="name@example.com"
                            />
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-blue-500 transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </div>
                        </div>
                    </div>

                    {/* Password Input */}
                    <div className="space-y-2">
                        <label className="text-[11px] font-black uppercase tracking-wider text-slate-800 ml-1">Password</label>
                        <div className="relative group">
                            <input 
                                type={showPassword ? "text" : "password"}
                                value={formData.password} 
                                onChange={(e) => setFormData({...formData, password: e.target.value})} 
                                className="w-full pl-12 pr-12 py-4 bg-white/60 hover:bg-white/80 border border-white/40 rounded-2xl text-slate-900 placeholder:text-slate-400 text-[15px] font-bold outline-none shadow-sm focus:border-blue-400 focus:bg-white focus:ring-4 focus:ring-blue-100/50 transition-all"
                                placeholder="••••••••••••"
                            />
                             {/* Left Lock Icon */}
                             <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-blue-500 transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                            </div>
                            
                            {/* Right Eye Icon (Toggle) */}
                            <button 
                                type="button" 
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-blue-600 transition-colors cursor-pointer p-1"
                            >
                                {showPassword ? (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                        <div className="flex justify-end">
                            <a href="#" className="text-[12px] font-bold text-slate-500 hover:text-[#0066FF] transition-colors mt-1">Forgot Password?</a>
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        className="w-full py-5 bg-[#007AFF] text-white rounded-2xl font-black text-[16px] shadow-lg shadow-blue-500/30 hover:bg-[#0066FF] hover:shadow-blue-500/40 transition-all transform active:scale-[0.98] mt-6 tracking-wide"
                    >
                        LOGIN
                    </button>
                </form>
            </div>

        </div>
      </div>
    </div>
  );
};

export default StudentLoginPage;
