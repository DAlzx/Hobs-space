import React from 'react'
import './LatestRelease.css';
import Spotify from '../../assets/spotify.png';
import Itunes from '../../assets/itunes.png';

function LatestRelease(props) {

 
    return (
        <div className='LatestRelease'>
            <img className='musicLR' src={props.music} alt='music' />
            <div className='containerInfoMusicLR'>
                <p className='titleLR'>{props.title} </p>
                <p className='singerLR'>{props.singer} </p>             
            </div>
            <div className='linkPlateform' style={{backgroundColor: props.bgd}}>
                <a className='linkImgPlateform' href={props.spotify} target='_blank' rel="noreferrer">
                    <img src={Spotify} alt='plateform streaming music' />
                    <p>Spotify</p>
                </a>
                <div className='lineLR'></div>
                <a className='linkImgPlateform' href={props.itunes} target='_blank' rel="noreferrer">
                    <img src={Itunes} alt='plateform streaming music' />
                    <p>Itunes</p>
                </a>
                <div className='lineLR'></div>
                <div className='containerMorePlateform'>
                    <button className='morePlateform' style={{color: props.color}}>more</button>
                </div>
                
            </div>
            
        </div>
    );
}

export default LatestRelease;