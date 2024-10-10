import { pipeline } from 'stream/promises';
import { stdin, stdout } from 'process';
import { Transform } from 'stream';


class ReverseStringTransformStream extends Transform {
  constructor() {
    super()
  }

  _transform(chunk, encoding, callback) {
    callback(null, String(chunk).split('').reverse().join('') + '\n');
  }
}

const transform = async () => {
  const reverseStringTransformStream = new ReverseStringTransformStream();

  await pipeline(
    stdin,
    reverseStringTransformStream,
    stdout
  );
};

await transform();