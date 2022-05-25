const http = require('http')
const fs = require('fs')
// console.log(http)  // Listed out HTTP methods and status codes

const server = http.createServer((request, response) => {
    console.log(request.url, request.method)

    //set header content type
    response.setHeader('Content-Type', 'text/html'); //html file

    //Routing to paths
    let path = './views/'
    switch (request.url) {
        case '/':
            path += 'index.html';
            response.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            response.statusCode = 200;
            break;
        case '/about-me':
            response.statusCode = 301;
            response.setHeader('Location', '/about')
            response.end()
            break;
        default:
            path += '404.html';
            response.statusCode = 404;
            break;
    }

    // send HTML file to the browser... First, read the file and then send it
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
            response.end()
        }
        else {
            // response.write(data)
            response.end(data)  //Since you are sending a single file, you can pass the data as an argument inside end() function
        }
    })
    
})
// The server above will not work unless we specify listen(port no, host name, function that fire when you start listen) which listens to the port no, localhost
// localhost is a default value that must be used
server.listen(3000, "localhost", () => {
    console.log("Listening for requests from the browser on port 3000")
})






// response.setHeader('Content-Type', 'text/plain'); //text file
// // response.write('Hello RollyJS, welcome to TheNetNinja Bootcamp'); //sample for text file
// response.write('<head></head>')
// response.write('<h3>Hello RollyJS,</h3>')
// response.write('<p>Welcome to TheNetNinja YT Bootcamp</p>')
// response.end()