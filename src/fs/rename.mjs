import { rename as fsRename } from 'fs/promises';

import { getFilePath, isFileExist } from '../common/helpers.mjs';
import { ERRORS_MESSAGES } from '../common/constants.mjs';

const WRONG_FILE_NAME = 'wrongFilename.txt';
const PROPER_FILE_NAME = 'properFilename.md';

const rename = async () => {
  const wrongFilePath = getFilePath(import.meta.dirname, WRONG_FILE_NAME);
  const properFilePath = getFilePath(import.meta.dirname, PROPER_FILE_NAME);

  try {
    if (await isFileExist(properFilePath)) throw new Error();
    await fsRename(wrongFilePath, properFilePath);
  } catch {
    throw new Error(ERRORS_MESSAGES.FS_FAILED);
  }
};

await rename();