var Weather = require('../models/weather.model');
var utils = require('../utils/calculations')

exports.addTemperature = (req, res)  =>{
   let weather = new Weather(
       {
           temperature:req.body.temperature,
           date:new Date()
       }
   )
   weather.save(function (err) {
    if (err) {
        return err;
    }
    res.send('Temperature saved')
})
};

exports.deleteTemperature = (req, res)  =>{
    Weather.findOneAndDelete(req.params.id,(err)=>{
        if(err){
            return err;
        }else{
            res.send('Delete successfully')
        }
    })
 };

 exports.listTemperatures =  (req, res) =>{
    Weather.find((err,temperatures)=>{
        if(err){
            return err;
        }else{
            temperatures = utils.datesString(temperatures)
            res.send(temperatures)
        }
    })
 };

 exports.calculateAverage =  (req, res) =>{
    Weather.find((err,temperatures)=>{
        if(err){
            return err;
        }else{
            var average =0;
            if(temperatures.length>0){
                average = utils.getTemperatureAverage(temperatures)
            }
            
            res.json(average)
        }
    })
 };


 exports.calculateHighest =  (req, res) =>{
    Weather.find((err,temperatures)=>{
        if(err){
            return err;
        }else{
            
            var highest =0;
            if(temperatures.length>0){
                highest = utils.getHighestTemperature(temperatures)
            }
            
            res.json(highest.temperature)
        }
    })
 };

/**Lowest */
exports.calculateLowest =  (req, res) =>{
    Weather.find((err,temperatures)=>{
        if(err){
            return err;
        }else{
            var lowest =0;
            if(temperatures.length>0){
                lowest = utils.getLowestTemperature(temperatures)
            }
            res.json(lowest.temperature)
        }
    })
 };

/**Median */
exports.calculateMedian =  (req, res) =>{
    Weather.find((err,temperatures)=>{
        if(err){
            return err;
        }else{
            var median =0;
            if(temperatures.length>0){
                median = utils.getMedianTemperature(temperatures)
            }
            res.json(median)
        }
    })
 };