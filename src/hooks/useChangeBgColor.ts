import { useState } from 'react';

export const COLORS = ['lightblue', 'lightgreen', 'lightpink', 'lavender', 'wheat'];

type UseChangeBgColor = () => {
  currentColorIndex: number;
  handleClickChangeColor: () => void;
};

export const useChangeBgColor: UseChangeBgColor = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const handleClickChangeColor = () => {
    setCurrentColorIndex(Math.floor(Math.random() * COLORS.length));
  };

  return { currentColorIndex, handleClickChangeColor };
};
