import React from 'react';
import './FaceBox.css';

const FaceBox=({faceImage, box})=>{
  return (
    <div className='flex justify-center'>
      <div className='absolute mt2'>
			<img id='inputimage'src={faceImage} width='500px' height='auto' alt='' />
		<div className='bounding-box' style={{top:box.topRow, bottom:box.bottomRow, left:box.leftCol, right:box.rightCol}}></div>
      </div>
    </div>
  );
}

export default FaceBox;