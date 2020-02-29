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
    status: {
        type: String,
        required: true,
        enum: [
            'soltera',
            'casada',
            'divorciada'
        ]
    },
    children: {
        type: Number,
        required: true
    }
}));