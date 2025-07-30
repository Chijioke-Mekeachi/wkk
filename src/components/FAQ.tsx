import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: "What is Web3 Kingdom Konnect (WKK Family)?",
      answer: "WKK Family is a faith-led Web3 initiative that empowers churches and believers with blockchain tools, NFTs, and decentralized platforms to grow ministries, foster transparency, and build Kingdom impact in the digital world."
    },
    {
      question: "Do I need technical knowledge to attend?",
      answer: "Not at all! Our event is designed for everyone - from complete beginners to tech experts. We'll provide clear explanations and practical demonstrations that anyone can understand."
    },
    {
      question: "How can my church benefit from blockchain technology?",
      answer: "Churches can use blockchain for transparent donation tracking, secure record keeping, global fundraising through NFTs, and connecting with believers worldwide through decentralized platforms."
    },
    {
      question: "Is there a cost to attend the launch event?",
      answer: "The event is free to attend! We believe in making Web3 education accessible to all believers. Simply register through our Luma link to secure your spot."
    },
    {
      question: "Will the event be available online?",
      answer: "Yes! We're hosting both in-person (Port Harcourt, Nigeria) and online sessions to ensure global participation. Online attendees will have full access to all presentations and Q&A sessions."
    },
    {
      question: "What will I learn at the event?",
      answer: "You'll discover how blockchain works, see live demos of Web3 tools for ministries, learn about transparent donation systems, explore NFT fundraising opportunities, and network with like-minded believers."
    },
    {
      question: "How can I become a partner or sponsor?",
      answer: "We welcome partnerships! Fill out our sponsorship form on this page, or contact us directly. We have opportunities for tech collaborators, church sponsors, and regional ambassadors."
    },
    {
      question: "What cryptocurrencies do you accept for donations?",
      answer: "We accept Bitcoin (BTC), Ethereum (ETH), Tether (USDT), Blurt (BLURT), and other major cryptocurrencies. Traditional payment methods are also available."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
            >
              <h3 className="text-lg font-semibold text-white pr-4">{item.question}</h3>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-blue-400 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-blue-400 flex-shrink-0" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4">
                <p className="text-white/80 leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;