'use strict';
var axios = require('axios');

module.exports = function(Coin) {
  Coin.populate = function(doit, callback) {
    // console.log('doingit', doit);
    callback(null, doit);
  };

  Coin.afterRemote('populate', function(context, unused, next) {
    var url = 'https://api.coinmarketcap.com/v1/ticker/?limit=0';
    var doit = context.args.doit;
    if (doit === true) {
      console.log('populating database');
      axios.get(url).then((response) => {
        // console.log('response', response.data.length);
        let coins = response.data;
        coins.forEach((element, index) => {
          console.log('adding or updating coin - ' + element.name);
          Coin.findOrCreate({fields: {name: element.name}}, {
            name: element.name,
            symbol: element.symbol,
            rank: element.rank,
            totalCoins: element.max_supply,
          });
        });
      }).catch(error => {
        console.log('error', error);
      });
    }
    next();
  });
};
