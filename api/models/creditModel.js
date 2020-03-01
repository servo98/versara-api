import mongoose from 'mongoose';

export default mongoose.model('Credit', new mongoose.Schema({
    table: {
        type: Number,
        required: true,
    }
}));