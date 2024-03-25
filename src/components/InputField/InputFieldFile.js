import React, {useState} from 'react';

function InputFieldFile(props) {

    const [errorMessage, setErrorMessage] = useState(false);

    function truncateMiddle(str, maxLength) {
        if (str.length <= maxLength) {
            return str;
        }
    
        const prefixLength = Math.floor((maxLength - 3) / 2);
        const suffixLength = maxLength - prefixLength - 3;
    
        const prefix = str.substring(0, prefixLength);
        const suffix = str.substring(str.length - suffixLength);
    
        return `${prefix}...${suffix}`;
    }

    function isImage(file) {
        const acceptedImageTypes = ['image/gif', 'image/jpeg', 'image/png', 'image/svg+xml'];

        return file && acceptedImageTypes.includes(file.type);
    }

    const handleFileChange = (e) => {
        if(isImage(e.target.files[0])) {
            props.onChange(e.target.files[0])
            setErrorMessage(false);
        }
        else {
            setErrorMessage(true);
        }
    };

    return (
        <div className='InputField' style={{ color: `rgba(${props.color}, 1)` }}>
            <p className='InputFieldTitle'>{props.title}</p>
            <input
                type="file"
                id={props.id}
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            <label htmlFor={props.id} id="fileInputLabel" style={{color: !errorMessage ? `rgba(${props.color}, 1)` : "#ff8500" }}>
                {props.selectedFile ? truncateMiddle(props.selectedFile.name, 30) : 'Choisissez un fichier'}
            </label>
            {errorMessage ? 
            <p className='errorMessageInputField'>Choisissez un fichier de type image</p>
            :
            null
            }
        </div>
    );
}

export default InputFieldFile;
