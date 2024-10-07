const VARIABLE_RSS_PREFIX = 'RSS_';
const VARIABLE_PREFIX_LENGTH = 4;

const RESULT_STRING_DELIMITER = '; ';

const getEnvVariablePrefix = (envVariableName) => envVariableName.slice(0, VARIABLE_PREFIX_LENGTH);

const getRSSEnvVariablePairString = (envVariableName, envVariablesObject) => `${envVariableName}=${envVariablesObject[envVariableName]}`;

const isRSSEnvVariable = (envVariableName) => getEnvVariablePrefix(envVariableName) === VARIABLE_RSS_PREFIX;

const parseEnv = () => {
  const envVariablesWithRSSPrefix = [];
  const envVariablesObject = process.env;

  for (let envVariableName in envVariablesObject) {
    if (isRSSEnvVariable(envVariableName)) envVariablesWithRSSPrefix.push(getRSSEnvVariablePairString(envVariableName, envVariablesObject));
  }

  console.log(envVariablesWithRSSPrefix.join(RESULT_STRING_DELIMITER));
};

parseEnv();