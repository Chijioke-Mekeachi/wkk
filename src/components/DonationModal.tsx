import React, { useState } from 'react';
import { X, Heart, CreditCard, Smartphone, Bitcoin, DollarSign } from 'lucide-react';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose }) => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'crypto' | 'mobile'>('card');
  const [cryptoType, setCryptoType] = useState('bitcoin');

  if (!isOpen) return null;

  const predefinedAmounts = [25, 50, 100, 250, 500, 1000];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  const getCurrentAmount = () => {
    return selectedAmount || parseFloat(customAmount) || 0;
  };

  const handleDonate = () => {
    const amount = getCurrentAmount();
    if (amount > 0) {
      // Handle donation logic here
      console.log(`Donating $${amount} via ${paymentMethod}`);
      alert(`Thank you for your $${amount} donation! Redirecting to payment...`);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Heart className="w-6 h-6 text-red-500 mr-2" />
              <h2 className="text-2xl font-bold text-gray-800">Support WKK Family</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Amount Selection */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Choose Amount</h3>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {predefinedAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleAmountSelect(amount)}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    selectedAmount === amount
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  ${amount}
                </button>
              ))}
            </div>
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="number"
                placeholder="Custom amount"
                value={customAmount}
                onChange={handleCustomAmountChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Payment Method Selection */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Payment Method</h3>
            <div className="space-y-3">
              <button
                onClick={() => setPaymentMethod('card')}
                className={`w-full p-4 rounded-lg border-2 transition-all flex items-center ${
                  paymentMethod === 'card'
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <CreditCard className="w-5 h-5 mr-3 text-blue-600" />
                <div className="text-left">
                  <div className="font-medium">Credit/Debit Card</div>
                  <div className="text-sm text-gray-500">Visa, Mastercard, American Express</div>
                </div>
              </button>

              <button
                onClick={() => setPaymentMethod('mobile')}
                className={`w-full p-4 rounded-lg border-2 transition-all flex items-center ${
                  paymentMethod === 'mobile'
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Smartphone className="w-5 h-5 mr-3 text-green-600" />
                <div className="text-left">
                  <div className="font-medium">Mobile Payment</div>
                  <div className="text-sm text-gray-500">PayPal, Apple Pay, Google Pay</div>
                </div>
              </button>

              <button
                onClick={() => setPaymentMethod('crypto')}
                className={`w-full p-4 rounded-lg border-2 transition-all flex items-center ${
                  paymentMethod === 'crypto'
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Bitcoin className="w-5 h-5 mr-3 text-orange-600" />
                <div className="text-left">
                  <div className="font-medium">Cryptocurrency</div>
                  <div className="text-sm text-gray-500">Bitcoin, Ethereum, USDT, and more</div>
                </div>
              </button>
            </div>
          </div>

          {/* Crypto Options */}
          {paymentMethod === 'crypto' && (
            <div className="mb-6">
              <h4 className="font-medium text-gray-800 mb-3">Select Cryptocurrency</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC' },
                  { id: 'ethereum', name: 'Ethereum', symbol: 'ETH' },
                  { id: 'usdt', name: 'Tether', symbol: 'USDT' },
                  { id: 'blurt', name: 'Blurt', symbol: 'BLURT' }
                ].map((crypto) => (
                  <button
                    key={crypto.id}
                    onClick={() => setCryptoType(crypto.id)}
                    className={`p-3 rounded-lg border-2 transition-all ${
                      cryptoType === crypto.id
                        ? 'border-orange-500 bg-orange-50 text-orange-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-medium">{crypto.symbol}</div>
                    <div className="text-xs text-gray-500">{crypto.name}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Donation Summary */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Donation Amount:</span>
              <span className="text-2xl font-bold text-gray-800">
                ${getCurrentAmount().toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-600">Payment Method:</span>
              <span className="text-gray-800 capitalize">
                {paymentMethod === 'crypto' ? `${cryptoType.toUpperCase()}` : paymentMethod}
              </span>
            </div>
          </div>

          {/* Donate Button */}
          <button
            onClick={handleDonate}
            disabled={getCurrentAmount() === 0}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            <Heart className="w-5 h-5 mr-2" />
            Donate ${getCurrentAmount().toFixed(2)}
          </button>

          <p className="text-xs text-gray-500 text-center mt-4">
            Your donation helps support the WKK Family mission to bring Web3 technology to believers worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationModal;