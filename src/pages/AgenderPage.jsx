import React from 'react';
import CountdownTimer from '../components/CountdownTimer';
import SponsorshipForm from '../components/SponsorshipForm';
import FloatingDonateButton from '../components/FloatingDonateButton';
import FAQ from '../components/FAQ';
import EventAgenda from '../components/EventAgenda';
import WhyAttend from '../components/WhyAttend';
import SocialShare from '../components/SocialShare';
import LiveStreamInfo from '../components/LiveStreamInfo';
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

const AgenderPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900">
      <section id="agenda" className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <CalendarIcon className="w-8 h-8 text-blue-400 mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Event Agenda
              </h2>
            </div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              A carefully crafted 3-hour journey through the intersection of faith and technology
            </p>
          </div>
          <EventAgenda />
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-sm py-12 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="bg-gradient-to-r from-blue-400 to-purple-400 p-2 rounded-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="ml-3 text-xl font-bold text-white">WKK Family</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-white/80 mb-2">Building the future of faith-driven Web3</p>
              <p className="text-white/60">© 2025 WKK Family. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default AgenderPage
