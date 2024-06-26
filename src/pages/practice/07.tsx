import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import { useDisplayFeedback } from '@/hooks/useDisplayFeedback';
const Page: NextPage = () => {
  const { inputValue, feedbackList, handleInputChange, handleSubmit } = useDisplayFeedback();

  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div className="flex justify-center">
        <div>
          <textarea
            className="rounded-sm border px-3 py-2"
            placeholder="feedback"
            value={inputValue}
            onChange={handleInputChange}
          ></textarea>
          <div className="mt-4 flex justify-center">
            <Button label="submit" variant="primary" onClick={handleSubmit} />
          </div>
          <div className="mt-4">
            <ul>
              {feedbackList.map((feedback, index) => (
                <li key={index}>{feedback}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
