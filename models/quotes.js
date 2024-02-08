const mongoose = require('mongoose');

const  quoteSchema = mongoose.Schema({
 quote: String,
 book: String,
 number: Number
});

const Quote = mongoose.model('quotes', quoteSchema);

module.exports = Quote;