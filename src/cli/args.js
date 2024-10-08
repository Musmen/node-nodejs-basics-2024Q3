const FIRST_ARGUMENT_INDEX = 2;
const VARIABLE_PREFIX = '--';

const isVariable = (argument) => argument.startsWith(VARIABLE_PREFIX);

const getVariableValueFromArguments = (args, index) => {
  if ((args.length <= index + 1) || isVariable(args[index + 1])) return '';
  return args[index + 1];
}

const parseArgs = () => {
  const args = process.argv.slice(FIRST_ARGUMENT_INDEX);
  const result = [];

  args.forEach((argument, index) => {
    if (isVariable(argument)) result.push(`${argument} is ${getVariableValueFromArguments(args, index)}`);
  });

  console.log(result.join(', '));
};

parseArgs();