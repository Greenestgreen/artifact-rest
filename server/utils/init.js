var {Deck} = require('../models/deck');
var Card = require('../models/card');
const axios = require("axios");
var  { mongoose } = require('../db/mongo');


var getDecks = async  (sets) => {
  var sets = process.env.Sets.split(',');
  for(set in sets){
    try {
      //Get Deck Url
      let url = `https://playartifact.com/cardset/${set}/`;
      console.log('Getting URL');
      let response = await axios.get(url);    
      
      //Get Deck
      SetDeck = response.data;
      console.log('Getting deck');
  
      response = await axios.get(SetDeck.cdn_root + SetDeck.url.substring(1)); 
      body = response.data;   
      
      //Transform Cards To Mongoose Documents
      for(let i=0;i< body.card_set.card_list.length; i++ ){
        body.card_set.card_list[i] = new Card.Model({CardObject:body.card_set.card_list[i]});
      }
      
      //Creating Deck Documents
      var deck = new Deck({
        artifactId:body.card_set.set_info.set_id,
        name:body.card_set.set_info.name,
        version:body.card_set.version,
        cards: body.card_set.card_list
      });

      deck = await deck.save();
      console.log('Saved Deck to DB',deck.name.english);    


    } catch (e) {
      throw new Error (e);
    }
  }
    mongoose.disconnect();
}



getDecks();



