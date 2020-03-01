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
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    income: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
    },
    children: {
        type: Number,
        required: true
    },
    score: {
        type: Number,
        default: 0
    }
}));