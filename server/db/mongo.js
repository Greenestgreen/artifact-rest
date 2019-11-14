var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/ArtiGrid', {useNewUrlParser: true, useUnifiedTopology: true });

module.exports = {
  mongoose
};