var express = require('express');
var router = express.Router();
// const fetch = require("node-fetch");

const Quote = require('../models/quotes')

/* GET quotes listing. */
router.get('/', (req, res) => {
  Quote.find().then(data => {
    console.log(data)
    if (data) {
      res.json({ result: true, quote: data })
    } else {
      res.json({ result: false })
    }
  })
});

/* GET collection size. */
router.get('/size', (req, res) => {
  Quote.find().then(data => {
    console.log(data)
    if (data) {
      res.json({ result: true, size: data.length })
    } else {
      res.json({ result: false })
    }
  })
});

router.get('/:number', (req, res) => {
  Quote.findOne({ number: req.params.number })
    .then(data => {
      console.log(data)
      if (data) {
        res.json({ result: true, quote: data })
      } else {
        res.json({ result: false })
      }
    })
});

/* CREATE quote */
router.post('/new', (req, res) => {
  const { quote, author } = req.body

  Quote.find().then(data => {
    const dataBaseSize = data.length

    const newQuote = new Quote({
      quote,
      author,
      number: dataBaseSize + 1,
      moderated: false
    })

    newQuote.save().then(() => res.json({ result: true }))
  })
});

module.exports = router;
