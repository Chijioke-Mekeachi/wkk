import React, { useState } from 'react';
import { Send, Building, Users, Globe, Mic } from 'lucide-react';

const SponsorshipForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState('tech');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Submit to your custom backend
      const response = await fetch('http://localhost:5000/api/forms/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          partnershipType: activeTab,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setSubmitStatus('success');
        // Reset form
        setFormData({ name: '', email: '', organization: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const tabs = [
    { id: 'tech', label: 'Tech Collaborators', icon: Building },
    { id: 'church', label: 'Church Sponsors', icon: Users },
    { id: 'ambassador', label: 'Regional Ambassadors', icon: Globe },
    { id: 'speakers', label: 'Event Speakers', icon: Mic }
  ];

  const getTabContent = () => {
    switch (activeTab) {
      case 'tech':
        return {
          title: 'Tech Collaborators',
          description: 'Partner with us to build innovative blockchain solutions for the Kingdom. We\'re looking for developers, blockchain experts, and tech companies who share our vision.',
          benefits: ['Access to early-stage blockchain projects', 'Collaboration with global tech teams', 'Kingdom-focused development opportunities']
        };
      case 'church':
        return {
          title: 'Church Sponsors',
          description: 'Join us as a church sponsor to support the launch and ongoing development of WKK Family. Help us reach more believers worldwide.',
          benefits: ['Recognition at the launch event', 'Priority access to WKK tools', 'Networking with Kingdom leaders']
        };
      case 'ambassador':
        return {
          title: 'Regional Ambassadors',
          description: 'Become a regional ambassador and help us expand WKK Family\'s reach in your area. Lead the charge in bringing Web3 to your local faith community.',
          benefits: ['Leadership role in your region', 'Training and support materials', 'Direct connection to WKK leadership']
        };
      case 'speakers':
        return {
          title: 'Event Speakers',
          description: 'Share your expertise at the WKK Family launch event. We\'re looking for passionate speakers who can educate and inspire our audience on Web3, blockchain, faith-tech integration, and digital ministry.',
          benefits: ['Platform to reach global faith-tech audience', 'Networking with industry leaders and innovators', 'Recognition as a thought leader in faith-driven technology', 'Access to exclusive speaker resources and materials']
        };
      default:
        return tabs[0];
    }
  };

  const content = getTabContent();

  return (
    <div className="max-w-4xl mx-auto">
      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center px-6 py-3 m-2 rounded-full transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <tab.icon className="w-5 h-5 mr-2" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
        <h3 className="text-2xl font-bold text-white mb-4">{content.title}</h3>
        <p className="text-white/80 mb-6">{content.description}</p>
        <ul className="space-y-2 mb-6">
          {content.benefits.map((benefit, index) => (
            <li key={index} className="flex items-center text-white/80">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
        <h3 className="text-2xl font-bold text-white mb-6">Become a Sponsor</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <input
          type="text"
          name="organization"
          placeholder="Organization/Church Name"
          value={formData.organization}
          onChange={handleChange}
          className="w-full mt-6 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          placeholder={activeTab === 'speakers' 
            ? "Tell us about your expertise and the topics you'd like to speak about (e.g., blockchain basics, Web3 for churches, digital ministry, etc.)..." 
            : "Tell us about your interest in partnering with WKK Family..."
          }
          value={formData.message}
          onChange={handleChange}
          rows={4}
          required
          className="w-full mt-6 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />
        
        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="mt-4 p-4 bg-green-600/20 border border-green-500/30 rounded-lg">
            <p className="text-green-300 text-center">
              Thank you! Your {activeTab === 'speakers' ? 'speaker application' : 'partnership request'} has been submitted successfully. We'll be in touch soon!
            </p>
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="mt-4 p-4 bg-red-600/20 border border-red-500/30 rounded-lg">
            <p className="text-red-300 text-center">
              Sorry, there was an error submitting your form. Please try again or contact us directly.
            </p>
          </div>
        )}
        
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-8 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Submitting...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              {activeTab === 'speakers' ? 'Submit Speaker Application' : 'Submit Partnership Request'}
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default SponsorshipForm;