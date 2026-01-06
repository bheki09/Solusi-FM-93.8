import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Calendar, ArrowRight, Mic2, Heart, User, Radio, Music2, BookOpen, Sparkles } from 'lucide-react';
import ProgramCard from '../components/ProgramCard';
import { MOCK_SHOWS, MOCK_NEWS, getOnAirShow } from '../constants';

const Home: React.FC = () => {
  const currentShow = getOnAirShow();
  const upcomingShows = MOCK_SHOWS.slice(1, 4); 
  const featuredNews = MOCK_NEWS.slice(0, 3);

  return (
    <div className="pb-32">
      {/* Hero Section */}
      <section className="relative bg-rose-950 text-white overflow-hidden min-h-[85vh] flex items-center">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fbbf24_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-rose-950 via-rose-900/95 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-3/5 text-center lg:text-left space-y-8 animate-in slide-in-from-left-8 duration-700">
            <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-black tracking-[0.2em] uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              Broadcasting Live: 93.8 FM
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
              The Heartbeat of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">
                Solusi University
              </span>
            </h1>
            
            <p className="text-xl text-rose-100/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Experience the pulse of Solusi. From spiritual nourishment to the latest campus hits, we bring you closer to the spirit of excellence and service.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <Link to="/schedule" className="group px-8 py-4 rounded-full bg-amber-500 text-rose-950 font-black hover:bg-amber-400 transition-all flex items-center shadow-2xl shadow-amber-500/30 hover:-translate-y-1">
                <Calendar className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                VIEW SCHEDULE
              </Link>
              <Link to="/contact" className="px-8 py-4 rounded-full bg-rose-800/40 text-white font-bold border border-rose-700/50 hover:bg-rose-800/60 backdrop-blur-md transition-all flex items-center hover:-translate-y-1">
                <Mic2 className="mr-2 h-5 w-5" />
                SONG REQUEST
              </Link>
            </div>
          </div>
          
          {/* Hero Player Card */}
          <div className="lg:w-2/5 w-full max-w-md animate-in zoom-in-95 duration-700 delay-200">
             <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-rose-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-rose-900/40 backdrop-blur-2xl border border-white/10 p-8 rounded-3xl shadow-2xl">
                   <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-rose-800 rounded-lg">
                          <Radio className="h-5 w-5 text-amber-400" />
                        </div>
                        <span className="text-xs font-black tracking-widest text-white/60 uppercase">Now Playing</span>
                      </div>
                      <div className="px-2 py-1 bg-red-500/20 border border-red-500/30 rounded text-[10px] font-bold text-red-400 uppercase tracking-widest">Live</div>
                   </div>
                   
                   <div className="flex flex-col items-center text-center mb-8">
                      <div className="relative mb-6">
                        <img src={currentShow?.image} alt="Show" className="w-32 h-32 rounded-2xl object-cover shadow-2xl border-2 border-white/5" />
                        <div className="absolute -bottom-2 -right-2 bg-amber-500 text-rose-950 p-2 rounded-xl shadow-lg">
                          <Music2 className="h-5 w-5" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-black text-white mb-2">{currentShow?.title}</h3>
                      <p className="text-amber-400 font-bold flex items-center gap-1.5 text-sm uppercase tracking-wider">
                         <User className="h-4 w-4" /> {currentShow?.host}
                      </p>
                   </div>
                   
                   <button 
                    onClick={() => window.dispatchEvent(new CustomEvent('start-radio'))}
                    className="w-full py-5 bg-white text-rose-950 rounded-2xl font-black text-lg flex items-center justify-center transition-all hover:bg-amber-50 active:scale-[0.98] shadow-xl group/btn"
                   >
                      <Play className="h-6 w-6 mr-3 fill-current group-hover/btn:scale-110 transition-transform" />
                      TUNE IN NOW
                   </button>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Feature Pills */}
      <section className="relative -mt-12 z-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <Sparkles />, title: "Spirit Filled", desc: "Faith-based programming for the soul.", color: "bg-blue-600" },
            { icon: <BookOpen />, title: "Academic Hub", desc: "Latest research and campus news.", color: "bg-emerald-600" },
            { icon: <Radio />, title: "Top Vibes", desc: "Best of Afro-beats and Gospel hits.", color: "bg-purple-600" }
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-xl shadow-slate-200/50 flex items-start gap-4 border border-slate-100 hover:border-amber-200 transition-colors group">
              <div className={`${item.color} p-3 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform`}>
                {/* Fixed TypeScript error by casting to React.ReactElement with expected props type */}
                {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { className: "h-6 w-6" })}
              </div>
              <div>
                <h4 className="font-bold text-slate-900">{item.title}</h4>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Shows */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-black text-slate-900 tracking-tight">On the Horizon</h2>
              <p className="text-slate-500 mt-2 font-medium">Coming up next on 93.8 FM.</p>
            </div>
            <Link to="/schedule" className="flex items-center gap-2 bg-slate-100 hover:bg-rose-50 text-rose-900 px-6 py-3 rounded-full font-bold transition-all hover:gap-3">
              Full Schedule <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingShows.map(show => (
               <ProgramCard key={show.id} show={show} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 mb-4">Campus Chronicles</h2>
            <div className="h-1.5 w-24 bg-amber-500 mx-auto rounded-full"></div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
             {featuredNews.map((news) => (
               <article key={news.id} className="group cursor-pointer bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100">
                 <div className="overflow-hidden h-64 relative">
                   <img 
                     src={news.image} 
                     alt={news.title} 
                     className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                   />
                   <div className="absolute top-4 left-4">
                     <span className="px-3 py-1 bg-rose-900/90 text-white text-[10px] font-black uppercase tracking-widest rounded-lg backdrop-blur-md">
                        {news.category}
                     </span>
                   </div>
                 </div>
                 <div className="p-8">
                   <time className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-3">{news.date}</time>
                   <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-rose-700 transition-colors leading-tight">
                     {news.title}
                   </h3>
                   <p className="text-slate-500 leading-relaxed text-sm mb-6 line-clamp-3">
                     {news.summary}
                   </p>
                   <div className="flex items-center text-rose-800 font-bold text-sm gap-1 group-hover:gap-2 transition-all">
                     Read More <ArrowRight className="h-4 w-4" />
                   </div>
                 </div>
               </article>
             ))}
           </div>
         </div>
      </section>

      {/* Mission / About Snippet */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-rose-950"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-500/5 -skew-x-12 transform translate-x-20"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 text-center">
           <div className="inline-block p-4 bg-amber-500/10 rounded-3xl mb-8">
            <Heart className="h-10 w-10 text-amber-500" />
           </div>
           <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">The Voice of Our Community</h2>
           <p className="text-xl text-rose-100/70 leading-relaxed mb-12 max-w-3xl mx-auto font-medium">
             Solusi FM 93.8 serves as the primary communications hub for Solusi University. Our mission is to educate, inspire, and entertain while upholding the core values of our institution.
           </p>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-12 border-t border-white/10">
              {[
                { label: "Broadcasting", val: "24/7" },
                { label: "Student DJs", val: "25+" },
                { label: "Listeners", val: "10K+" },
                { label: "Faith Based", val: "100%" }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-4xl font-black text-amber-400 mb-2">{stat.val}</div>
                  <div className="text-xs font-bold text-rose-300 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;