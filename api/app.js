/**
 * Configuration
 */
import express from 'express'
import cors from 'cors'
import * as db from './utils/db.js' 
import dotenv from 'dotenv'
import path from 'path'

/**
 * Routes imports
 */
import ProspectoRoutes from './routes/prospectoRoutes.js';

dotenv.config();
db.init(process.env.DB_USER, process.env.DB_PASS, process.env.DB_NAME, process.env.DB_HOST);

/**
 * APP
 */
const app = express();
  
app.options('*', cors()) 
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


/**
 * App routes
 */
app.use('/prospecto', ProspectoRoutes)



/**
 * 
 */

app.use(function (_, res) {
    res.status(404).send("Recurso no encontrado")
})
export {app}