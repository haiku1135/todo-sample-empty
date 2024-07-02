import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import { useStarWars } from '@/hooks/useStarWars';

const Page: NextPage = () => {
  const { character, setId } = useStarWars();
  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div className="flex justify-center">
        <div>
          {character ? (
            <div className="text-center text-base">
              <h2>{character.name}</h2>
              <p>身長：{character.height}</p>
              <p>体重：{character.mass}</p>
              <p>髪の色：{character.hair_color}</p>
              <p>肌の色：{character.skin_color}</p>
              <p>目の色：{character.eye_color}</p>
              <p>生年：{character.birth_year}</p>
              <p>性別：{character.gender}</p>
            </div>
          ) : (
            <p className="text-center text-base">読み込み中...</p>
          )}
          <div className="flex justify-center">
            <Button
              onClick={() => setId((prevState) => prevState + 1)}
              variant="primary"
              label="次のキャラクター"
              className="mt-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
