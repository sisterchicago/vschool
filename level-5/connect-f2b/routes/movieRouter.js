const express = require('express')
const movieRouter = express.Router()
const Movie = require('../models/movie')
//const { v4: uuidv4 } = require('uuid')
//uuidv4()


//const movies = [
    //{ title: "die hard", genre: "action", _id: uuidv4() },
    //{ title: "star wars IV", genre: "fantasy", _id: uuidv4() },
    //{ title: "lion king", genre: "fantasy", _id: uuidv4() },
    //{ title: "friday the 13th", genre: "horror", _id: uuidv4() }
//]
//Get All
movieRouter.get("/", (req, res, next) => {
    Movie.find((err, movies) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(movies)
    })
    //res.status(200)
    //res.send(movies)
})
//Get One
movieRouter.get("/:movieId", (req, res, next) => {
    const movieId = req.params.movieId 
    const foundMovie = movies.find(movie => movie._id === movieId)
    if(!foundMovie) {
        const error= new Error("The item was not found")
        res.status(500)
        return next(error)
    }
    res.status(200).send(foundMovie)
})
//Get by Genre
movieRouter.get("/search/genre", (req, res, next) => {
    Movie.find({ genre: req.query.genre }, (err, movies) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(movies)
    })
    //const genre = req.query.genre
    //if(!genre) {
    //    const error = new Error("Genre must be provided")
    //    res.status(500)
    //    return next(error)
    //} 
    //const filteredMovies = movies.filter(movie => movie.genre === genre)
    //res.status(200).send(filteredMovies)
})
//Post One
movieRouter.post("/", (req, res, next) => {
    const newMovie = new Movie(req.body)
    newMovie.save((err, savedMovie) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedMovie)
    })
})
    //const newMovie = req.body
    //movies.push(newMovie)
    //res.status(201).send(newMovie)
//})

movieRouter.delete("/:movieId", (req, res, next) => {
    Movie.findOneAndDelete({ _id: req.params.movieId }, (err, deletedItem) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted item ${deletedItem.title} from DB`)
    })
    //const movieId = req.params.movieId
    //const movieIndex = movies.findIndex(movie => movie._id === movieId)
    //movies.splice(movieIndex, 1)
    //res.send("Successfully deleted movie")
})

movieRouter.put("/:movieId", (req, res, next) => {
    Movie.findOneAndUpdate(
        { _id: req.params.movieId }, //find this one to update
        req.body, //update object with this data
        { new: true }, //send back updated version please
        (err, updatedMovie) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedMovie)
        }
    )
    //const movieId = req.params.movieId
    //const movieIndex = movies.findIndex(movie => movie._id === movieId)
    //const updateMovie = Object.assign(movies[movieIndex], req.body)
    //res.status(201).send(updateMovie)
})




module.exports = movieRouter