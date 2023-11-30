import React from 'react'
import './Video.css';

function Video(props) {
 
    return (
        <div className='Video'>
            <iframe className='miniature' src={`https://www.youtube.com/embed/${props.id}?si=01WdlReneaXAcW1h`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    );
}

export default Video;