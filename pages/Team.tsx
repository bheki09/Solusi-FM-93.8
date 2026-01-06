import React from 'react';
import { Twitter, Instagram, Facebook } from 'lucide-react';
import { MOCK_DJS } from '../constants';

const Team: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-32 pt-10">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Meet Our Voices</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              The talented students and staff behind the microphone. Get to know the personalities bringing you the best in entertainment and information.
            </p>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {MOCK_DJS.map(dj => (
              <div key={dj.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100">
                 <div className="relative h-80 overflow-hidden">
                   <div className="absolute inset-0 bg-rose-950/80 group-hover:bg-rose-950/90 transition-colors z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                      <div className="flex space-x-4">
                        <a href="#" className="p-2 bg-white rounded-full text-rose-950 hover:bg-amber-400 transition-colors">
                          <Twitter className="h-5 w-5" />
                        </a>
                        <a href="#" className="p-2 bg-white rounded-full text-rose-950 hover:bg-amber-400 transition-colors">
                          <Instagram className="h-5 w-5" />
                        </a>
                      </div>
                   </div>
                   <img src={dj.image} alt={dj.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                 </div>
                 <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">{dj.name}</h3>
                    <p className="text-amber-500 text-sm font-semibold mb-3">{dj.handle}</p>
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                      {dj.bio}
                    </p>
                    <div className="pt-4 border-t border-slate-100">
                      <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">Hosted Shows</p>
                      <div className="flex flex-wrap justify-center gap-2">
                        {dj.shows.map((show, idx) => (
                          <span key={idx} className="bg-rose-50 text-rose-800 text-xs px-2 py-1 rounded">
                            {show}
                          </span>
                        ))}
                      </div>
                    </div>
                 </div>
              </div>
            ))}
         </div>
       </div>
    </div>
  );
};

export default Team;