import React, { useState } from 'react';
import InputFieldFile from './InputFieldFile';

function InputFieldColor(props) {
    const [color, setColor] = useState('#000000');

    const handleColorChange = (event) => {
        setColor(event.target.value);
    };

    return (
        <div className='InputField' style={{ color: `rgba(${props.color}, 1)` }}>
            <input
                type="color"
                value={color}
                onChange={handleColorChange}
            />
            <p>{color}</p>
        </div>
    );
}

export default InputFieldColor;
