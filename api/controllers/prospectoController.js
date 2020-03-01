import Prospecto from '../models/prospectoModel.js';

export async function create(req, res) {
    try {
        // console.log(req.body);
        const newPros = new Prospecto(
            req.body
        );
        const newProspe = await newPros.save();

        return res.json({result: newProspe});
    } catch (error) {
        res.status(500).send({message: 'Error al crear prospecto', error});
    }
}