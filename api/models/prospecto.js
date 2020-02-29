import mongoose from 'mongoose';

export default mongoose.model('Prospecto', new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    income: {
        type: Number,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    children: {
        type: String,
        required: true
    }
}));