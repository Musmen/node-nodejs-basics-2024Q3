import { join } from 'path';

export const getPath = (dirname, subDirName, fileName = '') => join(dirname, subDirName, fileName);