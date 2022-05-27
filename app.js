const express = require('express')

// express app
const app = express()

// configure ejs view engine (This should be done at the top after initializing express app)
app.set('view engine', 'ejs')

// listen for request
app.listen(3000);   //this return an instance of the server

// listen to a GET request to homepage
app.get('/', function (req, res) {
    // res.send() also infers the status code
    // res.send('Hello World')   //res.send() detects the Content-Type header and send the content
    // res.sendFile('./views/index.html', { root: __dirname})
    res.render('index');   //rendering in ejs
})

// listen to a GET request to about page
app.get('/about', (req, res) => {
    // res.sendFile('./views/about.html', { root: __dirname})
    res.render('about')
})

// redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about')
})

// error page if path does not exist
// app.use() is used to create middleware and fire middleware functions
app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', { root: __dirname})
    res.status(404).render('404')
})