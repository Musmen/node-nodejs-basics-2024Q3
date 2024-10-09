import { Writable } from 'stream';
import { pipeline as streamPromisesPipeline } from 'stream/promises';
import { open as fsPromisesOpen } from 'fs/promises';
import { createHash as cryptoCreateHash } from 'crypto';

import { getPath } from '../common/helper.mjs';
import { FILES_DIR_NAME } from '../common/constants.mjs';

const HASH_TYPE = 'sha256';
const INPUT_FILE_PATH = 'fileToCalculateHashFor.txt';

class ConsoleLoggerStream extends Writable {
  constructor() {
    super();
  }

  _write(chunk) {
    console.log(chunk.toString('hex'));
  }
}

const consoleLoggerStream = new ConsoleLoggerStream();

const calculateHash = async () => {
  const inputFilePath = getPath(import.meta.dirname, FILES_DIR_NAME, INPUT_FILE_PATH);
  const fd = await fsPromisesOpen(inputFilePath);
  const inputStream = fd.createReadStream();

  const calculateHashTransformStream = cryptoCreateHash(HASH_TYPE);
  
  await streamPromisesPipeline(
    inputStream,
    calculateHashTransformStream,
    consoleLoggerStream
  );
};

calculateHash();