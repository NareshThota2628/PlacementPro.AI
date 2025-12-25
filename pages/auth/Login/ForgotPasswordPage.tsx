
import React, { useState } from 'react';

interface ForgotPasswordPageProps {
  onBackToLogin: () => void;
}

const ForgotPasswordPage: React.FC<ForgotPasswordPageProps> = ({ onBackToLogin }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulated recovery link sending
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 1500);
  };

  const bgImageUrl = "https://raw.githubusercontent.com/NareshThota2628/images/main/backgroundimage.jpeg";

  return (
    <div className="min-h-screen w-full relative flex items-center justify-center overflow-hidden font-sans bg-slate-900">
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${bgImageUrl}')` }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="container mx-auto px-10 md:px-20 lg:px-32 flex flex-col lg:flex-row items-center justify-between z-10 relative">
        {/* Left Section Branding */}
        <div className="text-white max-w-2xl mb-16 lg:mb-0 animate-fade-in">
          <div className="flex flex-col mb-8">
            <div className="flex items-center gap-3">
               <span className="text-4xl font-black tracking-[0.25em] uppercase drop-shadow-xl">PLACEMENT</span>
               <div className="relative">
                  <svg className="w-10 h-10 rotate-45 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
               </div>
            </div>
          </div>
          
          <h1 className="text-7xl md:text-9xl font-black leading-[0.8] tracking-tighter mb-10 drop-shadow-2xl uppercase">
            RECOVER<br />
            <span className="text-white/90">ACCESS</span>
          </h1>
          
          <div className="space-y-6 max-w-lg">
            <p className="text-2xl md:text-3xl font-bold tracking-wide drop-shadow-xl text-white">
              Securing Your Professional <br/>Journey.
            </p>
            <p className="text-lg text-white/70 leading-relaxed font-medium">
              Forgot your key? No worries. Provide your authorized email and we'll help you get back on track.
            </p>
          </div>
        </div>

        {/* Right Section Recovery Pallet (Glassy Look) */}
        <div className="w-full max-w-[540px] animate-fade-in-delayed">
          <div className="backdrop-blur-[60px] bg-white/10 border border-white/20 rounded-[3rem] p-12 md:p-16 shadow-[0_60px_150px_rgba(0,0,0,0.4)] relative">
            {!isSent ? (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="mb-6">
                  <h2 className="text-white text-3xl font-black tracking-tight mb-2">Password Recovery</h2>
                  <p className="text-white/60 text-sm font-medium">Enter your email address to receive instructions.</p>
                </div>

                <div className="space-y-3">
                  <label className="text-white/80 text-sm font-bold tracking-wide ml-1">Email</label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="authorized@placementpro.ai"
                    required
                    className="w-full px-7 py-5 bg-white border-none outline-none rounded-xl text-slate-800 placeholder:text-slate-400 font-semibold shadow-xl transition-all focus:ring-4 focus:ring-blue-500/30"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full py-5 rounded-xl font-black text-white tracking-[0.2em] uppercase transition-all shadow-2xl active:scale-95 flex items-center justify-center gap-3 ${
                    isSubmitting 
                    ? 'bg-blue-600/50 cursor-not-allowed' 
                    : 'bg-[#2587FF] hover:bg-[#1a76e6] shadow-[#2587FF]/50'
                  }`}
                >
                  {isSubmitting ? 'SENDING LINK...' : 'SEND RECOVERY LINK'}
                </button>

                <div className="text-center pt-4">
                  <button 
                    type="button"
                    onClick={onBackToLogin}
                    className="text-white hover:text-blue-200 transition-all font-black text-xs uppercase tracking-widest underline underline-offset-8 decoration-white/30"
                  >
                    Back to Login
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-emerald-500/20 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-white text-3xl font-black tracking-tight mb-4">Check Your Inbox</h2>
                <p className="text-white/70 font-medium mb-10 leading-relaxed px-4">
                  Recovery instructions sent to <span className="text-white font-bold">{email}</span>.
                </p>
                <button 
                  onClick={onBackToLogin}
                  className="w-full py-5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white font-black tracking-widest uppercase text-sm transition-all"
                >
                  Return to Portal
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 1.2s ease-out forwards; }
        .animate-fade-in-delayed { animation: fade-in 1.2s ease-out 0.4s forwards; opacity: 0; }
      `}</style>
    </div>
  );
};

export default ForgotPasswordPage;
