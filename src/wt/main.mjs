import { cpus as getCPUsCount } from 'os';
import { Worker } from 'worker_threads';

const ADDITIONAL_ITERATIONS = 10;

const STATUS = {
  FULFILLED: 'fulfilled'  ,
  RESOLVED: 'resolved',
  ERROR: 'error'
};

const parseResult = ({ status, value }) => {
  if (status === STATUS.FULFILLED) {
    return {
      status: STATUS.RESOLVED,
      data: value
    }; 
  }

  return {
    status: STATUS.ERROR,
    data: null
  }
}

const performCalculations = async () => {
  const workerScriptRelativePath = `${import.meta.dirname}/worker.mjs`;
  const CPUsCount = getCPUsCount().length;
  const results = [];

  for (let i = 0; i < CPUsCount; i++) {
    const worker = new Worker(
      workerScriptRelativePath,
      { argv: [i + ADDITIONAL_ITERATIONS] },
      { stdout: true, stderr: true }
    );

    const resultPromise = new Promise((resolve, reject) => {
      worker.on('error', (error) => reject(error));
      worker.on('message', (message) => resolve(message));
    });

    results.push(resultPromise);
  }

  const result = await Promise.allSettled(results);
  console.log(result.map(parseResult));
};

await performCalculations();