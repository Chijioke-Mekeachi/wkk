import React from 'react';
import { 
  Video, 
  Wifi, 
  Globe, 
  Clock, 
  Users, 
  MessageSquare,
  ExternalLink,
  Bell
} from 'lucide-react';

const LiveStreamInfo: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Video className="w-8 h-8 text-red-500 mr-3" />
            <h3 className="text-2xl font-bold text-white">Join Us Online</h3>
          </div>
          <p className="text-white/80 text-lg">
            Can't make it to Port Harcourt? No problem! Join thousands of believers worldwide through our live stream.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-red-500 p-3 rounded-lg">
                <Wifi className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">High-Quality Stream</h4>
                <p className="text-white/80">Crystal clear HD video and audio for the best online experience</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-500 p-3 rounded-lg">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Interactive Q&A</h4>
                <p className="text-white/80">Submit questions during the event and get real-time answers</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-500 p-3 rounded-lg">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Global Community</h4>
                <p className="text-white/80">Connect with believers from every continent in real-time</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-xl p-6 text-center">
              <Clock className="w-8 h-8 text-white mx-auto mb-3" />
              <h4 className="text-lg font-bold text-white mb-2">Stream Details</h4>
              <div className="space-y-2 text-white/90">
                <p><strong>Date:</strong> August 20, 2025</p>
                <p><strong>Time:</strong> 11:00 AM - 2:00 PM WAT</p>
                <p><strong>Platform:</strong> Multiple streaming platforms</p>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Bell className="w-6 h-6 text-yellow-400 mr-2" />
                <h4 className="text-lg font-semibold text-white">Get Notified</h4>
              </div>
              <p className="text-white/80 mb-4">
                Register now to receive stream links and reminders before the event starts.
              </p>
              <a 
                href="https://lu.ma/wkk-family-launch" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
              >
                Register for Stream Access
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-blue-600/20 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <Users className="w-6 h-6 text-blue-400 mr-2" />
            <h4 className="text-lg font-semibold text-white">Online Attendee Benefits</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-white/80">
              <li>• Full access to all presentations and demos</li>
              <li>• Downloadable resources and materials</li>
              <li>• Live chat with other attendees</li>
            </ul>
            <ul className="space-y-2 text-white/80">
              <li>• Recording access for 30 days after event</li>
              <li>• Digital networking opportunities</li>
              <li>• Priority updates on WKK Family developments</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveStreamInfo;