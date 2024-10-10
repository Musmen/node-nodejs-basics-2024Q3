import { rm as fsPromisesRemove } from 'fs/promises';

import { getFilePath } from './common/helpers.mjs';
import { ERROR_MESSAGE } from './common/constants.mjs';

const FILE_NAME = 'fileToRemove.txt';

const remove = async () => {
  const filePath = getFilePath(import.meta.dirname, FILE_NAME);

  try {
    await fsPromisesRemove(filePath);
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await remove();