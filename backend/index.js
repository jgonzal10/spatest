var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors')
var mongoose = require('mongoose');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
/**
 * MongoDB
 */
let dev_db_url = 'mongodb://wuser:weather123@ds151416.mlab.com:51416/weather';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
var weathercontroller = require('./controllers/weather.controller');
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


/**list */
app.get('/temperatures', weathercontroller.listTemperatures);


/**create */
app.post('/create', weathercontroller.addTemperature);
/** delete doc */
app.delete('/delete/:id', weathercontroller.deleteTemperature);

/**Average */
app.get('/average', weathercontroller.calculateAverage);

/**Highest */
app.get('/highest', weathercontroller.calculateHighest);

/**Lowest */
app.get('/lowest', weathercontroller.calculateLowest);

/**Median */
app.get('/median', weathercontroller.calculateMedian);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});