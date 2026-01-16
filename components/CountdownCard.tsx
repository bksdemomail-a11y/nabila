
import React from 'react';

interface CountdownCardProps {
  value: number;
  label: string;
}

const CountdownCard: React.FC<CountdownCardProps> = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center bg-black/60 backdrop-blur-2xl p-6 rounded-[2.5rem] shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/5 w-28 md:w-36 animate-fade-in transition-all duration-500 hover:scale-110 hover:bg-black/80 hover:border-rose-500/30 group relative overflow-hidden">
      {/* Dynamic glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-br from-rose-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-lg"></div>
      
      <span className="text-4xl md:text-6xl font-black text-white tabular-nums drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] group-hover:text-rose-400 transition-colors z-10">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-xs md:text-sm font-bold text-rose-300 uppercase tracking-widest mt-2 group-hover:text-white transition-colors z-10 opacity-70 group-hover:opacity-100">
        {label}
      </span>
      
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-rose-500/0 group-hover:bg-rose-500/60 transition-all duration-500 shadow-[0_-5px_15px_rgba(225,29,72,0.4)]"></div>
    </div>
  );
};

export default CountdownCard;
