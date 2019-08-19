require('dotenv').config()
const mongoose = require('mongoose');

mongoose.set('debug', true);

const URI = process.env.DATABASEURL || DATABASEURL

mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
});

mongoose.set('useFindAndModify', false);

mongoose.Promise = Promise;

module.exports.Content = require('./content');

