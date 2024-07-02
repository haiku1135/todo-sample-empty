import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import { useTimer } from '@/hooks/useTimer';

const Page: NextPage = () => {
  const { seconds, isActive, handleClickToggle, handleClickReset } = useTimer();

  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div className="flex justify-center">
        <div>
          <h3 className="tect-2xl text-center">時間：{seconds}秒</h3>
          <div className="mt-4 flex justify-center gap-x-2">
            <Button
              onClick={handleClickToggle}
              variant="primary"
              label={!isActive ? '開始' : '停止'}
            />
            <Button onClick={handleClickReset} variant="secondary" label="リセット" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
