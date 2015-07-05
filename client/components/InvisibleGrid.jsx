InvisibleGrid = React.createClass({

  handleClick: function(e) {
    e.preventDefault();
    this.props.handleClick(e);
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
        <div id="1" style={styles.squareOne} onClick={this.handleClick}></div>
        <div id="2" style={styles.squareTwo} onClick={this.handleClick}></div>
        <div id="3" style={styles.squareThree} onClick={this.handleClick}></div>
        <div id="4" style={styles.squareFour} onClick={this.handleClick}></div>
        <div id="5" style={styles.squareFive} onClick={this.handleClick}></div>
        <div id="6" style={styles.squareSix} onClick={this.handleClick}></div>
        <div id="7" style={styles.squareSeven} onClick={this.handleClick}></div>
        <div id="8" style={styles.squareEight} onClick={this.handleClick}></div>
        <div id="9" style={styles.squareNine} onClick={this.handleClick}></div>
      </div>
    );
  }
});