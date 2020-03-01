import express from 'express'
import * as CreditController from '../controllers/creditController.js'


const api = express.Router();

api.route('/calculate')
    .get(CreditController.calculate);

api.route('/pay')
    .post(CreditController.pay);

export default api;