const mongoose = require('mongoose');


var CardSchema = new mongoose.Schema({
    CardObject:{
        type:Object,
        required:true
    }
})

// CardSchema.statics.finByArtifactId = function(id) {
//   var Card = this;
//   return Card.findOne({
//     artifactId: id
//   });
// };

var Card = mongoose.model('Card',CardSchema);

module.exports = {
  Model: Card,
  Schema: CardSchema
}
