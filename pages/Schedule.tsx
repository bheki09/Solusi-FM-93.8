import React, { useState } from 'react';
import { MOCK_SHOWS } from '../constants';
import ProgramCard from '../components/ProgramCard';

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Sabbath', 'Sunday'];

const Schedule: React.FC = () => {
  const [activeDay, setActiveDay] = useState('Monday');

  // Filter shows by day (MOCK_SHOWS is limited, so we might show empty states for demo)
  const showsForDay = MOCK_SHOWS.filter(s => s.day === activeDay).sort((a, b) => a.startTime.localeCompare(b.startTime));

  return (
    <div className="bg-slate-50 min-h-screen pb-32 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Weekly Schedule</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Find out when your favorite shows are airing. From morning devotionals to late-night study mixes.
          </p>
        </div>

        {/* Day Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {DAYS.map(day => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                activeDay === day
                  ? 'bg-rose-700 text-white shadow-lg shadow-rose-200 transform scale-105'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Schedule Grid */}
        <div className="space-y-6">
          {showsForDay.length > 0 ? (
            showsForDay.map(show => (
              <div key={show.id} className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-rose-100 transition-colors">
                 <div className="md:w-48 flex-shrink-0 flex flex-col justify-center items-center md:items-start border-b md:border-b-0 md:border-r border-slate-100 pb-4 md:pb-0 md:pr-6">
                    <span className="text-2xl font-bold text-slate-800">{show.startTime}</span>
                    <span className="text-sm text-slate-400 mb-2">to {show.endTime}</span>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      show.category === 'Music' ? 'bg-pink-100 text-pink-700' :
                      show.category === 'Religious' ? 'bg-purple-100 text-purple-700' :
                      show.category === 'News' ? 'bg-blue-100 text-blue-700' :
                      'bg-slate-100 text-slate-700'
                    }`}>
                      {show.category}
                    </span>
                 </div>
                 <div className="flex-grow flex items-center gap-6">
                    <img src={show.image} alt={show.title} className="w-20 h-20 rounded-lg object-cover hidden sm:block" />
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{show.title}</h3>
                      <p className="text-rose-700 font-medium text-sm mb-1">{show.host}</p>
                      <p className="text-slate-600 text-sm">{show.description}</p>
                    </div>
                 </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300">
              <p className="text-slate-500 text-lg">No shows scheduled for {activeDay} yet.</p>
              <p className="text-slate-400 text-sm mt-2">Check back later for updates!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Schedule;