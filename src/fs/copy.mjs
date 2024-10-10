import { cp as fsPromisesCopy } from 'fs/promises';

import { getPath } from './common/helpers.mjs';
import { ERROR_MESSAGE, FILES_DIR_NAME } from './common/constants.mjs';

const DESTINATION_FOLDER_NAME = 'files_copy';

const copy = async () => {
  const currentDirectoryPath = import.meta.dirname;

  const filesFolderPath = getPath(currentDirectoryPath, FILES_DIR_NAME);
  const destinationFolderPath = getPath(currentDirectoryPath, DESTINATION_FOLDER_NAME);

  try {
    await fsPromisesCopy( 
      filesFolderPath,
      destinationFolderPath,
      { 
        errorOnExist: true,
        force: false,
        recursive: true
      });
  } catch { 
    throw new Error(ERROR_MESSAGE); 
  } 
};

await copy();