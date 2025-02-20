import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Music2, Mail, ArrowRight, Facebook, Twitter, Instagram, Ticket } from 'lucide-react';
import { shows } from './data/shows';

function App() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div 
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-90"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-yellow-500 to-green-600">
            HILL STREET
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-yellow-400">Reggae Concert Series</p>
          <a 
            href="#shows"
            className="bg-gradient-to-r from-red-600 via-yellow-500 to-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:scale-105 transition-transform inline-block"
          >
            View Shows
          </a>
        </div>
      </div>

      {/* Upcoming Shows */}
      <section id="shows" className="py-20 px-4 md:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">Upcoming Shows</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {shows.map((show) => (
            <div key={show.id} className="group relative overflow-hidden rounded-xl border-2 border-yellow-500/30">
              <div className="aspect-w-16 aspect-h-9">
                <img 
                  src={show.image} 
                  alt={show.artist}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold mb-2 text-yellow-400">{show.artist}</h3>
                <div className="flex items-center gap-2 text-green-400 mb-2">
                  <Calendar size={16} />
                  <span>{show.date}</span>
                </div>
                <div className="flex items-center gap-2 text-red-400 mb-4">
                  <MapPin size={16} />
                  <span>{show.venue}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-yellow-400 font-semibold">${show.ticketPrice}</span>
                  <a
                    href={show.ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-red-600 via-yellow-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    <Ticket size={16} />
                    Get Tickets
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-green-900/20 to-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Music2 className="w-12 h-12 text-yellow-500" />,
              title: "Reggae Vibes",
              description: "Experience authentic reggae music live on stage"
            },
            {
              icon: <Clock className="w-12 h-12 text-red-500" />,
              title: "Weekly Shows",
              description: "Regular performances by top reggae artists"
            },
            {
              icon: <MapPin className="w-12 h-12 text-green-500" />,
              title: "Prime Location",
              description: "Located in the heart of the city's cultural district"
            }
          ].map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-yellow-500/30">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-yellow-400">Stay Updated</h2>
          <p className="text-gray-400 mb-8">Subscribe to our newsletter for exclusive updates and special offers</p>
          <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-full bg-white/10 border border-yellow-500/30 focus:outline-none focus:border-yellow-500"
            />
            <button
              type="submit"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-red-600 via-yellow-500 to-green-600 hover:opacity-90 transition-opacity"
            >
              <ArrowRight />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-8 border-t border-yellow-500/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-bold text-yellow-400">HILL STREET</div>
          <div className="flex gap-6">
            <a href="#" className="text-red-500 hover:text-yellow-500 transition-colors"><Facebook /></a>
            <a href="#" className="text-yellow-500 hover:text-green-500 transition-colors"><Twitter /></a>
            <a href="#" className="text-green-500 hover:text-red-500 transition-colors"><Instagram /></a>
          </div>
          <div className="text-sm text-gray-400">© 2024 Hill Street. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;