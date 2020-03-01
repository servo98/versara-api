import express from 'express';
import questions from '../questions.js';
import questions2 from '../questions2.js';

const api = express.Router();

api.route('/')
    .get((req, res) => {
        res.json(questions)
    });

api.route('/2')
    .get((req, res) => res.json(questions2));

export default api;