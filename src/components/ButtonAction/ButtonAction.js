import React from 'react'
import './ButtonAction.css';
import '@fortawesome/fontawesome-free/css/all.css';


function ButtonAction(props) {
 
    return (
        <button className='ButtonAction' style={{color: `rgba(${props.color}, 1)`, borderColor: `rgba(${props.color}, 1)`}} onClick={props.onClick}>
            <div className='iconButton'>
                <i style={{color: props.color}} className={props.icon}></i>
            </div>
            {props.title}
        </button>
    );
}

export default ButtonAction;