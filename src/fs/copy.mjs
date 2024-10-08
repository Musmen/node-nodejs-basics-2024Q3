import { cp } from 'fs/promises';

import { ERRORS_MESSAGES, PATH } from '../common/constants.mjs';
import { getPath } from '../common/helpers.mjs';

const DESTINATION_FOLDER_NAME = 'files_copy';

const copy = async () => {
  const currentDirectoryPath = import.meta.dirname;

  const filesFolderPath = getPath(currentDirectoryPath, PATH.OUTPUT_DIR_NAME);
  const destinationFolderPath = getPath(currentDirectoryPath, DESTINATION_FOLDER_NAME);

  try {
    await cp( 
      filesFolderPath,
      destinationFolderPath,
      { 
        errorOnExist: true,
        force: false,
        recursive: true
      })
  } catch { 
    throw new Error(ERRORS_MESSAGES.FS_FAILED); 
  } 
};

await copy();