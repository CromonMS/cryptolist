'use strict';

var axios = require('axios');

let exchanges = [
  {name: 'ACX', url: 'https://acx.io', tradingPairs: 6, location: 'Southbank, Victoria, AUS'},
  {name: 'ACX', url: 'https://acx.io', tradingPairs: 6, location: 'Southbank, Victoria, AUS'},
];

module.exports = function(Exchange) {
  Exchange.populate = function(doit, callback) {
    // console.log('doingit', doit);
    callback(null, doit);
  };
};
