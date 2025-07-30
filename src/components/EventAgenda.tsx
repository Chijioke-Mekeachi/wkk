import React from 'react';
import { Clock, Users, Presentation, Coffee, MessageCircle, Handshake } from 'lucide-react';

interface AgendaItem {
  time: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  speaker?: string;
}

const EventAgenda: React.FC = () => {
  const agendaItems: AgendaItem[] = [
    {
      time: "11:00 AM",
      title: "Welcome & Opening Prayer",
      description: "Event opening, welcome remarks, and blessing prayer for the WKK Family launch",
      icon: Users,
      speaker: "Host Church Leadership"
    },
    {
      time: "11:15 AM",
      title: "Introduction to WKK Family",
      description: "Overview of Web3 Kingdom Konnect mission, vision, and impact goals",
      icon: Presentation,
      speaker: "Henry Glowz"
    },
    {
      time: "11:45 AM",
      title: "Web3 & Blockchain for Beginners",
      description: "Simple explanation of blockchain technology and its benefits for faith communities",
      icon: Presentation,
      speaker: "Tech Team"
    },
    {
      time: "12:15 PM",
      title: "Live Demo: Transparent Donations",
      description: "Real-time demonstration of blockchain-based donation tracking and transparency",
      icon: Presentation,
      speaker: "Development Team"
    },
    {
      time: "12:30 PM",
      title: "Networking & Refreshments",
      description: "Connect with fellow believers, partners, and tech enthusiasts",
      icon: Coffee
    },
    {
      time: "1:00 PM",
      title: "Panel Discussion: Faith Meets Technology",
      description: "Church leaders and tech experts discuss the future of digital ministry",
      icon: MessageCircle,
      speaker: "Panel of Experts"
    },
    {
      time: "1:30 PM",
      title: "Partnership Opportunities",
      description: "Explore ways to collaborate, sponsor, or become a regional ambassador",
      icon: Handshake,
      speaker: "Partnership Team"
    },
    {
      time: "1:50 PM",
      title: "Closing Remarks & Next Steps",
      description: "Event wrap-up, key takeaways, and information about ongoing involvement",
      icon: Users,
      speaker: "Henry Glowz"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-6">
        {agendaItems.map((item, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-lg">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <div className="flex items-center text-blue-300 font-medium">
                    <Clock className="w-4 h-4 mr-1" />
                    {item.time}
                  </div>
                </div>
                <p className="text-white/80 mb-2">{item.description}</p>
                {item.speaker && (
                  <p className="text-blue-300 text-sm font-medium">
                    Speaker: {item.speaker}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventAgenda;