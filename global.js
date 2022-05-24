// Global object
// The global object in node is called global. This represent the global context in a node environment

// console.log(global)

// global.setTimeout(() => {
//     console.log("Global object in nodejs environment")
// }, 1000);

// The methods in the global can also be accessed without adding the global. phrase.
// Example below
setTimeout(() => {
    console.log("Global object in nodejs environment");
    clearInterval(interval)
}, 3000);

const interval = setInterval(() => {
    console.log('Interval time runs continuously')
}, 1000);

// Directory & file path in node
console.log(__dirname)  //Directory or folder path of the current file
console.log(__filename)  //File path of the current file