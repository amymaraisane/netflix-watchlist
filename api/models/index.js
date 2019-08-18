var mongoose = require('mongoose');

mongoose.set('debug', true);

const URI = 'mongodb+srv://new_user3:S107KZB375092HL@cluster0-enwgt.mongodb.net/netflixWatchlist?retryWrites=true&w=majority'


mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
});

mongoose.set('useFindAndModify', false);

mongoose.Promise = Promise;

module.exports.Content = require('./content');



