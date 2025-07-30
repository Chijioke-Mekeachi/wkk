import React from 'react';
import { Share2, Twitter, Facebook, Linkedin, Copy, Check } from 'lucide-react';

const SocialShare: React.FC = () => {
  const [copied, setCopied] = React.useState(false);
  
  const eventUrl = window.location.href;
  const eventTitle = "WKK Family Official Launch Event - Faith Meets Web3";
  const eventDescription = "Join us for the official launch of Web3 Kingdom Konnect (WKK Family) on August 20, 2025. Discover how blockchain technology can transform faith communities worldwide.";

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(eventTitle)}&url=${encodeURIComponent(eventUrl)}&hashtags=WKKFamily,Web3,Faith,Blockchain`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(eventUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(eventUrl)}`
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(eventUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const shareButtons = [
    {
      name: 'Twitter',
      icon: Twitter,
      url: shareLinks.twitter,
      color: 'hover:bg-blue-500'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: shareLinks.facebook,
      color: 'hover:bg-blue-600'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: shareLinks.linkedin,
      color: 'hover:bg-blue-700'
    }
  ];

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center mb-4">
          <Share2 className="w-8 h-8 text-blue-400 mr-3" />
          <h3 className="text-2xl font-bold text-white">Share the Event</h3>
        </div>
        <p className="text-white/80">
          Help us spread the word about this historic launch event
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {shareButtons.map((button) => (
          <a
            key={button.name}
            href={button.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center space-x-2 bg-white/10 ${button.color} text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105`}
          >
            <button.icon className="w-5 h-5" />
            <span className="font-medium">{button.name}</span>
          </a>
        ))}
      </div>

      <div className="flex items-center justify-center">
        <button
          onClick={copyToClipboard}
          className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-all duration-300"
        >
          {copied ? (
            <>
              <Check className="w-5 h-5 text-green-400" />
              <span className="font-medium text-green-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-5 h-5" />
              <span className="font-medium">Copy Link</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default SocialShare;