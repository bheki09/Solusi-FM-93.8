import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Music } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'request', // request, shoutout, feedback
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for your message! (This is a demo, so it wasn't actually sent)");
    setFormData({ name: '', email: '', type: 'request', message: '' });
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-32 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
             <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Get In Touch</h1>
             <p className="text-lg text-slate-600 mb-10 leading-relaxed">
               Want to request your favorite song, give a shoutout to friends, or provide feedback? We'd love to hear from you!
             </p>

             <div className="space-y-8">
                <div className="flex items-start">
                   <div className="flex-shrink-0">
                     <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-rose-100 text-rose-700">
                       <MapPin className="h-6 w-6" />
                     </div>
                   </div>
                   <div className="ml-4">
                     <h3 className="text-lg font-bold text-slate-900">Visit Us</h3>
                     <p className="mt-1 text-slate-600">
                       Solusi University Campus<br />
                       Media Center, 2nd Floor<br />
                       Bulawayo, Zimbabwe
                     </p>
                   </div>
                </div>

                <div className="flex items-start">
                   <div className="flex-shrink-0">
                     <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-rose-100 text-rose-700">
                       <Phone className="h-6 w-6" />
                     </div>
                   </div>
                   <div className="ml-4">
                     <h3 className="text-lg font-bold text-slate-900">Call the Studio</h3>
                     <p className="mt-1 text-slate-600">
                       +263 77 123 4567<br />
                       <span className="text-sm text-slate-400">Lines open 6AM - 10PM</span>
                     </p>
                   </div>
                </div>

                <div className="flex items-start">
                   <div className="flex-shrink-0">
                     <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-rose-100 text-rose-700">
                       <Mail className="h-6 w-6" />
                     </div>
                   </div>
                   <div className="ml-4">
                     <h3 className="text-lg font-bold text-slate-900">Email Us</h3>
                     <p className="mt-1 text-slate-600">
                       studio@solusifm.ac.zw<br />
                       advertising@solusifm.ac.zw
                     </p>
                   </div>
                </div>
             </div>
             
             {/* Map Placeholder */}
             <div className="mt-10 h-64 bg-slate-200 rounded-2xl overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80" 
                  alt="Map Location" 
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-white/80 px-4 py-2 rounded-md text-sm font-semibold backdrop-blur text-slate-700">Map Integration would go here</span>
                </div>
             </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
             <div className="flex items-center gap-3 mb-6">
                <Music className="h-6 w-6 text-amber-500" />
                <h2 className="text-2xl font-bold text-slate-900">Send a Request</h2>
             </div>
             
             <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                   <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
                   <input 
                     type="text" 
                     id="name"
                     required
                     className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all outline-none"
                     placeholder="John Doe"
                     value={formData.name}
                     onChange={(e) => setFormData({...formData, name: e.target.value})}
                   />
                </div>

                <div>
                   <label htmlFor="type" className="block text-sm font-medium text-slate-700 mb-1">Message Type</label>
                   <div className="grid grid-cols-3 gap-3">
                      {['request', 'shoutout', 'feedback'].map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setFormData({...formData, type: t})}
                          className={`py-2 px-3 rounded-lg text-sm font-medium capitalize border ${
                             formData.type === t 
                               ? 'bg-rose-700 text-white border-rose-700' 
                               : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                   </div>
                </div>

                <div>
                   <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                     {formData.type === 'request' ? 'Song Details / Message' : 'Your Message'}
                   </label>
                   <textarea 
                     id="message"
                     rows={5}
                     required
                     className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all outline-none resize-none"
                     placeholder={formData.type === 'request' ? "I'd love to hear 'Way Maker' by Sinach..." : "Hello studio..."}
                     value={formData.message}
                     onChange={(e) => setFormData({...formData, message: e.target.value})}
                   ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 bg-amber-500 hover:bg-amber-600 text-rose-950 font-bold rounded-xl flex items-center justify-center transition-all transform active:scale-[0.98] shadow-lg shadow-amber-500/20"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send to Studio
                </button>
             </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;