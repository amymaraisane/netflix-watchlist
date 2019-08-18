var mongoose = require('mongoose');

mongoose.set('debug', true);

const URI = DATABASEURL

mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
});

mongoose.set('useFindAndModify', false);

mongoose.Promise = Promise;

module.exports.Content = require('./content');

