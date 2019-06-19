var mongoose = require('mongoose');
//setting debug to true allows us to see error details
mongoose.set('debug', true);
mongoose.set('useFindAndModify', false);

const url = process.env.DATABASEURL || 'MONGODB://localhost/albums'

mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true
});

//using promises is cleaner than using callbacks
mongoose.Promise = Promise;

module.exports.Content = require('./content');



