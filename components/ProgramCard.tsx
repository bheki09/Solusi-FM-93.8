import React, { useState } from 'react';
import { Clock, User } from 'lucide-react';
import { Show } from '../types';

interface ProgramCardProps {
  show: Show;
  featured?: boolean;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ show, featured = false }) => {
  return (
    <div className={`bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow group h-full flex flex-col ${featured ? 'md:flex-row' : ''}`}>
      <div className={`relative overflow-hidden ${featured ? 'md:w-1/2 h-48 md:h-auto' : 'h-48'}`}>
        <img 
          src={show.image} 
          alt={show.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-2 left-2">
          <span className="inline-block px-2 py-1 text-xs font-semibold rounded-md bg-rose-950/90 text-white backdrop-blur-sm border border-white/10">
            {show.category}
          </span>
        </div>
      </div>
      
      <div className={`p-5 flex flex-col justify-between ${featured ? 'md:w-1/2 justify-center' : 'flex-grow'}`}>
        <div>
          <div className="flex items-center text-slate-500 text-xs font-medium mb-2 space-x-3">
             <span className="flex items-center">
               <Clock className="h-3 w-3 mr-1" />
               {show.day}s {show.startTime}
             </span>
          </div>
          <h3 className={`font-bold text-slate-800 mb-2 group-hover:text-rose-700 transition-colors ${featured ? 'text-2xl' : 'text-lg'}`}>
            {show.title}
          </h3>
          <p className="text-slate-600 text-sm line-clamp-2 mb-4">
            {show.description}
          </p>
        </div>
        
        <div className="flex items-center mt-auto pt-4 border-t border-slate-100">
           <div className="flex items-center text-sm font-medium text-slate-700">
             <div className="p-1.5 bg-rose-50 rounded-full mr-2">
               <User className="h-3 w-3 text-rose-700" />
             </div>
             {show.host}
           </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;