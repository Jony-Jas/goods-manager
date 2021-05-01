const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type: String
    },
    quantity: Number,
    availability : String
})

const Itemsdb = mongoose.model('itemsdb',schema);

module.exports = Itemsdb;