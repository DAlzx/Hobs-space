import React from 'react'
import './AncreMenu.css';

function AncreMenu(props) {

 
    return (
        <a className='AncreMenu' href={props.ancre} style={{color: props.color}}>
            {props.name}
        </a>
    );
}

export default AncreMenu;