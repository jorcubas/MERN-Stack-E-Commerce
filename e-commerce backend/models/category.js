const mongoose = require('mongoose');
const crypto = require("crypto");
const uuidv1 = require("uuid/v1");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxLength: 32
        },
    }, {timestamps: true}
);

module.exports = mongoose.model("Category", categorySchema);