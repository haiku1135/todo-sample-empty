import { useEffect, useState } from 'react';
const QUOTES = [
  '人生に失敗がないと、人生を失敗する',
  '失敗は成功の前奏',
  '失敗は成功の母音',
  '失敗は成功のトリック',
  '失敗は成功のフレンチ',
];

type UseQuotesRandom = () => {
  currentQuote: string;
  handleQuote: () => void;
};

export const useQuotesRandom: UseQuotesRandom = () => {
  const [currentQuote, setCurrentQuote] = useState('');
  const handleQuote = () => {
    const randomIndex = Math.floor(Math.random() * QUOTES.length);
    setCurrentQuote(QUOTES[randomIndex]);
  };
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * QUOTES.length);
    setCurrentQuote(QUOTES[randomIndex]);
  }, []);

  return { currentQuote, handleQuote };
};
