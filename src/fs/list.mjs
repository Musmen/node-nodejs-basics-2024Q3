import { readdir } from 'fs/promises';

import { getPath } from '../common/helpers.mjs';
import { ERRORS_MESSAGES, PATH } from '../common/constants.mjs';

const list = async () => {
  const filesPath = getPath(import.meta.dirname, PATH.OUTPUT_DIR_NAME);

  try {
    const dirContent = await readdir(filesPath, { recursive: true });
    console.log(dirContent);
  } catch {
    throw new Error(ERRORS_MESSAGES.FS_FAILED);
  }
};

await list();
