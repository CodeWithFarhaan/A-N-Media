const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/aandnmedia');


const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    message : String
});

module.exports = mongoose.model("user", userSchema);

