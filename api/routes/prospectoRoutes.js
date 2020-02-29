import express from 'express'
import * as ProspectoController from '../controllers/prospectoController.js'


const api = express.Router();

api.route('/')
    .get(ProspectoController.index)
    .post(ProspectoController.create);

// api.use('/:id')
api.route('/:id')
    .get(ProspectoController.show)
    .put(ProspectoController.update)
    .delete(ProspectoController.destroy);

export default api;