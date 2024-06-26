import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import { useTextShowHidden } from '@/hooks/useTextShowHidden';

const Page: NextPage = () => {
  const { isHidden, handleCLickIndicate, handleClickHide } = useTextShowHidden();

  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div className="flex items-center justify-center">
        <div>
          {!isHidden && <h2 className="mb-4 text-6xl">Hello!</h2>}

          <div className="flex justify-center gap-x-4">
            <Button onClick={handleCLickIndicate} label="visible" variant="primary" />
            <Button onClick={handleClickHide} label="invisible" variant="primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
