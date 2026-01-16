
import React from 'react';

const AnimatedScene: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 bg-[#020205]">
      {/* Haunted Fog Layers */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,20,40,0.4)_0%,transparent_70%)]"></div>
      
      {/* Lightning Flash Effect */}
      <div className="absolute inset-0 bg-blue-400/10 opacity-0 animate-lightning pointer-events-none z-10"></div>

      {/* Background Mist */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent opacity-60"></div>
        <div className="absolute inset-0 animate-mist opacity-20 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"></div>
      </div>

      {/* Haunted Environment Elements (Jagged Silhouettes) */}
      <div className="absolute bottom-0 left-0 w-full h-64 z-10 opacity-40 grayscale">
         <svg viewBox="0 0 1000 200" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,200 L0,150 L50,180 L100,140 L150,170 L200,130 L250,160 L300,120 L350,150 L400,110 L450,140 L500,100 L550,130 L600,90 L650,120 L700,80 L750,110 L800,70 L850,100 L900,60 L950,90 L1000,50 L1000,200 Z" fill="#050505" />
         </svg>
      </div>

      {/* Heavy Rain Layers */}
      <div className="absolute inset-0 z-20 overflow-hidden">
        {[...Array(80)].map((_, i) => (
          <div
            key={`rain-main-${i}`}
            className="absolute bg-gradient-to-b from-blue-200/20 to-transparent w-[1px] animate-rain-heavy"
            style={{
              left: `${Math.random() * 100}%`,
              top: `-${Math.random() * 20}%`,
              height: `${40 + Math.random() * 60}px`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${0.4 + Math.random() * 0.2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Aggressive Wind-blown Leaves */}
      <div className="absolute inset-0 z-30">
        {[...Array(12)].map((_, i) => (
          <div
            key={`leaf-storm-${i}`}
            className="absolute animate-storm-leaf"
            style={{
              top: `${Math.random() * 100}%`,
              left: `-10%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#1a120c" className="opacity-40">
              <path d="M12 2L15 10L22 12L15 14L12 22L9 14L2 12L9 10L12 2Z" />
            </svg>
          </div>
        ))}
      </div>

      {/* Realistic Movie-Style Spider-Man Silhouette */}
      <div className="absolute bottom-4 right-4 md:right-12 z-50 transform scale-75 md:scale-100">
        <svg width="280" height="320" viewBox="0 0 200 240" fill="none" className="filter drop-shadow-[0_0_20px_rgba(0,0,0,1)]">
          {/* Detailed Silhouette with wet highlights */}
          <g className="animate-gentle-breathe">
             {/* Perched Structure (Gargoyle-esque) */}
             <path d="M140 240 L200 240 L190 190 L140 180 Z" fill="#080808" />
             <path d="M140 180 Q130 170 140 160" stroke="#111" strokeWidth="4" />

             {/* Spider-Man Body (Anatomically correct crouch) */}
             {/* Back/Torso */}
             <path d="M145 160 Q160 110 185 130 L170 180 Q150 190 145 160 Z" fill="#0a0a0a" stroke="#111" strokeWidth="1" />
             {/* Legs */}
             <path d="M170 180 Q195 190 200 215" stroke="#050505" strokeWidth="14" strokeLinecap="round" />
             <path d="M145 160 Q120 180 130 220" stroke="#050505" strokeWidth="14" strokeLinecap="round" />
             {/* Arms */}
             <path d="M160 135 Q140 150 145 180" stroke="#0a0a0a" strokeWidth="8" strokeLinecap="round" />
             <path d="M180 135 Q200 150 195 185" stroke="#0a0a0a" strokeWidth="8" strokeLinecap="round" />
             
             {/* Head (The Iconic Eye Glow) */}
             <g transform="translate(165, 115) rotate(15)">
                <ellipse cx="0" cy="0" rx="14" ry="19" fill="#080808" />
                {/* Glowing Eyes */}
                <path d="M-8 -4 C-8 -4 -5 -11 1 -11 C6 -11 9 -4 9 -4 L7 3 L-6 3 L-8 -4 Z" fill="#fff" fillOpacity="0.9" />
                <path d="M-8 -4 C-8 -4 -5 -11 1 -11 C6 -11 9 -4 9 -4" stroke="#000" strokeWidth="1.5" />
             </g>

             {/* Wet Highlights (Rain droplets shine) */}
             <path d="M155 125 Q170 115 180 125" stroke="white" strokeWidth="0.5" strokeOpacity="0.2" fill="none" />
             <path d="M145 170 Q140 190 145 210" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" fill="none" />
          </g>
        </svg>
      </div>

      <style>{`
        @keyframes rain-heavy {
          from { transform: translateY(-100px) rotate(10deg); }
          to { transform: translateY(100vh) rotate(10deg); }
        }
        @keyframes storm-leaf {
          0% { transform: translate(-10vw, 0) rotate(0) scale(0.5); opacity: 0; }
          20% { opacity: 0.5; }
          80% { opacity: 0.5; }
          100% { transform: translate(110vw, -40vh) rotate(1440deg) scale(1.2); opacity: 0; }
        }
        @keyframes lightning {
          0%, 94%, 98%, 100% { opacity: 0; }
          95%, 97% { opacity: 0.8; }
          96% { opacity: 0.4; }
        }
        @keyframes mist {
          0% { transform: translateX(-20%); }
          100% { transform: translateX(20%); }
        }
        @keyframes gentle-breathe {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(1.02); }
        }
        .animate-rain-heavy { animation: rain-heavy linear infinite; }
        .animate-storm-leaf { animation: storm-leaf linear infinite; }
        .animate-lightning { animation: lightning 8s infinite; }
        .animate-mist { animation: mist 20s ease-in-out infinite alternate; }
        .animate-gentle-breathe { animation: gentle-breathe 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default AnimatedScene;
