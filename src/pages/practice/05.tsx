import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import { useChangeBgColor, COLORS } from '@/hooks/useChangeBgColor';

const Page: NextPage = () => {
  const { currentColorIndex, handleClickChangeColor } = useChangeBgColor();
  return (
    <div
      className="mx-auto mt-10 h-screen max-w-4xl pt-8"
      style={{ backgroundColor: COLORS[currentColorIndex] }}
    >
      <div className="flex items-center justify-center">
        <Button label="Change Color" variant="primary" onClick={handleClickChangeColor} />
      </div>
    </div>
  );
};

export default Page;
