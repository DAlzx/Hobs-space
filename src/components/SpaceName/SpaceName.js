import React from 'react'
import './SpaceName.css';
import { Link } from "react-router-dom";

function SpaceName(props) {

    const capitalizedWord = props.spacename.charAt(0).toUpperCase() + props.spacename.slice(1);
 
    return (
        <div className='SpaceName'>
            <img src={props.imgProfil} alt="profil" className='profilSpacename' />
            <Link className='linkSpacename' style={{color: `rgba(${props.color},1)`}} to={`/${props.spacename}`}><p className='racineSpacename'>Hobs-space / </p>{capitalizedWord}</Link>
        </div>
    );
}

export default SpaceName;