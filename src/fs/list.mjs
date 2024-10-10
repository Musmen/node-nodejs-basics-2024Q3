import { readdir as fsPromisesReadDir } from 'fs/promises';

import { getPath } from './common/helpers.mjs';
import { ERROR_MESSAGE, FILES_DIR_NAME } from './common/constants.mjs';

const list = async () => {
  const filesPath = getPath(import.meta.dirname, FILES_DIR_NAME);

  try {
    const dirContent = await fsPromisesReadDir(filesPath, { recursive: true });
    console.log(dirContent);
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await list();