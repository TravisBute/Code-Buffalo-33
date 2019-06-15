const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    name: String,
    age: Number,
    accessibility: Number,
    atype: String,
    participants: Number,
    price: Number,
    link: String,
    key: String
});

module.exports = mongoose.model('Author', authorSchema);
