import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => { //function receives imageUrl as its parameters
    return (
        <div className='center ma'>
            <div className='absolute pa3'>
                <img id='inputimage' alt='' src={imageUrl} width='500px' height='auto' />
                <div className='bounding-box' style={{left: box.leftCol, top: box.topRow, right: box.rightCol, bottom: box.bottomRow}}></div>
            </div>
        </div>
    );
}

export default FaceRecognition;