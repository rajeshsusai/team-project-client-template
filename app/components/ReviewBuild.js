import React from 'react';
export default class ReviewBuild extends React.Component{
	constructor(props){
		super(props);
		this.state=this.props.state;
	}
	render() {
		return (
			<div>
				<div className="container mainBuildTable">
					<div className="panel panel-default">
						REVIEW YOUR BUILD HERE. WATCH OUT FOR TNT.
					</div>
				</div>
			</div>
		);
	}
}
