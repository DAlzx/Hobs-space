import React from 'react'
import './ImageProfile.css';

function ImageProfile(props) {

 
    return (
        <div className='ImageProfile'>
            <div className={`containerCover ${props.format ? 'vertical' : 'horizontal'}`}>
                <img style={{scale: props.zoom}} src={props.img} alt="cover personnalité" />
            </div>
        </div>
    );
}

export default ImageProfile;