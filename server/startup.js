Meteor.startup(function() {
  if (TTTGames.find().count() === 0) {
    var newGame = TTTGames.insert({
      moves: [],
      positions: [
        {square: 1, x: '10',   y: '10', value:''},
        {square: 2, x: '110',  y: '10', value:''},
        {square: 3, x: '210',  y: '10', value:'x'},
        {square: 4, x: '10',   y: '110', value:''},
        {square: 5, x: '110',  y: '110', value:''},
        {square: 6, x: '210',  y: '110', value:''},
        {square: 7, x: '10',   y: '210', value:''},
        {square: 8, x: '110',  y: '210', value:''},
        {square: 9, x: '210',  y: '210', value:'o'}
      ]
    });
  }
  console.log(TTTGames.find().count());
});
