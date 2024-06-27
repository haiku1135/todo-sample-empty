import { useState } from 'react';

type UseChangeCelcius = () => {
  celsius: number;
  fahrenheit: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  convertFromCelciusToFahrenheit: (celsius: number) => number;
};

export const useChangeCelcius: UseChangeCelcius = () => {
  const [celsius, setCelsius] = useState<number>(0);
  const [fahrenheit, setFahrenheit] = useState<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCelsius(Number(e.target.value));
  };
  const convertFromCelciusToFahrenheit = (celsius: number) => {
    return (celsius * 9) / 5 + 32;
  };

  return { celsius, fahrenheit, handleChange, convertFromCelciusToFahrenheit };
};
