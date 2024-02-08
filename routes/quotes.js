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

module.exports = router;
