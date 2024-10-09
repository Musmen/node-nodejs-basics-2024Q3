import { rename as fsPromisesRename } from 'fs/promises';

import { getFilePath, isFileExist } from './common/helpers.mjs';
import { ERROR_MESSAGE } from './common/constants.mjs';

const FILE_NAMES = {
  WRONG: 'wrongFilename.txt',
  PROPER: 'properFilename.md'
};

const rename = async () => {
  const wrongFilePath = getFilePath(import.meta.dirname, FILE_NAMES.WRONG);
  const properFilePath = getFilePath(import.meta.dirname, FILE_NAMES.PROPER);

  try {
    if (await isFileExist(properFilePath)) throw new Error();
    await fsPromisesRename(wrongFilePath, properFilePath);
  } catch {
    throw new Error(ERROR_MESSAGE);
  }
};

await rename();