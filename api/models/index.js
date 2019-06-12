var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.set('useFindAndModify', false);

mongoose.connect('mongodb://localhost/albums', {
  useNewUrlParser: true,
  useCreateIndex: true
});

mongoose.Promise = Promise;

module.exports.Content = require('./content');



