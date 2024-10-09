import { access as fsPromisesAccess } from 'fs/promises';

import { getPath } from '../../common/helper.mjs';
import { FILES_DIR_NAME } from './constants.mjs';

export const getFilePath = (dirname, fileName) => getPath(dirname, FILES_DIR_NAME, fileName);

export const isFileExist = async (filePath) => {
  try {
    await fsPromisesAccess(filePath);
    return true;
  } catch {
    return false;
  }
}

export { getPath };