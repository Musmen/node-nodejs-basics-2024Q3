import { writeFile } from 'fs/promises';

import { getFilePath } from '../common/helpers.mjs';
import { ERRORS_MESSAGES, MESSAGES, PATH } from '../common/constants.mjs';

const create = async () => {
  const outputFilePath = getFilePath(import.meta.dirname, PATH.FS_OUTPUT_FILE_NAME);
  
  try {
    await writeFile(outputFilePath, MESSAGES.FS_FRESH, { flag: 'wx' })
  } catch { 
    throw new Error(ERRORS_MESSAGES.FS_FAILED); 
  }
};

await create();