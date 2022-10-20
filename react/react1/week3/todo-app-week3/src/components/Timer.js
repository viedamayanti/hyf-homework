import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => setCount(count + 1), 1000);
  }, [count]);
  return <h4> You have used {count} seconds on this website</h4>;
};
export default Timer;
