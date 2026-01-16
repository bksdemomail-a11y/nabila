
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { TimeLeft } from './types';
import { generateFunnyAdviceBatch } from './services/geminiService';
import CountdownCard from './components/CountdownCard';
import AnimatedScene from './components/AnimatedScene';

const TARGET_DATE = new Date('2026-01-30T00:00:00');

const App: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [adviceQueue, setAdviceQueue] = useState<string[]>([]);
  const [currentAdvice, setCurrentAdvice] = useState<string>("নাবিলা আর স্পাইডারম্যান, একটু দাঁড়াও... তোমাদের জন্য টিপস রেডি করছি!");
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
      const remaining = calculateTimeLeft();
      setTimeLeft(remaining);
    }, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const fetchNewAdvices = async () => {
    if (isFetching) return;
    setIsFetching(true);
    const newAdvices = await generateFunnyAdviceBatch();
    setAdviceQueue(prev => {
      const combined = [...prev, ...newAdvices];
      return combined.slice(-300);
    });
    setIsFetching(false);
  };

  useEffect(() => {
    const initialLoad = async () => {
      await fetchNewAdvices();
    };
    initialLoad();
  }, []);

  useEffect(() => {
    const rotationTimer = setInterval(() => {
      if (adviceQueue.length > 0) {
        setCurrentAdvice(adviceQueue[adviceIndexRef.current]);
        adviceIndexRef.current = (adviceIndexRef.current + 1) % adviceQueue.length;
        
        if (adviceQueue.length < 30 && !isFetching) {
          fetchNewAdvices();
        }
      }
    }, 5000);

    return () => clearInterval(rotationTimer);
  }, [adviceQueue, isFetching]);

  if (!timeLeft) {
    return (
      <div className="h-screen bg-black flex items-center justify-center text-center p-6 overflow-hidden">
        <h1 className="text-4xl font-bold text-rose-500 dancing-font animate-pulse">
          💍 বিয়ের লগ্ন এসে গেছে! নাবিলা ও স্পাইডারম্যান 💍
        </h1>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-between p-6 md:p-12 relative overflow-hidden text-white font-sans selection:bg-rose-500/30 bg-black">
      <AnimatedScene />

      {/* Content Header */}
      <div className="w-full text-center space-y-2 z-10 relative">
        <h1 className="text-5xl md:text-8xl font-black text-white dancing-font drop-shadow-[0_0_15px_rgba(225,29,72,0.8)] tracking-tighter">
          Nabila & Spiderman
        </h1>
        <p className="text-lg md:text-2xl font-bold text-rose-200/80 Hind-font drop-shadow-lg tracking-widest uppercase">
          বিয়ের কাউন্টডাউন
        </p>
      </div>

      {/* Main Container for Countdown and Advice */}
      <div className="w-full max-w-5xl flex flex-col items-center justify-center space-y-12 z-10 relative flex-grow">
        
        {/* Countdown Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full justify-center">
          <CountdownCard value={timeLeft.days} label="দিন" />
          <CountdownCard value={timeLeft.hours} label="ঘণ্টা" />
          <CountdownCard value={timeLeft.minutes} label="মিনিট" />
          <CountdownCard value={timeLeft.seconds} label="সেকেন্ড" />
        </div>

        {/* Advice Card */}
        <div className="w-full max-w-3xl">
          <div className="bg-black/40 backdrop-blur-[60px] p-8 md:p-16 rounded-[3rem] shadow-[0_0_100px_rgba(0,0,0,1)] border border-white/5 relative overflow-hidden flex flex-col justify-center min-h-[280px] group">
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-900/10 via-transparent to-blue-900/10 opacity-30"></div>
            
            <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-rose-700/80 text-[10px] font-black uppercase tracking-[0.5em] px-8 py-2 rounded-b-2xl shadow-xl z-20">
              Marriage Secrets
            </div>

            <div className="relative z-10 space-y-6">
              <p className="text-2xl md:text-5xl font-bold text-white leading-tight italic text-center drop-shadow-[0_2px_10px_rgba(0,0,0,1)] animate-fade-in px-4">
                "{currentAdvice}"
              </p>
              <div className="flex items-center justify-center gap-2">
                 <div className="h-[1px] w-12 bg-rose-500/30"></div>
                 <div className="text-rose-600 text-xl">🕷️</div>
                 <div className="h-[1px] w-12 bg-rose-500/30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer info (One Page - No Scroll) */}
      <div className="w-full flex justify-between items-end z-10 relative">
        <div className="flex flex-col">
          <span className="text-xs font-black text-rose-500 tracking-[0.3em] uppercase opacity-60">The Date</span>
          <span className="text-xl font-bold text-white tracking-widest">30.01.2026</span>
        </div>
        <div className="text-[10px] font-medium text-white/30 uppercase tracking-widest">
          A Cinematic Celebration
        </div>
      </div>

      <style>{`
        .Hind-font {
          font-family: 'Hind Siliguri', sans-serif;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default App;
