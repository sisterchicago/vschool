const Post = require('../models/postModel')
const mongoose = require('mongoose')

// get all posts
const getAllPosts = async (req, res) => {
    const user_id = req.user._id 

    const posts = await Post.find({user_id}).sort({createdAt: -1})

    res.status(200).json(posts)
}

// get single post
const getOnePost = async (req, res) => {
    const { id } = req.params 

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No post'})
    }

    const post = await Post.findById(id) 

    if (!post) {
        return res.status(404).json({error: 'No post exists'})
    }

    res.status(200).json(post)
}

// create new post
const createPost = async (req, res) => {
    const {title, description} = req.body 

    let emptyFields = []

    if (!title) {
        emptyFields.push('title')
    }
    if (!description) {
        emptyFields.push('description')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({error: 'Please fill in all fields', emptyFields})
    }

    // add doc to db
    try {
        const user_id = req.user._id 
        const post = await Post.create({title, description, user_id})
        res.status(200).json(post)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// delete post
const deletePost = async (req, res) => {
    const { id } = req.params 

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Post does not exist'})
    }

    const post = await Post.findOneAndDelete({_id: id})

    if (!post) {
        return res.status(400).json({error: 'Post does not exist'})
    }

    res.status(200).json(post)
}

// update post
const updatePost = async (req, res) => {
    const { id } = req.params 

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Post does not exist'})
    }

    const post = await Post.findOneAndUpdate({_id: id}, {...req.body})

    if (!post) {
        return res.status(400).json({error: 'Post does not exist'})
    }

    res.status(200).json(post)
}


module.exports = {
    getAllPosts,
    getOnePost,
    createPost,
    deletePost,
    updatePost
}