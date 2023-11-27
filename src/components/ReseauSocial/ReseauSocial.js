import React from 'react'
import './ReseauSocial.css';

function ReseauSocial(props) {

    return (
        <a className='ReseauSocial' href={props.link} target='_blank' rel="noreferrer">
            <img src={props.img} style={{ filter: props.white ? "invert(100%)" : "none" }} alt="réseaux sociaux" />
        </a>
    );
}

export default ReseauSocial;