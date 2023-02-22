const express = require('express')
const { 
    getAllPosts, 
    getOnePost, 
    createPost,
    deletePost,
    updatePost
} = require('../controllers/postController')
const requireAuth = require('../middleware/requireAuth')
const postRouter = express.Router()

//require auth for all post routes
postRouter.use(requireAuth)


//GET all posts
postRouter.get('/', getAllPosts)

//GET single post
postRouter.get('/:id', getOnePost)

//POST new post
postRouter.post('/', createPost)

//DELETE a post
postRouter.delete('/:id', deletePost)

//UPDATE a post
postRouter.put('/:id', updatePost)

module.exports = postRouter 