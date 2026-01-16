
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { TimeLeft } from './types';
import { generateFunnyAdviceBatch } from './services/geminiService';
import CountdownCard from './components/CountdownCard';
import AnimatedScene from './components/AnimatedScene';
import { Analytics } from '@vercel/analytics/react';

const TARGET_DATE = new Date('2026-01-30T00:00:00');

const App: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [adviceQueue, setAdviceQueue] = useState<string[]>([]);
  const [currentAdvice, setCurrentAdvice] = useState<string>("নাবিলা আর স্পাইডারম্যান, তোমাদের জন্য জবরদস্ত টিপস রেডি হচ্ছে...");
  const [isFetching, setIsFetching] = useState(false);
  const adviceIndexRef = useRef(0);

  const calculateTimeLeft = useCallback(() => {
    const difference = +TARGET_DATE - +new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        total: difference
      };
    }
    return null;
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const fetchNewAdvices = async () => {
    if (isFetching) return;
    setIsFetching(true);
    const newAdvices = await generateFunnyAdviceBatch();
    setAdviceQueue(prev => [...prev, ...newAdvices].slice(-100));
    setIsFetching(false);
  };

  useEffect(() => {
    fetchNewAdvices();
  }, []);

  useEffect(() => {
    const rotationTimer = setInterval(() => {
      if (adviceQueue.length > 0) {
        setCurrentAdvice(adviceQueue[adviceIndexRef.current]);
        adviceIndexRef.current = (adviceIndexRef.current + 1) % adviceQueue.length;
      }
    }, 6000);
    return () => clearInterval(rotationTimer);
  }, [adviceQueue]);

  if (!timeLeft) {
    return (
      <div className="h-screen w-screen bg-black flex items-center justify-center text-center p-6 overflow-hidden">
        <h1 className="text-4xl md:text-7xl font-bold text-rose-500 dancing-font animate-pulse">
          💍 বিয়ের লগ্ন শুরু! নাবিলা ও স্পাইডারম্যান 💍
        </h1>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-between p-6 md:p-10 relative overflow-hidden text-white bg-black selection:bg-rose-500/30">
      <AnimatedScene />

      {/* Cinematic Top Section */}
      <div className="w-full text-center space-y-1 z-10 relative mt-2 md:mt-4">
        <h1 className="text-5xl md:text-9xl font-black text-white dancing-font drop-shadow-[0_0_30px_rgba(225,29,72,1)] tracking-tighter filter brightness-125">
          Nabila & Spiderman
        </h1>
        <div className="flex items-center justify-center gap-4 opacity-70">
          <div className="h-[1px] w-12 bg-rose-500"></div>
          <p className="text-sm md:text-xl font-black text-rose-300 Hind-font tracking-[0.4em] uppercase">
            Wedding Countdown
          </p>
          <div className="h-[1px] w-12 bg-rose-500"></div>
        </div>
      </div>

      {/* Mid Section: Countdown & Advice */}
      <div className="w-full max-w-6xl flex flex-col items-center justify-center space-y-8 md:space-y-12 z-10 relative flex-grow py-4">
        
        {/* Countdown Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full justify-center scale-90 md:scale-100">
          <CountdownCard value={timeLeft.days} label="দিন" />
          <CountdownCard value={timeLeft.hours} label="ঘণ্টা" />
          <CountdownCard value={timeLeft.minutes} label="মিনিট" />
          <CountdownCard value={timeLeft.seconds} label="সেকেন্ড" />
        </div>

        {/* Cinematic Advice Card */}
        <div className="w-full max-w-4xl px-4">
          <div className="bg-black/70 backdrop-blur-[100px] p-8 md:p-14 rounded-[3.5rem] shadow-[0_0_150px_rgba(0,0,0,1)] border border-white/10 relative overflow-hidden min-h-[220px] md:min-h-[280px] flex flex-col justify-center transform transition-all duration-1000">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-900/20 via-transparent to-blue-900/20 opacity-30"></div>
            
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-rose-800 text-[10px] md:text-xs font-black uppercase tracking-[0.6em] px-12 py-2 rounded-b-3xl shadow-2xl z-20 border-x border-b border-white/20 whitespace-nowrap">
              Marriage Guidance
            </div>

            <div className="relative z-10 space-y-6">
              <p className="text-2xl md:text-5xl font-black text-white leading-tight italic text-center drop-shadow-[0_4px_25px_rgba(0,0,0,1)] animate-fade-in">
                "{currentAdvice}"
              </p>
              <div className="flex items-center justify-center gap-3">
                 <div className="h-[2px] w-20 bg-gradient-to-r from-transparent to-rose-600"></div>
                 <div className="text-rose-600 text-3xl animate-pulse">🕷️</div>
                 <div className="h-[2px] w-20 bg-gradient-to-l from-transparent to-rose-600"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Footer */}
      <div className="w-full flex justify-between items-end z-10 relative pb-4 px-6">
        <div className="flex flex-col border-l-4 border-rose-600 pl-6 py-1 bg-black/20 backdrop-blur-sm pr-6 rounded-r-xl">
          <span className="text-xs font-black text-rose-500 tracking-[0.4em] uppercase">Save The Date</span>
          <span className="text-3xl font-black text-white tracking-widest tabular-nums">30.01.2026</span>
        </div>
        <div className="text-[10px] md:text-xs font-bold text-white/30 uppercase tracking-[0.6em] text-right max-w-[200px] leading-relaxed">
          Spiderman's Toughest Challenge: <br/>Domestic Life
        </div>
      </div>

      <style>{`
        .Hind-font { font-family: 'Hind Siliguri', sans-serif; }
        .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
      <Analytics />
    </div>
  );
};

export default App;
