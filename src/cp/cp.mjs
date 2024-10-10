import { fork as childProcessFork } from 'child_process';

import { getPath } from '../common/helper.mjs';
import { FILES_DIR_NAME } from '../common/constants.mjs';

const SCRIPT_FILE_PATH = 'script.js';

const spawnChildProcess = (args) => {
  const scriptPath = getPath(import.meta.dirname, FILES_DIR_NAME, SCRIPT_FILE_PATH);
  childProcessFork(scriptPath, args, { stdio: [0, 1, 2, 'ipc'] });
};

spawnChildProcess(['first', 'the second', 3, [4, 4, 4, 4]]);