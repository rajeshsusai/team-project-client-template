import React from 'react';
export default class ReviewBuild extends React.Component{
	constructor(props){
		super(props);
		this.state=this.props.state;
		this.state.total_price = this.props.total_price;
		this.state.build_name = "";
	}

	render() {
		return (
			<div>
				<div className="container mainBuildTable">
					<div className="panel panel-default">
						Your build was ${this.state.total_price}. Review your build and save below. <br />
						<form className="form-inline">
							<div className="form-group">
								<label className="sr-only" htmlFor="txt_build_name">Build name</label>
								<input type="text" onChange={(e) => this.props.onChangedText(e)} className="form-control" id="txt_build_name" placeholder="Build Name" />
							</div>
							<button type="button" onClick={(e) => this.props.onClickSave(e)} className="btn btn-primary">Save</button>
						</form>
					</div>
				</div>
			</div>
		);
	}
}
