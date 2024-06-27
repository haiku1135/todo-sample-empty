import { NextPage } from 'next';

import { useChangeCelcius } from '@/hooks/useChangeCelcius';
const Page: NextPage = () => {
  const { celsius, fahrenheit, handleChange, convertFromCelciusToFahrenheit } = useChangeCelcius();
  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div className="flex justify-center">
        <div>
          <div className="flex items-center gap-2 ">
            <label htmlFor="celsius">摂氏温度</label>
            <input
              className="w-10 rounded-sm border px-2 py-1 outline-none"
              id="celsius"
              type="number"
              onChange={handleChange}
            />
          </div>
          <p>華氏温度: {convertFromCelciusToFahrenheit(celsius)}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
