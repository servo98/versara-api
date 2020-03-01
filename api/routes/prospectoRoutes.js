import express from 'express'
import * as ProspectoController from '../controllers/prospectoController.js'


const api = express.Router();

api.route('/')
    .post(ProspectoController.create);

export default api;