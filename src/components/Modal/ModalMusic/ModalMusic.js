import React from 'react'
import './ModalMusic.css';
import Spotify from '../../../assets/spotify.svg';
import Itunes from '../../../assets/apple-itunes.svg';
import Deezer from '../../../assets/deezer.png';

function ModalMusic(props) {

 
    return (
        <div className='LatestReleaseModal' style={{backgroundColor: props.bgd}}>
            <img className='musicModal' src={props.img} alt='music' />
            <div className='containerInfoMusicModal'>
                <p className='titleModal' style={{color: props.color}}>{props.title} </p>
                <p className='singerModal'>{props.singer} </p>             
            </div>
            <div className='linkPlateformModal' style={{backgroundColor: props.color}}>
                <a className='linkImgPlateformModal' href={`https://open.spotify.com/intl-fr/track/${props.spotify}`} target='_blank' rel="noreferrer">
                    <img src={Spotify} alt='plateform streaming music' />
                    <p>Play</p>
                </a>
                <div className='lineModal'></div>
                <a className='linkImgPlateformModal' href={props.itunes} target='_blank' rel="noreferrer">
                    <img src={Itunes} alt='plateform streaming music' />
                    <p>Play</p>
                </a>
                <div className='lineModal'></div>
                <a className='linkImgPlateformModal' href={props.deezer} target='_blank' rel="noreferrer">
                    <img src={Deezer} alt='plateform streaming music' />
                    <p>Play</p>
                </a>
                
            </div>
            
        </div>
    );
}

export default ModalMusic;