import React from 'react'
import './ButtonMenu.css';
import '@fortawesome/fontawesome-free/css/all.css';


function ButtonMenu(props) {
 
    return (
        <button className='ButtonMenu' style={{color: `rgba(${props.color}, 1)`}} onClick={props.onClick}>
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

export default ButtonMenu;