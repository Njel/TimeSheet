Timesheets = new Mongo.Collection("timesheets");

if (Meteor.isClient) {
	Meteor.subscribe("timesheets");

	Meteor.startup(function () {
    	// Use Meteor.startup to render the component after the page is ready
    	React.render(<App />, document.getElementById("render-target"));
  	});
}

if (Meteor.isServer) {
  	Meteor.startup(function () {
  		Meteor.publish("timesheets", function () {
  			return Timesheets.find({});
  		});
  	});
}
