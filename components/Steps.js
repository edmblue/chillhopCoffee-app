import { stepsList } from '@/data';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Steps = () => {
  const router = useRouter();

  const [width, setWidth] = useState('2%');

  const handleRedirection = (url) => {
    router.push(url);
  };

  const handleProgress = () => {
    if (router.pathname === '/') {
      setWidth('2%');
    } else if (router.pathname === '/pedido') {
      setWidth('50%');
    } else if (router.pathname === '/orden') {
      setWidth('100%');
    }
  };

  useEffect(() => {
    handleProgress();
  }, []);

  return (
    <div className="my-3">
      <div className="flex justify-between text-xl">
        {stepsList.map((step) => (
          <button
            onClick={() => {
              handleRedirection(step.url);
            }}
            className="uppercase text-red-950 font-black"
            key={step.step}
          >
            {step.nombre}
          </button>
        ))}
      </div>
      <div className="bg-gray-400 w-full w- h-2 rounded-full mt-2">
        <div
          className={`bg-red-950 h-2 rounded-full`}
          style={{ width: width }}
        ></div>
      </div>
    </div>
  );
};

export default Steps;
