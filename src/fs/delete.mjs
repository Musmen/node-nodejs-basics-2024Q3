import { rm as fsRemove } from 'fs/promises';

import { getFilePath } from '../common/helpers.mjs';
import { ERRORS_MESSAGES } from '../common/constants.mjs';

const fileName = 'fileToRemove.txt';

const remove = async () => {
  const filePath = getFilePath(import.meta.dirname, fileName);

  try {
    await fsRemove(filePath);
  } catch {
    throw new Error(ERRORS_MESSAGES.FS_FAILED);
  }
};

await remove();