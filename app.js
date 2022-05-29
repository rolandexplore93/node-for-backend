const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const Blog = require('./models/blog')
// express app
const app = express()

// connect to mongodb database
// update .mongodb.net/nodemongotuts?retryWrites=true&w=majority
// In case you run the code and you see deprecated, add this instead;
// mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
const dbURI = 'mongodb+srv://RollyJS:1018RollyJStest@nodemongotuts.39zvg9e.mongodb.net/nodemongotuts?retryWrites=true&w=majority'
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err))
// configure ejs view engine (This should be done at the top after initializing express app)
app.set('view engine', 'ejs')

// listen for request now moved to the mongoose connection to database
// app.listen(3000);   //this return an instance of the server

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
app.use(express.urlencoded({ extended: true}))
app.use(morgan('dev'));
// app.use(morgan('tiny'));

// // mongoose and mongo sandbox routes
// app.get('/add-blog', (req, res) => {
//     // create a new instance of a blog using the Blog constructor
//     const blog = new Blog({
//         // diff properties of the blog should ne specified as created in the schema
//         // Do not add the timestamps as mongoose will take care of that automatically
//         title: 'new blog',
//         snippet: 'about my new blog',
//         body: 'more about my blog'
//     });

//     // save to blog collection in database
//     blog.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// })

// retrieve all blog data from database
// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch(err => {console.log(err)})
// })

// find a single blog
// app.get('/single-blog', (req, res) => {
//     Blog.findById('6291e56d6947e2f843db1020')   // id of one of the blogs in the database
//         .then((result) => {
//             res.send(result)
//         })
//         .catch(err => {console.log(err)})
// })


// listen to a GET request to homepage
app.get('/', function (req, res) {
    // res.send() also infers the status code
    // res.send('Hello World')   //res.send() detects the Content-Type header and send the content
    // res.sendFile('./views/index.html', { root: __dirname})


    res.redirect('/blogs')

    // const blogs = [
    //     {title: "PSG signs Messi", snippet: "lorem lorem lorem lorem lorem lorem"},
    //     {title: "Real Madrid wins UCL", snippet: "lorem lorem lorem lorem lorem lorem"},
    //     {title: "Messi wins WC for Argentina", snippet: "lorem lorem lorem lorem lorem lorem"},
    // ]
    // res.render('index', { title: "Blogger Gist", blogs });   //rendering in ejs
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

// create blog routes to display all blogs from database. NB: redirect homepage to /blogs
app.get('/blogs', (req, res) => {
    Blog.find().sort({ createdAt: -1})
        .then(result => {
            res.render('index', { title: 'All Blogs', blogs: result})
        })
        .catch( err => console.log(err))
})

// POST request to store data to the database
app.post('/blogs', (req, res) => {
    console.log(req.body);

    // create a new blog instance
    const blog = new Blog(req.body)
    blog.save()
        .then(result => {
            res.redirect('/blogs')
        })
        .catch(err => console.log(err))
})


app.get('/blogs/create', (req, res) => {
    res.render('create', { title: "Create a New Blog" })
})

// single route
app.get('/blogs/:id', (req, res, next) => {
    const id = req.params.id;
    Blog.findById(id).then(result => {
        res.render('details', { title: "Blog Details", blog: result })
    })
    .catch(err => console.log(err))

    // next();
})

// error page if path does not exist
// app.use() is used to create middleware and fire middleware functions
app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', { root: __dirname})
    res.status(404).render('404', { title: "404" })
})