import React, { useState } from 'react';
import CountdownTimer from './components/CountdownTimer';
import SponsorshipForm from './components/SponsorshipForm';
import FloatingDonateButton from './components/FloatingDonateButton';
import FAQ from './components/FAQ';
import EventAgenda from './components/EventAgenda';
import WhyAttend from './components/WhyAttend';
import SocialShare from './components/SocialShare';
import LiveStreamInfo from './components/LiveStreamInfo';
import AgenderPage from './pages/AgenderPage';
import HomePage from './pages/HomePage';
import {
  Calendar,
  Clock,
  MapPin,
  User,
  Zap,
  Shield,
  Users,
  Smartphone,
  ChevronRight,
  Star,
  ExternalLink,
  HelpCircle,
  Calendar as CalendarIcon,
  Target,
  Share2,
  Video
} from 'lucide-react';

function App() {
  const [Agender, setAgender] = useState(false);
  const [partners, setPartners] = useState(false); 
  // const []


  const handleAgender = () => {
    setAgender(true);
  }
  const handleHome = () => {
    setAgender(false);
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900">
      <FloatingDonateButton />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/10 backdrop-blur-sm z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-blue-400 to-purple-400 p-2 rounded-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold text-white">WKK Family</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" onClick={handleHome} className="text-white/80 hover:text-white transition-colors">About</a>
              <a href="#event" onClick={handleHome}  className="text-white/80 hover:text-white transition-colors">Event</a>
              <a href="#agenda" onClick={handleAgender} className="text-white/80 hover:text-white transition-colors">Agenda</a>
              <a href="#why-attend" onClick={handleHome}  className="text-white/80 hover:text-white transition-colors">Why Attend</a>
              <a href="#vision" onClick={handleHome}  className="text-white/80 hover:text-white transition-colors">Vision</a>
              <a href="#partner" onClick={handleHome}  className="text-white/80 hover:text-white transition-colors">Partner</a>
            </div>
          </div>
        </div>
      </nav>
      <section>
        {Agender ? (
          <AgenderPage/>
        ):(
          <HomePage/>
        )}
      </section>
    </div>
  );
}

export default App;