import { useEffect, useState } from 'react';

type UseDigitalClock = () => {
  currentTime: Date;
};
export const useDigitalClock: UseDigitalClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timeId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timeId);
    };
  }, []);

  return { currentTime };
};
