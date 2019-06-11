var mongoose = require('mongoose');
//setting debug to true allows us to see error details
mongoose.set('debug', true);
mongoose.set('useFindAndModify', false);

mongoose.connect('mongodb://localhost/albums', {
  useNewUrlParser: true,
  useCreateIndex: true
});

//using promises is cleaner than using callbacks
mongoose.Promise = Promise;

module.exports.Content = require('./content');



