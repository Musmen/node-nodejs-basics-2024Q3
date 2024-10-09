import { access as fsPromisesAccess } from 'fs/promises';
import { join } from 'path';

import { FILES_DIR_NAME } from './constants.mjs';

export const getPath = (dirname, subDirName, fileName = '') => join(dirname, subDirName, fileName);
export const getFilePath = (dirname, fileName) => getPath(dirname, FILES_DIR_NAME, fileName);

export const isFileExist = async (filePath) => {
  try {
    await fsPromisesAccess(filePath);
    return true;
  } catch {
    return false;
  }
}