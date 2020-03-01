import express from 'express'
import * as CreditController from '../controllers/creditController.js'


const api = express.Router();

api.route('/calculate')
    .post(CreditController.calculate);

api.route('/pay')
    .post(CreditController.pay);

export default api;