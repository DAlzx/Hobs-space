import React from 'react'
import './Video.css';

function Video(props) {

 
    return (
        <div className='Video'>
            <p className='titleVideo'>{props.title} </p>
            <img className='miniature' src={props.miniature} alt='music' />
        </div>
    );
}

export default Video;