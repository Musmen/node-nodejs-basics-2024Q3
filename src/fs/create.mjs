import { writeFile as fsPromisesWriteFile } from 'fs/promises';

import { getFilePath } from './common/helpers.mjs';
import { ERROR_MESSAGE } from './common/constants.mjs';

const CONTENT_TO_WRITE = 'I am fresh and young';
const FILE_NAME = 'fresh.txt';

const create = async () => {
  const outputFilePath = getFilePath(import.meta.dirname, FILE_NAME);
  
  try {
    await fsPromisesWriteFile(outputFilePath, CONTENT_TO_WRITE, { flag: 'wx' });
  } catch { 
    throw new Error(ERROR_MESSAGE); 
  }
};

await create();