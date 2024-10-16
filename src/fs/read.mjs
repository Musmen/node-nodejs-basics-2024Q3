import { readFile as fsPromisesReadFile } from 'fs/promises';

import { getFilePath } from './common/helpers.mjs';
import { ERROR_MESSAGE } from './common/constants.mjs';

const FILE_NAME = 'fileToRead.txt';
const ENCODING_UTF8 = 'utf-8';

const read = async () => {
  const filePath = getFilePath(import.meta.dirname, FILE_NAME);

  try {
    const fileContent = await fsPromisesReadFile(filePath, ENCODING_UTF8);
    console.log(fileContent);
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await read();