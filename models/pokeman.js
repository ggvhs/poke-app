const mongoose = require('mongoose')

const pokemanSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    url:{
        type: String,
        required: true
    },
    

})

const Pokeman = mongoose.model('Pokeman',pokemanSchema);

module.exports = Pokeman;