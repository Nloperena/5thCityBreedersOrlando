import React, { useState, useEffect } from 'react';
import puppyImage from '../assets/puppy1.png'; // Import the puppy image

const puppies = [
  { name: 'Max', sex: 'Male', description: 'Loves to play and is very friendly.', image: puppyImage, available: true },
  { name: 'Bella', sex: 'Female', description: 'Calm and loves cuddles.', image: puppyImage, available: false },
  { name: 'Rocky', sex: 'Male', description: 'Energetic and adventurous.', image: puppyImage, available: true },
  { name: 'Lucy', sex: 'Female', description: 'Loves playing fetch.', image: puppyImage, available: false },
  { name: 'Buddy', sex: 'Male', description: 'Friendly and loves to run.', image: puppyImage, available: true },
  { name: 'Daisy', sex: 'Female', description: 'Very affectionate and gentle.', image: puppyImage, available: true },
  { name: 'Charlie', sex: 'Male', description: 'Playful and loves to explore.', image: puppyImage, available: true },
  { name: 'Molly', sex: 'Female', description: 'Loves to play with toys.', image: puppyImage, available: true },
  { name: 'Duke', sex: 'Male', description: 'Loyal and protective.', image: puppyImage, available: false },
  { name: 'Luna', sex: 'Female', description: 'Very curious and energetic.', image: puppyImage, available: true },
  { name: 'Rex', sex: 'Male', description: 'Loves to dig and explore.', image: puppyImage, available: true },
  { name: 'Zoey', sex: 'Female', description: 'Enjoys playing with other dogs.', image: puppyImage, available: true },
  { name: 'Buster', sex: 'Male', description: 'A bit shy but very loving.', image: puppyImage, available: false },
  { name: 'Sadie', sex: 'Female', description: 'Very playful and friendly.', image: puppyImage, available: true },
  { name: 'Jack', sex: 'Male', description: 'Loves to chew on toys.', image: puppyImage, available: true },
  { name: 'Roxy', sex: 'Female', description: 'Enjoys long walks and playing.', image: puppyImage, available: false },
];

function PuppiesList() {
  const [timeRemaining, setTimeRemaining] = useState(null);
  const [countdownText, setCountdownText] = useState('');

  // Calculate remaining time to a specific date
  const calculateTimeRemaining = (targetDate) => {
    const now = new Date();
    const difference = targetDate - now;
    const seconds = Math.floor(difference / 1000);
    return seconds > 0 ? seconds : 0;
  };

  useEffect(() => {
    const now = new Date();
    const octoberFirst = new Date(now.getFullYear(), 9, 1); // Oct 1st (Month is 0-based)
    const octoberFifteenth = new Date(now.getFullYear(), 9, 15); // Oct 15th

    let targetDate;

    // Determine which countdown to show
    if (now < octoberFirst) {
      setCountdownText('Countdown to Open Eyes!');
      targetDate = octoberFirst;
    } else if (now >= octoberFirst && now < octoberFifteenth) {
      setCountdownText('Countdown to Pick-up Day!');
      targetDate = octoberFifteenth;
    } else {
      setCountdownText('Puppies Available Now!');
      setTimeRemaining(0); // No countdown needed, puppies are available
      return;
    }

    setTimeRemaining(calculateTimeRemaining(targetDate));

    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => {
        const newTime = calculateTimeRemaining(targetDate);
        if (newTime <= 0) {
          clearInterval(timer);
          if (now < octoberFirst) {
            setCountdownText('Countdown to Pick-up Day!');
            setTimeRemaining(calculateTimeRemaining(octoberFifteenth));
          } else {
            setCountdownText('Puppies Available Now!');
            setTimeRemaining(0);
          }
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const secs = seconds % 60;

    return `${days}d ${hours}h ${minutes}m ${secs}s`;
  };

  return (
    <section className="bg-blue-800 text-white p-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">See Our Puppies</h2>
        {timeRemaining !== null && (
          <div className="bg-white text-black rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-bold mb-4">{countdownText}</h3>
            {timeRemaining > 0 ? (
              <p className="text-xl">{formatTime(timeRemaining)}</p>
            ) : (
              <p className="text-xl text-green-600 font-bold">Puppies Available Now!</p>
            )}
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {puppies.map((puppy, index) => (
            <div key={index} className="relative bg-white text-black rounded-lg overflow-hidden p-4">
              {/* Banner for Availability */}
              <div
                className={`absolute top-2 left-2 px-4 py-1 rounded-full text-sm font-semibold ${
                  puppy.available ? 'bg-green-500' : 'bg-red-500'
                } text-white`}
              >
                {puppy.available ? 'Available' : 'Sold'}
              </div>
              <img
                src={puppy.image}
                alt={`${puppy.name} the puppy`}
                className="rounded-t-lg h-48 w-full object-cover"
              />
              <h3 className="text-xl font-bold mt-4">{puppy.name}</h3>
              <p className="text-gray-600">{puppy.sex}</p>
              <p className="text-gray-600">{puppy.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PuppiesList;
