import React from 'react';
import { 
  Lightbulb, 
  Network, 
  GraduationCap, 
  Handshake, 
  Gift, 
  Globe,
  CheckCircle
} from 'lucide-react';

const WhyAttend: React.FC = () => {
  const benefits = [
    {
      icon: Lightbulb,
      title: "Gain Cutting-Edge Knowledge",
      description: "Learn how blockchain and Web3 can revolutionize your ministry and church operations",
      color: "from-yellow-400 to-orange-400"
    },
    {
      icon: Network,
      title: "Build Powerful Connections",
      description: "Network with like-minded believers, tech innovators, and ministry leaders from around the world",
      color: "from-blue-400 to-purple-400"
    },
    {
      icon: GraduationCap,
      title: "Hands-On Learning Experience",
      description: "Participate in live demos and interactive sessions designed for all skill levels",
      color: "from-green-400 to-blue-400"
    },
    {
      icon: Handshake,
      title: "Partnership Opportunities",
      description: "Discover ways to collaborate, sponsor, or become a regional ambassador for WKK Family",
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: Gift,
      title: "Exclusive Early Access",
      description: "Be among the first to access WKK Family tools and platforms before public release",
      color: "from-red-400 to-pink-400"
    },
    {
      icon: Globe,
      title: "Global Impact Vision",
      description: "Join a movement that's bringing transparency and innovation to faith communities worldwide",
      color: "from-teal-400 to-blue-400"
    }
  ];

  const takeaways = [
    "Understanding of blockchain technology and its practical applications for churches",
    "Knowledge of transparent donation systems and financial accountability tools",
    "Insights into NFT fundraising strategies for ministry projects",
    "Access to a global network of faith-driven tech innovators",
    "Practical steps to implement Web3 solutions in your local church",
    "Partnership opportunities with WKK Family and other attendees"
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Main Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105"
          >
            <div className={`bg-gradient-to-r ${benefit.color} p-4 rounded-xl w-fit mb-6`}>
              <benefit.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
            <p className="text-white/80 leading-relaxed">{benefit.description}</p>
          </div>
        ))}
      </div>

      {/* Key Takeaways */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">
          What You'll Take Away
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {takeaways.map((takeaway, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
              <p className="text-white/80">{takeaway}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyAttend;