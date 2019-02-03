import React, {Component} from 'react';
import brain from './brain.png'
import'./Logo.css';
import Tilt from 'react-tilt';


class Logo extends Component{
	render(){
		return(
			<div className='ma4 mt0'>
				<Tilt className="Tilt br2 shadow-2" options={{ max : 50 }} style={{ height: 100, width: 100 }} >
				 <div className="Tilt-inner pt3"> 
					<img src={brain} style={{ height: 60, width: 60 }} alt=''/>
				  </div>
				</Tilt>
			</div>
		)
	}
}

export default Logo;