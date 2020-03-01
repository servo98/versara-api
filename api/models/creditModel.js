import mongoose from 'mongoose';

export default mongoose.model('Credit', new mongoose.Schema({
    term: {
        type: Number,
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

    }
}));