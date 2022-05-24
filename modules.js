// MODULES and REQUIRE
// Multiples files usage and how to access them
// use require() statement to import external files into current file
const listOfPeople = require('./people')  //require() return an empty object
const {people, ages} = require('./people')  //destructing exports

// console.log(listOfPeople.people, listOfPeople.ages)
// console.log(people, ages)

// NOTE
// 1. Importing an external file do not give you access to the file content
// 2a. To access an external file content from your current file, add module.exports = 'value you want to be displayed' in the external file
// this value of module.export will be accessible


// Modules in nodejs- OS modules
const os = require('os')
console.log(os.platform(), os.homedir())