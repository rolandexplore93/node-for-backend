// STREAMS allow you to read data before it's being read completely
const fs = require('fs')

// createReadStream: Used to read stream of multiple data
const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8'});
// createWriteStream: Used to write a data file in a bit of time when passing data from readStream to writeStream
const writeStream = fs.createWriteStream('./docs/blog4.txt');
const writeStreamTwo = fs.createWriteStream('./docs/blog5.txt');

readStream.on(('data'), (chunk) => {
    console.log('-- NEW CHUNK OF DATA --');
    console.log(chunk);
    writeStream.write('\nNEW CHUCK\n');   // writeStream.write() linked
    writeStream.write(chunk)
})

// PIPE: This is another alternative to fs.createWriteStream(); it is shorter to write
readStream.pipe(writeStreamTwo)

