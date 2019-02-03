import React, {Component} from 'react';


class Rank extends Component{
	render(){
		return(
			<div className='tc'>
				<h2> {`${this.props.name}, your current entry count is ...`} </h2>
				<div>
					<h1> {this.props.entries} </h1>
				</div>
				
			</div>
		)
	}
}

export default Rank;