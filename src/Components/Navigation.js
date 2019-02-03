import React, {Component} from 'react';

class Navigation extends Component {
 	render() {
 		return(
		<nav>
			<h2 onClick={()=>this.props.onRouteChange('Signin')} className='underline dim flex justify-end pointer courier'> Sign Out </h2>
		</nav>
		)	
	}
}

export default Navigation;