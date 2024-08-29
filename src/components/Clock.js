// src/components/Clock.js

import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="clock">
      <h2>Current Time: {currentTime.toLocaleTimeString()}</h2>
    </div>
  );
};

export default Clock;
