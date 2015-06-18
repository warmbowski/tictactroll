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

  render: function() {
    var listItems = this.state.hw.map(function(item) {
      return <li key={item._id}>Hello {item.hello}</li>;
    });
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
});
