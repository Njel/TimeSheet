TimesheetList = React.createClass({

  	// This mixin makes the getMeteorData method work
  	mixins: [ReactMeteorData],

  	// Loads items from the Tasks collection and puts them on this.data.tasks
  	getMeteorData() {
    	return {
      		timesheets: Timesheets.find({}).fetch()
    	};
  	},

  	renderTimesheetList() {
  		return this.data.timesheets.map((ts) => {
  			return <TS key={ts._id} ts={ts} />;
  		});
	},

	render() {
		return (
			//<div>Timesheet List</div>
			<div>{this.renderTimesheetList()}</div>
		);
	}
});