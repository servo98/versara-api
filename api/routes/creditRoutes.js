import express from 'express'
import * as CreditController from '../controllers/creditController.js'


const api = express.Router();

api.route('/calculate')
    // .get(ProspectoController.index)
    .get(CreditController.calculate);

// api.use('/:id')
// api.route('/:id')
//     .get(ProspectoController.show)
//     .put(ProspectoController.update)
//     .delete(ProspectoController.destroy);

export default api;