import React from 'react'
import './OneVideo.css';
import Title from '../Title/Title';

function OneVideo(props) {
 
    return (
        <div className='SectionOneVideo' id={props.ancre}>
            <p className='TitleOneVideo'>
                {props.title}
            </p>
            <div className='OneVideo'>
                <iframe className='Oneminiature' src={`https://www.youtube.com/embed/${props.id}?si=01WdlReneaXAcW1h`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    );
}

export default OneVideo;