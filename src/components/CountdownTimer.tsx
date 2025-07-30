import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('August 20, 2025 10:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeCard: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
      <div className="text-3xl md:text-4xl font-bold text-white mb-2">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-sm uppercase tracking-wide text-white/80">{label}</div>
    </div>
  );

  return (
    <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
      <TimeCard value={timeLeft.days} label="Days" />
      <TimeCard value={timeLeft.hours} label="Hours" />
      <TimeCard value={timeLeft.minutes} label="Minutes" />
      <TimeCard value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default CountdownTimer;