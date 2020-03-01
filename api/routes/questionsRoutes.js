import express from 'express'
import questions from '../questions.js'

const api = express.Router();

api.route('/')
    .get((req, res) => {
        res.json(questions)
    });


export default api;