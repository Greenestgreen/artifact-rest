const mongoose = require('mongoose');
var Card = require('./card');

var DeckSchema = new mongoose.Schema({
  artifactId:{
    type:Number,
    required:true
  },
  name:{
    type:Object,
    required:true
  },
  cards:{
      type:[Card.Schema]
  },
  version:{
    type:Number,
    required:true
  }
});

var Deck = mongoose.model('Deck',DeckSchema);

module.exports = {
  Deck
}
