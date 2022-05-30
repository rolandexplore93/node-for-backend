const express = require('express');
const Blog = require('../models/blog');

// create a new instance of a route
const router = express.Router();

// create blog routes to display all blogs from database. NB: redirect homepage to /blogs
router.get('/', (req, res) => {
    Blog.find().sort({ createdAt: -1})
        .then(result => {
            res.render('index', { title: 'All Blogs', blogs: result})
        })
        .catch( err => console.log(err))
})

// POST request to store data to the database
router.post('/', (req, res) => {
    console.log(req.body);

    // create a new blog instance
    const blog = new Blog(req.body)
    blog.save()
        .then(result => {
            res.redirect('/blogs')
        })
        .catch(err => console.log(err))
})


router.get('/create', (req, res) => {
    res.render('create', { title: "Create a New Blog" })
})

// single route
router.get('/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id).then(result => {
        res.render('details', { title: "Blog Details", blog: result })
    })
    .catch(err => console.log(err))

})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then((result) => {
        res.json({ redirect: '/blogs'})
    })
})


module.exports = router;