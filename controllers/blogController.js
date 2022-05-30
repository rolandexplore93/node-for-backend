const Blog = require('../models/blog')

const blogIndex = (req, res) => {
    Blog.find().sort({ createdAt: -1})
        .then(result => {
            res.render('index', { title: 'All Blogs', blogs: result})
        })
        .catch( err => console.log(err))
}

const blogCreatePost = (req, res) => {
    console.log(req.body);

    // create a new blog instance
    const blog = new Blog(req.body)
    blog.save()
        .then(result => {
            res.redirect('/blogs')
        })
        .catch(err => console.log(err))
}

const blogCreateGet = (req, res) => {
    res.render('create', { title: "Create a New Blog" })
}

const blogDetails = (req, res) => {
    const id = req.params.id;
    Blog.findById(id).then(result => {
        res.render('details', { title: "Blog Details", blog: result })
    })
    .catch(err => {
        res.status(404).render('404', { title: "Blog not found"} )
    })
}

const blogDelete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then((result) => {
        res.json({ redirect: '/blogs'})
    })
}

module.exports = {
    blogIndex,
    blogCreatePost,
    blogCreateGet,
    blogDetails,
    blogDelete
}