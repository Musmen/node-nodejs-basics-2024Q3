import { join } from 'path';

import { PATH } from './constants.mjs';

export const getPath = (dirname, subDirName, fileName = '') => join(dirname, subDirName, fileName);
export const getFilePath = (dirname, fileName) => getPath(dirname, PATH.OUTPUT_DIR_NAME, fileName);