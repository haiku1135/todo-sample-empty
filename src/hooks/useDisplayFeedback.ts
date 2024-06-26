import { useState } from 'react';

type UseDisplayFeedback = () => {
  inputValue: string;
  feedbackList: string[];
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: () => void;
};

export const useDisplayFeedback = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const [feedbackList, setFeedbackList] = useState<string[]>([]);

  const handleSubmit = () => {
    if (!inputValue.trim()) {
      return;
    }
    setFeedbackList((prevState) => [...prevState, inputValue]);
    setInputValue('');
  };

  return { inputValue, feedbackList, handleInputChange, handleSubmit };
};
