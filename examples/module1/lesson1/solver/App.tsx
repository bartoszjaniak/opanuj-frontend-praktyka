import { useState } from 'react';
import { divide, multiply, subtraction, sum } from './functions';

const App = () => {
  const [numA, setNumA] = useState<number>(0);
  const [numB, setNumB] = useState<number>(0);
    const [result, setResult] = useState<number | string>(0);
    const [error, setError] = useState<string | null>(null);

  const doWork = (func: (a: number, b: number) => number) => {
      try {
          setResult(func(numA, numB));
          setError(null);
      } catch (e: any) {
          setError(e.message);
      }
  };

    return (
    <div>
            <div className="grid grid-cols-2 gap-x-4">
                <input
                    type="number"
                    className="rounded-md shadow-md p-4"
                    value={numA}
                    onChange={(e) => setNumA(parseFloat(e.target.value))}
                />
                <input
                    type="number"
                    className="rounded-md shadow-md p-4"
                    value={numB}
                    onChange={(e) => setNumB(parseFloat(e.target.value))}
                />
            </div>
            <div className="grid grid-cols-4 gap-x-4 my-4">
                <button
                    className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
                    onClick={() => doWork(sum)}
                >
                    +
                </button>
                <button
                    className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
                    onClick={() => doWork(subtraction)}
                >
                    -
                </button>
                <button
                    className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
                    onClick={() => doWork(multiply)}
                >
                    *
                </button>
                <button
                    className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
                    onClick={() => doWork(divide)}
                >
                    /
                </button>
            </div>
            {error !== null && (<div>Error: {error}</div>)}
            {error === null && (<div>Result: {result}</div>)}
    </div>
    );
};

export default App;
