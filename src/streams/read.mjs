import { open as fsPromisesOpen } from 'fs/promises';
import { pipeline } from 'stream/promises';
import { stdout } from 'process';

import { getPath } from '../common/helper.mjs';
import { FILES_DIR_NAME } from '../common/constants.mjs';

const INPUT_FILE_NAME = 'fileToRead.txt';

const read = async () => {
  const filePath = getPath(import.meta.dirname, FILES_DIR_NAME, INPUT_FILE_NAME);
  const fd = await fsPromisesOpen(filePath);
  const readingFileStream = fd.createReadStream();
  await pipeline(
    readingFileStream,
    stdout
  );
};

await read();