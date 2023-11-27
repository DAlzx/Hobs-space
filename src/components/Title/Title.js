import React from 'react'
import './Title.css';

function Title(props) {

 
    return (
        <p className='Title'>
            {props.title}
        </p>
    );
}

export default Title;