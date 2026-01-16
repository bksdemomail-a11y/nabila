
import React from 'react';

const AnimatedScene: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#000000]">
      {/* Deep Haunted Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(15,23,42,0.4)_0%,transparent_90%)]"></div>
      
      {/* Cinematic Lightning Bolt */}
      <div className="absolute inset-0 bg-white/10 opacity-0 animate-lightning pointer-events-none z-10"></div>

      {/* Layered Haunted Mist */}
      <div className="absolute bottom-0 left-0 w-full h-[70%] bg-gradient-to-t from-black via-black/90 to-transparent z-0"></div>
      <div className="absolute bottom-0 left-[-50%] w-[200%] h-64 animate-mist opacity-40 bg-repeat-x grayscale brightness-50" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/black-linen.png")' }}></div>

      {/* Haunted Jagged Skyline */}
      <div className="absolute bottom-0 left-0 w-full h-[40vh] z-10 opacity-40">
         <svg viewBox="0 0 1000 200" preserveAspectRatio="none" className="w-full h-full filter blur-[1px]">
            <path d="M0,200 L0,170 L30,190 L60,150 L90,180 L120,140 L150,170 L180,120 L210,160 L240,110 L270,150 L300,100 L330,140 L360,90 L390,130 L420,80 L450,120 L480,70 L510,110 L540,60 L570,100 L600,50 L630,90 L660,40 L690,80 L720,30 L750,70 L780,20 L810,60 L840,10 L870,50 L900,5 L930,40 L960,0 L1000,50 L1000,200 Z" fill="#020202" />
         </svg>
      </div>

      {/* Heavy Cinematic Rain Storm */}
      <div className="absolute inset-0 z-20">
        {[...Array(120)].map((_, i) => (
          <div
            key={`rain-storm-${i}`}
            className="absolute bg-gradient-to-b from-blue-400/20 to-transparent w-[1px] animate-rain-heavy"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 20}%`,
              height: `${80 + Math.random() * 120}px`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${0.25 + Math.random() * 0.15}s`
            }}
          ></div>
        ))}
      </div>

      {/* High-Contrast Flying Leaves */}
      <div className="absolute inset-0 z-30">
        {[...Array(18)].map((_, i) => (
          <div
            key={`leaf-storm-${i}`}
            className="absolute animate-storm-leaf"
            style={{
              top: `${Math.random() * 100}%`,
              left: `-5%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2.5 + Math.random() * 2.5}s`
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="#080808" className="opacity-60 blur-[0.3px] drop-shadow-[0_0_5px_rgba(0,0,0,1)]">
              <path d="M12 2L14 9L21 11L14 13L12 20L10 13L3 11L10 9L12 2Z" />
            </svg>
          </div>
        ))}
      </div>

      {/* Real-Life Movie-Style Spider-Man (Realistic Silhouette) */}
      <div className="absolute bottom-[5%] right-[5%] md:right-[10%] z-50 transform scale-[0.9] md:scale-125 origin-bottom-right">
        <svg width="350" height="400" viewBox="0 0 200 240" fill="none" className="filter drop-shadow-[0_0_50px_rgba(0,0,0,1)]">
          <g className="animate-gentle-breathe">
             {/* The Gargoyle Stone Base */}
             <path d="M130 240 L200 240 L198 195 Q190 180 140 180 Z" fill="#010101" />
             <path d="M140 180 Q130 175 135 165" stroke="#050505" strokeWidth="8" />

             {/* Proportional Movie Silhouette (Brooding Crouch) */}
             {/* Main Body */}
             <path d="M150 160 C150 160 170 110 200 135 L180 185 Q155 195 150 160 Z" fill="#030303" />
             
             {/* Muscular Crouched Legs */}
             <path d="M180 185 Q210 195 215 225" stroke="#000000" strokeWidth="18" strokeLinecap="round" />
             <path d="M150 160 Q125 185 135 225" stroke="#000000" strokeWidth="18" strokeLinecap="round" />
             
             {/* Arms Tucked In */}
             <path d="M170 145 Q145 165 150 195" stroke="#030303" strokeWidth="12" strokeLinecap="round" />
             <path d="M195 145 Q220 165 210 200" stroke="#030303" strokeWidth="12" strokeLinecap="round" />
             
             {/* Iconic Head Shape */}
             <g transform="translate(178, 125) rotate(12)">
                <ellipse cx="0" cy="0" rx="15" ry="21" fill="#020202" />
                {/* Hyper-Glowing Cinematic Eyes */}
                <path d="M-9 -4 C-9 -4 -5 -13 2 -13 C7 -13 11 -4 11 -4 L9 5 L-7 5 L-9 -4 Z" fill="#ffffff" fillOpacity="1" className="filter drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
                <path d="M-9 -4 C-9 -4 -5 -13 2 -13 C7 -13 11 -4 11 -4" stroke="#000000" strokeWidth="2.5" />
             </g>

             {/* Wet Armor Shimmer (Specular Highlights) */}
             <path d="M160 135 Q175 125 190 135" stroke="white" strokeWidth="1.2" strokeOpacity="0.3" fill="none" />
             <path d="M148 170 Q143 190 148 210" stroke="white" strokeWidth="0.8" strokeOpacity="0.2" fill="none" />
          </g>
        </svg>
      </div>

      <style>{`
        @keyframes rain-heavy {
          from { transform: translateY(-150px) rotate(14deg); }
          to { transform: translateY(100vh) rotate(14deg); }
        }
        @keyframes storm-leaf {
          0% { transform: translate(-10vw, 0) rotate(0) scale(0.3); opacity: 0; }
          15% { opacity: 0.5; }
          85% { opacity: 0.5; }
          100% { transform: translate(120vw, -50vh) rotate(2160deg) scale(1.5); opacity: 0; }
        }
        @keyframes lightning {
          0%, 92%, 96%, 100% { opacity: 0; }
          93%, 95% { opacity: 0.8; }
          94% { opacity: 0.4; }
        }
        @keyframes mist {
          0% { transform: translateX(-20%); }
          100% { transform: translateX(20%); }
        }
        @keyframes gentle-breathe {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(1.03) translateY(-4px); }
        }
        .animate-rain-heavy { animation: rain-heavy linear infinite; }
        .animate-storm-leaf { animation: storm-leaf linear infinite; }
        .animate-lightning { animation: lightning 10s infinite; }
        .animate-mist { animation: mist 30s ease-in-out infinite alternate; }
        .animate-gentle-breathe { animation: gentle-breathe 6s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default AnimatedScene;
