import React from 'react'
import './Title.css';

function Title(props) {

 
    return (
        <p className='Title' id={props.id}>
            {props.title}
        </p>
    );
}

export default Title;