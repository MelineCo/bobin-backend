const mongoose = require('mongoose');

const  quoteSchema = mongoose.Schema({
 quote: String,
 author: String,
 number: Number,
 moderated: Boolean
});

const Quote = mongoose.model('quotes', quoteSchema);

module.exports = Quote;