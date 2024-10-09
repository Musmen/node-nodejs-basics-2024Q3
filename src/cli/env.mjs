const VARIABLE_RSS_PREFIX = 'RSS_';
const RESULT_STRING_DELIMITER = '; ';

const isRSSEnvVariable = (envVariableName) => envVariableName.startsWith(VARIABLE_RSS_PREFIX);
const getEnvVariablePairString = (envVariableName, envVariablesObject) => `${envVariableName}=${envVariablesObject[envVariableName]}`;

const parseEnv = () => {
  const envRSSVariablesPairsStrings  = [];
  const envVariablesObject = process.env;

  for (let envVariableName in envVariablesObject) {
    if (isRSSEnvVariable(envVariableName)) envRSSVariablesPairsStrings.push(getEnvVariablePairString(envVariableName, envVariablesObject));
  }

  console.log(envRSSVariablesPairsStrings.join(RESULT_STRING_DELIMITER));
};

parseEnv();