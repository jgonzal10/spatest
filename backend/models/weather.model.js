var mongoose = require('mongoose');
var Schema = mongoose.Schema;


let WeatherSchema = new Schema({
    temperature: {type: Number, required: true},
    date: {type: String, required: true},
});


module.exports = mongoose.model('Weather', WeatherSchema);