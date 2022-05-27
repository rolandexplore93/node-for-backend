const express = require('express')
const morgan = require('morgan')

// express app
const app = express()

// configure ejs view engine (This should be done at the top after initializing express app)
app.set('view engine', 'ejs')

// listen for request
app.listen(3000);   //this return an instance of the server

// custom middleware
// app.use((req, res, next) => {
//     console.log('new request made');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);

//     next();   // next() inform express that we are done with this function and it can now move on
// })

// use morgan('dev or tiny') instead of custom middle
// middleware and static files
app.use(express.static('public'));
app.use(morgan('dev'));
// app.use(morgan('tiny'));

// listen to a GET request to homepage
app.get('/', function (req, res) {
    // res.send() also infers the status code
    // res.send('Hello World')   //res.send() detects the Content-Type header and send the content
    // res.sendFile('./views/index.html', { root: __dirname})

    const blogs = [
        {title: "PSG signs Messi", snippet: "lorem lorem lorem lorem lorem lorem"},
        {title: "Real Madrid wins UCL", snippet: "lorem lorem lorem lorem lorem lorem"},
        {title: "Messi wins WC for Argentina", snippet: "lorem lorem lorem lorem lorem lorem"},
    ]
    res.render('index', { title: "Blogger Gist", blogs });   //rendering in ejs
})

// app.use((req, res, next) => {
//     console.log('Next Middleware');
//     next();
// })

// listen to a GET request to about page
app.get('/about', (req, res) => {
    // res.sendFile('./views/about.html', { root: __dirname})
    res.render('about', { title: "Blogger Gist" })
})

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: "Create a New Blog" })
})

// error page if path does not exist
// app.use() is used to create middleware and fire middleware functions
app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', { root: __dirname})
    res.status(404).render('404', { title: "404" })
})