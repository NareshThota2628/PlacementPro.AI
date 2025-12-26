
import React from 'react';

const StudentDashboard: React.FC = () => {
  
  // Custom Circular Progress for Top Cards
  const MiniCircleChart = ({ percentage, color }: { percentage: number, color: string }) => {
    return (
      <div className="relative w-24 h-24 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90">
          <circle cx="48" cy="48" r="36" stroke="#F1F5F9" strokeWidth="8" fill="transparent" />
          <circle 
            cx="48" 
            cy="48" 
            r="36" 
            stroke={color} 
            strokeWidth="8" 
            fill="transparent" 
            strokeDasharray={2 * Math.PI * 36} 
            strokeDashoffset={(2 * Math.PI * 36) - (percentage / 100) * (2 * Math.PI * 36)} 
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute text-lg font-black text-slate-800">{percentage}%</span>
        <span className="absolute text-[8px] font-bold text-slate-400 mt-8">Occupancy</span>
      </div>
    );
  };

  // Custom Gauge Chart for Middle Cards
  const GaugeChart = ({ percentage, color1, color2 }: { percentage: number, color1: string, color2: string }) => {
    return (
       <div className="relative w-full h-32 flex items-end justify-center overflow-hidden">
          {/* Background Arc */}
          <div className="absolute top-4 w-56 h-56 rounded-full border-[18px] border-slate-100"></div>
          
          {/* Gradient Arc (Simplified with SVG for gradient stroke) */}
          <svg viewBox="0 0 200 100" className="w-56 h-28 relative z-10">
             <defs>
               <linearGradient id={`grad-${color1}-${color2}`} x1="0%" y1="0%" x2="100%" y2="0%">
                 <stop offset="0%" stopColor={color1} />
                 <stop offset="100%" stopColor={color2} />
               </linearGradient>
             </defs>
             <path 
               d="M 20 100 A 80 80 0 0 1 180 100" 
               fill="none" 
               stroke={`url(#grad-${color1}-${color2})`} 
               strokeWidth="18" 
               strokeLinecap="round"
               strokeDasharray="251.2"
               strokeDashoffset={251.2 - (251.2 * percentage / 100)}
             />
          </svg>
          
          {/* Percentage Text */}
          <div className="absolute bottom-0 mb-2 text-center">
             <span className="text-4xl font-black text-slate-800">{percentage}%</span>
          </div>
       </div>
    );
  };

  return (
    <div className="space-y-8 animate-fade-in">
      
      {/* SECTION 1: Hotels Overview (Top Cards) */}
      <div>
         <h2 className="text-lg font-bold text-slate-800 mb-5 ml-1">Hotels Overview</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white rounded-[2rem] p-6 shadow-sm flex flex-col justify-between h-[220px]">
               <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#1E3A8A] flex items-center justify-center text-white font-black text-xs">H</div>
                  <div>
                     <h3 className="text-sm font-bold text-slate-900 leading-tight">Roswell, New Mexico</h3>
                     <p className="text-[10px] text-slate-400 font-bold mt-0.5 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span> United states
                     </p>
                  </div>
               </div>
               <div className="flex items-center justify-between mt-2">
                  <MiniCircleChart percentage={85} color="#EC4899" />
                  <div className="space-y-3 mr-2">
                     <div className="flex items-center justify-between gap-6 bg-slate-50 px-3 py-1.5 rounded-lg">
                        <span className="text-[10px] font-bold text-slate-400 uppercase">ADR</span>
                        <span className="text-xs font-black text-slate-800">$130</span>
                     </div>
                     <div className="flex items-center justify-between gap-6 px-3 py-1.5">
                        <span className="text-[10px] font-bold text-slate-400 uppercase">RevPar</span>
                        <span className="text-xs font-black text-slate-800">$115</span>
                     </div>
                  </div>
               </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[2rem] p-6 shadow-sm flex flex-col justify-between h-[220px]">
               <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#065F46] flex items-center justify-center text-white font-black text-xs">H</div>
                  <div>
                     <h3 className="text-sm font-bold text-slate-900 leading-tight">Homewood Suites</h3>
                     <p className="text-[10px] text-slate-400 font-bold mt-0.5 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span> United states
                     </p>
                  </div>
               </div>
               <div className="flex items-center justify-between mt-2">
                  <MiniCircleChart percentage={40} color="#EC4899" />
                  <div className="space-y-3 mr-2">
                     <div className="flex items-center justify-between gap-6 px-3 py-1.5">
                        <span className="text-[10px] font-bold text-slate-400 uppercase">ADR</span>
                        <span className="text-xs font-black text-slate-800">$150</span>
                     </div>
                     <div className="flex items-center justify-between gap-6 px-3 py-1.5">
                        <span className="text-[10px] font-bold text-slate-400 uppercase">RevPar</span>
                        <span className="text-xs font-black text-slate-800">$105/h</span>
                     </div>
                  </div>
               </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[2rem] p-6 shadow-sm flex flex-col justify-between h-[220px]">
               <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#9F1239] flex items-center justify-center text-white font-black text-xs">BW</div>
                  <div>
                     <h3 className="text-sm font-bold text-slate-900 leading-tight">Best Western Plus</h3>
                     <p className="text-[10px] text-slate-400 font-bold mt-0.5 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span> United states
                     </p>
                  </div>
               </div>
               <div className="flex items-center justify-between mt-2">
                  <MiniCircleChart percentage={65} color="#9F1239" />
                  <div className="space-y-3 mr-2">
                     <div className="flex items-center justify-between gap-6 px-3 py-1.5">
                        <span className="text-[10px] font-bold text-slate-400 uppercase">ADR</span>
                        <span className="text-xs font-black text-slate-800">$120</span>
                     </div>
                     <div className="flex items-center justify-between gap-6 px-3 py-1.5">
                        <span className="text-[10px] font-bold text-slate-400 uppercase">RevPar</span>
                        <span className="text-xs font-black text-slate-800">$95/h</span>
                     </div>
                  </div>
               </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-[2rem] p-6 shadow-sm flex flex-col justify-between h-[220px]">
               <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#065F46] flex items-center justify-center text-white font-black text-xs">Q</div>
                  <div>
                     <h3 className="text-sm font-bold text-slate-900 leading-tight">Homewood Suites</h3>
                     <p className="text-[10px] text-slate-400 font-bold mt-0.5 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span> United states
                     </p>
                  </div>
               </div>
               <div className="flex items-center justify-between mt-2">
                  <MiniCircleChart percentage={70} color="#EC4899" />
                  <div className="space-y-3 mr-2">
                     <div className="flex items-center justify-between gap-6 px-3 py-1.5">
                        <span className="text-[10px] font-bold text-slate-400 uppercase">ADR</span>
                        <span className="text-xs font-black text-slate-800">$88</span>
                     </div>
                     <div className="flex items-center justify-between gap-6 px-3 py-1.5">
                        <span className="text-[10px] font-bold text-slate-400 uppercase">RevPar</span>
                        <span className="text-xs font-black text-slate-800">$75</span>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
         
         {/* SECTION 2: Your Overview (Gauge Cards) */}
         <div className="col-span-12 xl:col-span-8">
            <h2 className="text-lg font-bold text-slate-800 mb-5 ml-1">Your Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               
               {/* Gauge Card 1 */}
               <div className="bg-white rounded-[2.5rem] p-8 shadow-sm h-full flex flex-col justify-between">
                  <div className="flex items-center gap-3">
                     <div className="text-slate-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                     </div>
                     <span className="text-sm font-bold text-slate-900">Hotel 1 OCC</span>
                  </div>
                  
                  <div className="flex-1 flex items-center justify-center py-6">
                     <GaugeChart percentage={80} color1="#F9A8D4" color2="#818CF8" />
                  </div>

                  <div className="space-y-4">
                     <div className="flex items-center justify-between px-6 py-4 bg-[#F8FAFC] rounded-2xl">
                        <div>
                           <p className="text-[10px] font-bold text-slate-400">Your Property ADR</p>
                           <p className="text-xl font-black text-slate-800 mt-1">$90</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-400 shadow-sm border border-slate-100">
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                        </div>
                     </div>
                     <div className="flex items-center justify-between px-6 py-4 bg-[#F8FAFC] rounded-2xl">
                        <div>
                           <p className="text-[10px] font-bold text-slate-400">Comp Set ADR</p>
                           <p className="text-xl font-black text-slate-800 mt-1">$85</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-400 shadow-sm border border-slate-100">
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Gauge Card 2 */}
               <div className="bg-white rounded-[2.5rem] p-8 shadow-sm h-full flex flex-col justify-between">
                  <div className="flex items-center gap-3">
                     <div className="text-slate-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                     </div>
                     <span className="text-sm font-bold text-slate-900">Hotel 2 OCC</span>
                  </div>
                  
                  <div className="flex-1 flex items-center justify-center py-6">
                     <GaugeChart percentage={70} color1="#F9A8D4" color2="#818CF8" />
                  </div>

                  <div className="space-y-4">
                     <div className="flex items-center justify-between px-6 py-4 bg-[#F8FAFC] rounded-2xl">
                        <div>
                           <p className="text-[10px] font-bold text-slate-400">Your Property ADR</p>
                           <p className="text-xl font-black text-slate-800 mt-1">$90</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-400 shadow-sm border border-slate-100">
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                        </div>
                     </div>
                     <div className="flex items-center justify-between px-6 py-4 bg-[#F8FAFC] rounded-2xl">
                        <div>
                           <p className="text-[10px] font-bold text-slate-400">Comp Set ADR</p>
                           <p className="text-xl font-black text-slate-800 mt-1">$85</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-400 shadow-sm border border-slate-100">
                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
         </div>

         {/* SECTION 3: Hotels ADR (List) */}
         <div className="col-span-12 xl:col-span-4">
             <div className="flex items-center justify-between mb-4 px-1">
                <div className="flex flex-col">
                  <h2 className="text-lg font-bold text-slate-800">Hotels ADR</h2>
                  <span className="text-[10px] font-bold text-slate-400">Hotels</span>
                </div>
                <div className="flex gap-2 items-center">
                   <button className="px-4 py-1.5 bg-white rounded-full text-[10px] font-bold text-slate-400 hover:text-slate-600 shadow-sm transition-colors">Filter</button>
                   <button className="px-2 py-1.5 bg-white rounded-full text-[10px] font-bold text-slate-400 hover:text-slate-600 shadow-sm">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/></svg>
                   </button>
                   <span className="text-[10px] font-bold text-slate-400 ml-2">ADR</span>
                </div>
             </div>
             
             <div className="space-y-3 h-auto">
                {[
                   { name: 'Holiday Inn Express', loc: 'United states', price: '$130', logo: 'H', color: '#1E3A8A' },
                   { name: 'Homewood Suites', loc: 'United states', price: '$130', logo: 'S', color: '#065F46' },
                   { name: 'Best Western Plus', loc: 'United states', price: '$130', logo: 'B', color: '#9F1239' },
                   { name: 'Homewood Suites', loc: 'United states', price: '$130', logo: 'H', color: '#065F46' },
                ].map((item, i) => (
                   <div key={i} className="flex items-center justify-between p-4 bg-white rounded-[1.5rem] shadow-sm hover:shadow-md transition-all cursor-pointer group border border-transparent hover:border-slate-50">
                      <div className="flex items-center gap-4">
                         <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-xs shadow-md" style={{ backgroundColor: item.color }}>
                            {item.logo}
                         </div>
                         <div>
                            <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                            <p className="text-[10px] text-slate-400 font-bold mt-0.5 flex items-center gap-1">
                               <svg className="w-3 h-3 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                               {item.loc}
                            </p>
                         </div>
                      </div>
                      <div className="px-4 py-2 bg-[#F8FAFC] rounded-xl group-hover:bg-white border border-slate-100 group-hover:shadow-sm transition-all">
                         <span className="text-xs font-black text-slate-800">{item.price}</span>
                      </div>
                   </div>
                ))}
             </div>
         </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
