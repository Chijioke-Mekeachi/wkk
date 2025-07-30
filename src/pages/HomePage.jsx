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

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900">
      {/* About Section */}
      <section id="about" className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What is Web3 Kingdom Konnect?
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-white/80 leading-relaxed">
                WKK Family is a faith-led Web3 initiative empowering churches and believers—especially in developing regions—with blockchain tools, NFTs, and decentralized platforms to grow ministries, foster transparency, and build Kingdom impact in the digital world.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Shield className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Transparency</h3>
              <p className="text-white/80">Blockchain technology ensures complete transparency in donations and ministry finances.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Users className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Community</h3>
              <p className="text-white/80">Connect believers worldwide through decentralized platforms and shared Kingdom values.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Smartphone className="w-12 h-12 text-green-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
              <p className="text-white/80">Cutting-edge Web3 tools designed specifically for ministry growth and impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section id="event" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Official Unveiling of WKK Family
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Celebrate the launch of WKK with teachings, panel discussions, blockchain demos, and Kingdom collaborations.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center">
                  <Calendar className="w-8 h-8 text-blue-400 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-white">Date</h3>
                    <p className="text-white/80">August 20, 2025</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-8 h-8 text-purple-400 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-white">Time</h3>
                    <p className="text-white/80">11 AM – 2 PM</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-8 h-8 text-green-400 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-white">Location</h3>
                    <p className="text-white/80">40 NTA Road, Rumuokwuta, Port Harcourt, Nigeria & Online</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-center">
                  <User className="w-8 h-8 text-yellow-400 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-white">Host</h3>
                    <p className="text-white/80">Henry Glowz</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-8 h-8 text-red-400 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-white">Host Church</h3>
                    <p className="text-white/80">Overcomers Ministry of Believers Fellowship</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Register Now</h3>
                  <p className="text-white/90 mb-4">Secure your spot for this historic launch event</p>
                  <a 
                    href="https://lu.ma/uhwdbvus" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center"
                  >
                    Get Tickets
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Attend Section */}
      <section id="why-attend" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Target className="w-8 h-8 text-yellow-400 mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Why You Should Attend
              </h2>
            </div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              This isn't just another tech event. It's your gateway to the future of faith-driven innovation.
            </p>
          </div>
          <WhyAttend />
        </div>
      </section>


      {/* Live Stream Information */}
      <section id="livestream" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Video className="w-8 h-8 text-red-400 mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Can't Attend In Person?
              </h2>
            </div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Join us virtually from anywhere in the world
            </p>
          </div>
          <LiveStreamInfo />
        </div>
      </section>


      {/* Host & Church Information Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our Host & Host Church
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Host Information */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Henry Glowz</h3>
                <p className="text-blue-300 font-medium">Event Host & Blurt.blog Promoter</p>
              </div>
              <div className="space-y-4 text-white/80">
                <p>
                  Henry Glowz is a passionate advocate for blockchain technology and its potential to transform faith communities. As a dedicated Blurt.blog promoter, he has been instrumental in introducing Web3 concepts to believers across Africa.
                </p>
                <p>
                  With extensive experience in digital evangelism and blockchain education, Henry bridges the gap between traditional ministry and cutting-edge technology. His vision for WKK Family stems from a deep understanding of how decentralized platforms can empower churches and believers worldwide.
                </p>
                <div className="bg-blue-600/20 rounded-lg p-4 mt-6">
                  <h4 className="font-semibold text-white mb-2">Key Contributions:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Active Blurt blockchain community builder</li>
                    <li>• Web3 education advocate for faith communities</li>
                    <li>• Digital ministry innovation pioneer</li>
                    <li>• Cross-cultural blockchain adoption facilitator</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Church Information */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Overcomers Ministry of Believers Fellowship</h3>
                <p className="text-green-300 font-medium">Host Church - Lagos, Nigeria</p>
              </div>
              <div className="space-y-4 text-white/80">
                <p>
                  Overcomers Ministry of Believers Fellowship is a vibrant, forward-thinking church community based in Lagos, Nigeria. Known for their innovative approach to ministry and embrace of technology, they are the perfect host for the WKK Family launch.
                </p>
                <p>
                  The church has a strong commitment to empowering believers through education, community building, and spiritual growth. Their leadership in hosting this groundbreaking Web3 event demonstrates their dedication to preparing the church for the digital future.
                </p>
                <div className="bg-green-600/20 rounded-lg p-4 mt-6">
                  <h4 className="font-semibold text-white mb-2">Church Highlights:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Progressive ministry with tech integration</li>
                    <li>• Strong community outreach programs</li>
                    <li>• Youth-focused digital initiatives</li>
                    <li>• International partnership network</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Mission: Bringing Web3 to Believers in Developing Nations
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Shield className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Blockchain Donations for Transparency</h3>
              <p className="text-white/80">Enable fully transparent donation tracking and financial accountability for ministries worldwide.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Star className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">NFT Fundraising for Ministries</h3>
              <p className="text-white/80">Innovative NFT solutions to help churches and ministries raise funds for Kingdom projects.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Users className="w-12 h-12 text-green-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Education & Training for Young Tech Leaders</h3>
              <p className="text-white/80">Empower the next generation of believers with blockchain and Web3 skills for Kingdom impact.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <Smartphone className="w-12 h-12 text-yellow-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Church-led Decentralized Apps (dApps)</h3>
              <p className="text-white/80">Build custom dApps that serve local church communities and expand Kingdom reach.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <HelpCircle className="w-8 h-8 text-green-400 mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Frequently Asked Questions
              </h2>
            </div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Got questions? We've got answers. Here's everything you need to know about the WKK Family launch.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* Social Share Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Share2 className="w-8 h-8 text-purple-400 mr-3" />
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Spread the Word
              </h2>
            </div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Help us reach more believers worldwide by sharing this historic event
            </p>
          </div>
          <SocialShare />
        </div>
      </section>

      {/* Sponsorship Section */}
      <section id="partner" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Partner With Purpose
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              We're inviting churches, Web3 developers, Kingdom financiers, and mission-driven organizations to co-build the future.
            </p>
          </div>

          <SponsorshipForm />
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
  );
}

export default HomePage;