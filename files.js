// FILE SYSTEM IN NODEJS
// Nodejs can be used to interact with files to readFile, writeFile, make directory and delete file
// import 'fs' to do this
const fs = require('fs')

// readFile
fs.readFile('./docs/blog1.txt', (err, data) => {
    console.log("I readFile successfully")
    console.log(data)   //Output result to buffer: Buffer is a package of data received when reading a file
    // To get the file data, use attach toString() to the data
    console.log(data.toString())
})

// writeFile
// a. This is overwrite a file with our new text
fs.writeFile('./docs/blog1.txt', 'Hello Roland, you are now a student of NetNinja', () => {
    console.log('Blog1 file overwritted successfully')
})

// b. If the path specified is wrong, instead of throw an error, a new file will be created
fs.writeFile('./docs/blog2.txt', 'Hello Roland, welcome to NetNinja', () => {
    console.log('New file created')
})