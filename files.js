// FILE SYSTEM IN NODEJS
// Nodejs can be used to interact with files to readFile, writeFile, make directory and delete file
// import 'fs' to do this
const fs = require('fs')

// READING FILES
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err){console.log(err)}
//     console.log("I readFile successfully")
//     console.log(data)   //Output result to buffer: Buffer is a package of data received when reading a file
//     // To get the file data, use attach toString() to the data
//     console.log(data.toString())
// })

// WRITING FILES
// a. This is overwrite a file with our new text
// fs.writeFile('./docs/blog1.txt', 'Hello Roland, you are now a student of NetNinja', () => {
//     console.log('Blog1 file overwritten successfully')
// })

// // b. If the path specified is wrong, instead of throw an error, a new file will be created
// fs.writeFile('./docs/blog2.txt', 'Hello Roland, welcome to NetNinja', () => {
//     console.log('New file created')
// })

// CREATING DIRECTORIES
//Note: do not run the code if the folder already exist...
// Check if a project exist below using fs.existsSync(){}
if (!fs.existsSync('./assets')){
    fs.mkdir('./assets', (error) => {
        if (error) {console.log(error)} 
        console.log('New folder created')
    })
} else {
    fs.rmdir('./assets', (error) => {
        if (error) console.log(error)
        console.log('Folder deleted')
    })
}

// DELETE FILES
// fs.unlink(arg1, arg2) is used to delete files in nodejs
if (fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', (error) => {
        if (error) console.log(error);
        console.log("Target file has been deleted")
    })
}