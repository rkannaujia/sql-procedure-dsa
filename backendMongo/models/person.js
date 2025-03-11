const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: Number,
        required: true,
        min: 0,
    },
    work: {
        type: String,
        enum: ['chef', 'waiter', 'manager'],
        trim: true,
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
        match: [/^[0-9]{10}$/, "Please enter a valid 10-digit mobile number"],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid email address"],
    },
    address: {
        type: String,
        trim: true,
    },
    salary: {
        type: Number,
        required: true,
        min: 0,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model("Person", personSchema);
