import { NextPage } from 'next';


import { useChangeCycleColor } from '@/hooks/useChangeCycleColor';

const Page: NextPage = () => {
  const { light } = useChangeCycleColor();
  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div className="flex justify-center gap-x-2">
        <div
          className={`size-12 rounded-full  ${light === 'red' ? 'bg-red-500' : 'bg-gray-700'}`}
        />
        <div
          className={`size-12 rounded-full  ${light === 'yellow' ? 'bg-yellow-500' : 'bg-gray-700'}`}
        />
        <div
          className={`size-12 rounded-full  ${light === 'green' ? 'bg-green-500' : 'bg-gray-700'}`}
        />
      </div>
    </div>
  );
};

export default Page;
