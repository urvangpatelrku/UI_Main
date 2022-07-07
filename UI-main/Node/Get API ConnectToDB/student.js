var mongoose = require('mongoose');

var studSchema = mongoose.Schema({
    name:String,
    dept:String,
    city:String,
    sem:String
})

module.exports = mongoose.model("stud",studSchema);