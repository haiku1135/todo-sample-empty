import { useState } from 'react';

type UseTextShowHidden = () => {
  isHidden: boolean; // isHidden property added
  handleCLickIndicate: () => void;
  handleClickHide: () => void;
};

export const useTextShowHidden: UseTextShowHidden = () => {
  const [isHidden, setIsHidden] = useState(false);

  const handleCLickIndicate = () => {
    setIsHidden(false);
  };

  const handleClickHide = () => {
    setIsHidden(true);
  };

  return { isHidden, handleCLickIndicate, handleClickHide };
};
