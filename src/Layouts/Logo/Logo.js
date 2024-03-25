import React from 'react'
import './Logo.css';
import ImgLogo from '../../assets/logo.png';
import ImageProfile from '../../components/ImageProfile/ImageProfile';

function Logo(props) {
 
    return (
        <div className='Logo'>
            <div className="containerCover">
                <ImageProfile img={props.image} imgFullCover={false} format={false} zoom={"1.3"} />
            </div>
            {props.imgLogo ? 
                <img className='imgLogo' src={ImgLogo} alt="logo personnalité" />
                :
                <h1 className='titleProfile'>{props.title}</h1>
            }
            
        </div>
    );
}

export default Logo;