import { NextPage } from 'next';

import ThreeBoxContent from '@/components/ThreeBoxContent';

const Page: NextPage = () => {
  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <ThreeBoxContent
        title1="これはタイトルです"
        content1="これはコンテンツです"
        title2="これはタイトルです"
        content2="これはコンテンツです"
        title3="これはタイトルです"
        content3="これはコンテンツです"
      />
    </div>
  );
};

export default Page;
