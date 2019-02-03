import React from 'react';

// class ImageLink extends Component{
// 	render(){
const ImageLink =({buttonSubmit, inputChange})=>{
	return(
		<div className='tc f5'>
			<h2> This app Detects faces. Why don't you give it a TRY... </h2>
			<div className='w-60 flex center br3 shadow-3 ma4'>
				IMAGE PATH: <input className='w-70 pa2' type="text" onChange={inputChange} /> 
				<button className='w-30 pa2 grow' onClick={buttonSubmit}>
					SUBMIT 
				</button>
			</div>
		</div>
	)
}

export default ImageLink;