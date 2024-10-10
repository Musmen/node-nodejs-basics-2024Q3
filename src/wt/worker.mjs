import { parentPort } from 'worker_threads';

const ARGS_INPUT_FROM_MAIN_THREAD_INDEX = 2;

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
  const inputFromMainThread = process.argv[ARGS_INPUT_FROM_MAIN_THREAD_INDEX];
  const result = nthFibonacci(inputFromMainThread);
  parentPort.postMessage(result);
};

sendResult();