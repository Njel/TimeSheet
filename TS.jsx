TS = React.createClass({
  	propTypes: {
    	ts: React.PropTypes.object.isRequired
  	},

	render() {
		return (
			<div><a href="#">{this.props.ts.title}</a></div>
		);
	}
});