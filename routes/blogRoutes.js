const express = require('express');
const blogController = require('../controllers/blogController')
// create a new instance of a route
const router = express.Router();

// create blog routes to display all blogs from database. NB: redirect homepage to /blogs
router.get('/', blogController.blogIndex)
// POST request to store data to the database
router.post('/', blogController.blogCreatePost)
router.get('/create', blogController.blogCreateGet)
// single route
router.get('/:id', blogController.blogDetails)
router.delete('/:id', blogController.blogDelete)

module.exports = router;