const express = require('express')

// express app
const app = express()

// listen for request
app.listen(3000);   //this return an instance of the server

// listen to a GET request to homepage
app.get('/', function (req, res) {
    // res.send() also infers the status code
    // res.send('Hello World')   //res.send() detects the Content-Type header and send the content
    res.sendFile('./view/index.html', { root: __dirname})
})

// listen to a GET request to about page
app.get('/about', (req, res) => {
    res.sendFile('./view/about.html', { root: __dirname})
})

// redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about')
})

// error page if path does not exist
// app.use() is used to create middleware and fire middleware functions
app.use((req, res) => {
    res.status(404).sendFile('./view/404.html', { root: __dirname})
})