import React from 'react';
import './InputField.css';

function InputFieldText(props) {

    return (
        <div className='InputField' style={{ color: `rgba(${props.color}, 1)` }}>
            <p className='InputFieldTitle'>{props.title}</p>
            <input type="text" className='InputFieldInput' placeholder={props.placeholder} />
        </div>
    );
}

export default InputFieldText;
