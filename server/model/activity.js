const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema({
    name: String,
    age: Number,
    accessibility: Number,
    atype: String,
    participants: Number,
    price: Number,
    link: String,
    key: String
});

module.exports = mongoose.model('Activity', activitySchema);
