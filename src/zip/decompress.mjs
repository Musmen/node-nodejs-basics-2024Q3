import { open as fsPromisesOpen } from 'fs/promises';
import { pipeline } from 'stream/promises';
import { createGunzip } from 'zlib';

import { getPath } from '../common/helper.mjs';
import { FILES_DIR_NAME } from '../common/constants.mjs';

const INPUT_FILE_NAME = 'archive.gz';
const OUTPUT_FILE_NAME = 'fileToCompress.txt';

const decompress = async () => {
  const inputFilePath = getPath(import.meta.dirname, FILES_DIR_NAME, INPUT_FILE_NAME);
  const inputFd = await fsPromisesOpen(inputFilePath);
  const readingFileStream = inputFd.createReadStream();
  
  const outputFilePath = getPath(import.meta.dirname, FILES_DIR_NAME, OUTPUT_FILE_NAME);
  const outputFd = await fsPromisesOpen(outputFilePath, 'w');
  const writingFileStream = outputFd.createWriteStream();

  const gzipStream = createGunzip();

  await pipeline(
    readingFileStream,
    gzipStream,
    writingFileStream
  );
};

await decompress();