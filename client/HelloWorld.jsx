HelloWorld = React.createClass({
  mixins: [ DDPMixin, ReactiveMixin ],
  
  subscriptions: function() {
    return Meteor.subscribe('allHellos');
    },

  getReactiveState: function() {
    return {
      hw: Hellos.find({}, {sort: {createdAt: -1}}).fetch()
    };
  },
  
  handleClick: function(key) {
    console.log(key);
    return Hellos.remove({_id: key});
  },

  render: function() {
    var self = this;
    var listItems = this.state.hw.map(function(item) {
      return (<li key={item._id}>
        <a className="delete" href="#" onClick={self.handleClick.bind(self, item._id)}>x</a> Hello {item.hello}
      </li>);
    });
    return (
      <ul id="hellos">
        {listItems}
      </ul>
    );
  }
});
