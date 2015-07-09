Grid = React.createClass({
  mixins: [ DDPMixin, ReactiveMixin ],

  subscriptions: function() {
    return Meteor.subscribe('myGame');
  },

  getReactiveState: function() {
    return {
      myGameGrid: TTTGames.findOne({})
    };
  },

  handleClick: function(value) {
    var square = _.clone(value.target.id);
    console.log(square)
    //console.log('handleClick', value, value.target);
    this.handleUpdateSquare(square - 1);
  },

  handleUpdateSquare: function(position) {
    var property = 'positions.' + position + '.value';
    var setting = {};
    var action;
      
    if (this.state.myGameGrid.moves.pop() !== 'x') {
      if (this.state.myGameGrid.positions[position].value === '') {
        setting[property] = 'x';
      } else {
        setting[property] = '';
      }
    } else {
      if (this.state.myGameGrid.positions[position].value === '') {
        setting[property] = 'o';
      } else {
        setting[property] = '';
      }
    }
    
    action = {$set: setting, $push: {moves: setting[property]}};

    TTTGames.update(
      {_id: this.state.myGameGrid._id},
      action
    );
  },

  render: function() {
    var markerList = [];
    if (this.state.myGameGrid) {
      markerList = this.state.myGameGrid.positions.map(function(position, index) {
        if (position.value === 'x') {
          return (
            <Xmarker key={index} translateX={position.x} translateY={position.y} />
          );
        } else if (position.value === 'o') {
          return (
            <Omarker key={index} translateX={position.x} translateY={position.y} />
          );
        }
      });
    }

    return (
      <div>
        <InvisibleGrid handleClick={this.handleClick} />
        <Svg className="grid" height="300" width="300">
        <Lines />
        {markerList}
        </Svg>
      </div>
    );
  }
});