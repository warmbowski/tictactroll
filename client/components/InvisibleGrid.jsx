InvisibleGrid = React.createClass({

  handleClick: function(id) {
    this.props.handleClick(id);
  },

  render: function() {
    var squareValue = 1;

    var styles = {
      parentDiv: {
        position: 'absolute',
        visbility: 'hidden'
      },
      squareDivs: [
        {
          width: '100px',
          height: '100px'
        },
        {
          width: '100px',
          height: '100px',
          position: 'relative',
          left: '100px',
          bottom: '100px'
        },
        {
          width: '100px',
          height: '100px',
          position: 'relative',
          left: '200px',
          bottom: '200px'
        },
        {
          width: '100px',
          height: '100px',
          position: 'relative',
          bottom: '200px'
        },
        {
          width: '100px',
          height: '100px',
          position: 'relative',
          bottom: '300px',
          left: '100px'
        },
        {
          width: '100px',
          height: '100px',
          position: 'relative',
          bottom: '400px',
          left: '200px'
        },
        {
          width: '100px',
          height: '100px',
          position: 'relative',
          bottom: '400px'
        },
        {
          width: '100px',
          height: '100px',
          position: 'relative',
          bottom: '500px',
          left: '100px'
        },
        {
          width: '100px',
          height: '100px',
          position: 'relative',
          bottom: '600px',
          left: '200px'
        }
      ]
    };

    var squareDivs = []
    for (i=1; i<=9; i++) {
      squareDivs.push(
        <div
          key={i}
          id={i}
          style={styles.squareDivs[i-1]}
          onClick={this.handleClick.bind(this, i)}>
        </div>
      );
    }

    return (
      <div value="0" style={styles.parentDiv}>
        {squareDivs}
      </div>
    );
  }
});