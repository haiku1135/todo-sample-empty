import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import { useQuiz, QUESTION, CHOICE_LIST } from '@/hooks/useQuiz';

const Page: NextPage = () => {
  const { result, handleChoice, handleSubmit, userChoice } = useQuiz();
  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div className="flex justify-center">
        <div>
          <h3 className="mb-4 text-center text-2xl">{QUESTION}</h3>
          <div className="mt-4 flex justify-center gap-x-2">
            {/* ここに選択をぐるぐる回します */}
            {CHOICE_LIST.map((choice, index) => (
              <Button
                onClick={() => handleChoice(choice)}
                key={index}
                label={choice}
                variant="secondary"
                className={`${choice === userChoice && 'bg-black '}`}
              />
            ))}
          </div>

          <div className="mt-4 flex justify-center">
            <Button onClick={handleSubmit} label="submit" variant="primary" />
          </div>

          <h3 className="mt-8 text-center text-4xl">{result}</h3>
        </div>
      </div>
    </div>
  );
};

export default Page;
