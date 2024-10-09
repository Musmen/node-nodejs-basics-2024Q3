import { open as fsPromisesOpen } from 'fs/promises';
import { pipeline } from 'stream/promises';
import { stdin } from 'process';

import { getPath } from '../common/helper.mjs';
import { FILES_DIR_NAME } from '../common/constants.mjs';

const OUTPUT_FILE_NAME = 'fileToWrite.txt';

const write = async () => {
  const filePath = getPath(import.meta.dirname, FILES_DIR_NAME, OUTPUT_FILE_NAME);
  const fd = await fsPromisesOpen(filePath, 'w');
  const writingFileStream = fd.createWriteStream();
  await pipeline(
    stdin,
    writingFileStream
  );
};

await write();

// write.js - implement function that writes process.stdin data into file fileToWrite.txt content using Writable Stream