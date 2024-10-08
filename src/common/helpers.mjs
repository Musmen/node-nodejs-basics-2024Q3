import { join } from 'path';

import { PATH } from './constants.mjs';

export const getFilePath = (dirname, fileName) => join(dirname, PATH.OUTPUT_DIR_NAME, fileName);