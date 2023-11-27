import React from 'react'
import './TicketMusic.css';

function TicketMusic(props) {

 
    return (
        <div className='TicketMusic'>
            <div className='containerInfoMusic'>
                <p className='title'>{props.title} </p>
                <p className='singer'>{props.singer} </p>
                <button className='play' style={{color: props.color}}>Play</button>             
            </div>
            <img className='music' src={props.music} alt='music' />
        </div>
    );
}

export default TicketMusic;