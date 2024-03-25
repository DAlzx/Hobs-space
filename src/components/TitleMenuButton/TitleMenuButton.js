import React from 'react'
import './TitleMenuButton.css';
import '@fortawesome/fontawesome-free/css/all.css';


function TitleMenuButton(props) {
 
    return (
        <button className='TitleMenuButton' style={{color: `rgba(${props.color}, 1)`}} onClick={props.onClick}>
            <div className='iconButton'>
                <i style={{color: props.color}} className={props.icon}></i>
            </div>
            {props.title}
            {props.active === true ? (
                <div className='buttonActiveLine'></div>
            ):(
                null
            )}
        </button>
    );
}

export default TitleMenuButton;