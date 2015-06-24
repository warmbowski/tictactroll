InvisibleGrid = React.createClass({
  propTypes: {
    value: React.PropTypes.array
  },

  getDefaultProps: function() {
    return {
      value: ['1','2','3','4','5','6','7','8','9']
    };
  },

  handleClick: function(e) {
    this.props.handleClick(e.target.value);
  },

  render: function() {
    var squareValue = 1;

    var styles = {
      parentDiv: {
        position: 'absolute',
        visbility: 'hidden'
      },
      squareOne: {
        width: '100px',
        height: '100px'
      },
      squareTwo: {
        width: '100px',
        height: '100px',
        position: 'relative',
        left: '100px',
        bottom: '100px'
      },
      squareThree: {
        width: '100px',
        height: '100px',
        position: 'relative',
        left: '200px',
        bottom: '200px'
      },
      squareFour: {
        width: '100px',
        height: '100px',
        position: 'relative',
        bottom: '200px'
      },
      squareFive: {
        width: '100px',
        height: '100px',
        position: 'relative',
        bottom: '300px',
        left: '100px'
      },
      squareSix: {
        width: '100px',
        height: '100px',
        position: 'relative',
        bottom: '400px',
        left: '200px'
      },
      squareSeven: {
        width: '100px',
        height: '100px',
        position: 'relative',
        bottom: '400px'
      },
      squareEight: {
        width: '100px',
        height: '100px',
        position: 'relative',
        bottom: '500px',
        left: '100px'
      },
      squareNine: {
        width: '100px',
        height: '100px',
        position: 'relative',
        bottom: '600px',
        left: '200px'
      }
    };

    return (
      <div value="0" style={styles.parentDiv}>
        <div id="1" value={this.props.value[0]} style={styles.squareOne} onClick={this.handleClick}></div>
        <div id="2" value={this.props.value[1]} style={styles.squareTwo} onClick={this.handleClick}></div>
        <div id="3" value={this.props.value[2]} style={styles.squareThree} onClick={this.handleClick}></div>
        <div id="4" value={this.props.value[3]} style={styles.squareFour} onClick={this.handleClick}></div>
        <div id="5" value={this.props.value[4]} style={styles.squareFive} onClick={this.handleClick}></div>
        <div id="6" value={this.props.value[5]} style={styles.squareSix} onClick={this.handleClick}></div>
        <div id="7" value={this.props.value[6]} style={styles.squareSeven} onClick={this.handleClick}></div>
        <div id="8" value={this.props.value[7]} style={styles.squareEight} onClick={this.handleClick}></div>
        <div id="9" value={this.props.value[8]} style={styles.squareNine} onClick={this.handleClick}></div>
      </div>
    );
  }
});