import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Youtube, ExternalLink, X, Volume2, VolumeX } from 'lucide-react';
import { getOnAirShow } from '../constants';

// The provided Solusi FM YouTube Live ID from the link: https://youtube.com/live/KS5tvxG6GZE
const YOUTUBE_LIVE_ID = "KS5tvxG6GZE"; 

const FooterPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const currentShow = getOnAirShow();

  const togglePlay = () => {
    const nextPlaying = !isPlaying;
    setIsPlaying(nextPlaying);
    // Auto-show the video dock when playing for the first time
    if (nextPlaying) setIsVideoVisible(true);
  };

  return (
    <>
      {/* YouTube Video Dock */}
      {isPlaying && isVideoVisible && (
        <div className="fixed bottom-[88px] right-4 w-[320px] aspect-video bg-black rounded-xl shadow-2xl z-40 border border-rose-800/50 overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300">
          <div className="relative w-full h-full group">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${YOUTUBE_LIVE_ID}?autoplay=1&modestbranding=1&playsinline=1&rel=0&mute=${isMuted ? 1 : 0}`}
              title="Solusi FM Live Stream"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
            
            <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button 
                onClick={() => setIsMuted(!isMuted)}
                className="p-1.5 bg-black/60 hover:bg-rose-900 text-white rounded-full backdrop-blur-sm transition-colors"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </button>
              <button 
                onClick={() => setIsVideoVisible(false)}
                className="p-1.5 bg-black/60 hover:bg-rose-900 text-white rounded-full backdrop-blur-sm transition-colors"
                title="Hide Video"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Footer Controller */}
      <div className="fixed bottom-0 left-0 right-0 bg-rose-950/98 backdrop-blur-lg border-t border-rose-800/50 text-white py-4 px-4 z-50 shadow-[0_-8px_30px_rgb(0,0,0,0.4)]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Now Playing Info */}
          <div className="flex items-center w-1/3 min-w-[140px]">
            <div className={`relative h-14 w-14 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-colors duration-500 ${isPlaying ? 'border-amber-400 shadow-[0_0_15px_rgba(251,191,36,0.3)]' : 'border-rose-800'}`}>
               <img 
                 src={currentShow?.image || "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=100&q=80"} 
                 alt="Show Cover" 
                 className="h-full w-full object-cover"
               />
               {isPlaying && (
                 <div className="absolute inset-0 bg-black/40 flex items-end justify-center pb-2 gap-1">
                   <div className="w-1 bg-amber-400 animate-[equalize_1s_infinite_alternate]"></div>
                   <div className="w-1 bg-amber-400 animate-[equalize_0.8s_infinite_alternate_0.2s]"></div>
                   <div className="w-1 bg-amber-400 animate-[equalize_1.2s_infinite_alternate_0.4s]"></div>
                 </div>
               )}
            </div>
            <div className="ml-4 overflow-hidden hidden xs:block">
              <div className="flex items-center gap-1.5 text-amber-400 mb-0.5">
                <Youtube className="h-3 w-3" />
                <p className="text-[10px] font-bold uppercase tracking-widest">On Air Now</p>
              </div>
              <h3 className="text-sm font-bold truncate text-white leading-tight">{currentShow?.title || "Solusi FM Live"}</h3>
              <p className="text-xs text-rose-300 truncate font-medium">{currentShow?.host || "Voice of Solusi"}</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center space-x-6 w-1/3">
             <button className="text-rose-400 hover:text-white transition-colors hidden md:block opacity-40 cursor-not-allowed">
               <SkipBack className="h-6 w-6" />
             </button>
             
             <button 
               onClick={togglePlay}
               className="h-14 w-14 rounded-full bg-amber-500 text-rose-950 flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-xl shadow-amber-500/20"
               aria-label={isPlaying ? "Pause" : "Play"}
             >
               {isPlaying ? <Pause className="h-7 w-7 fill-current" /> : <Play className="h-7 w-7 ml-1 fill-current" />}
             </button>
             
             <button className="text-rose-400 hover:text-white transition-colors hidden md:block opacity-40 cursor-not-allowed">
               <SkipForward className="h-6 w-6" />
             </button>
          </div>

          {/* Status & Toggle */}
          <div className="flex items-center justify-end w-1/3 space-x-4">
            <div className="hidden sm:flex items-center space-x-3">
               {isPlaying ? (
                 <button 
                   onClick={() => setIsVideoVisible(!isVideoVisible)}
                   className={`text-[11px] font-bold uppercase tracking-wider px-4 py-2 rounded-full border transition-all ${isVideoVisible ? 'bg-rose-800 border-rose-600 text-white' : 'bg-transparent border-rose-700 text-rose-300 hover:text-white hover:border-rose-500'}`}
                 >
                   {isVideoVisible ? 'Minimize' : 'Show Video'}
                 </button>
               ) : (
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-900/30 border border-rose-800/50">
                    <div className="h-1.5 w-1.5 rounded-full bg-rose-500"></div>
                    <span className="text-[10px] uppercase tracking-widest text-rose-300 font-bold">Ready</span>
                  </div>
               )}
            </div>
            
            <a 
              href={`https://youtube.com/watch?v=${YOUTUBE_LIVE_ID}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white text-[10px] font-black tracking-tighter px-3 py-1.5 rounded-md flex items-center shadow-lg shadow-red-600/20 transition-all hover:-translate-y-0.5"
            >
              YOUTUBE <ExternalLink className="h-3 w-3 ml-1" />
            </a>
          </div>

        </div>
      </div>
      
      <style>{`
        @keyframes equalize {
          0% { height: 20%; }
          100% { height: 80%; }
        }
      `}</style>
    </>
  );
};

export default FooterPlayer;
