import React, {useState, useEffect} from 'react'
import './LatestRelease.css';
import Spotify from '../../assets/spotify.png';
import Itunes from '../../assets/itunes.png';
import CustomModal from '../Modal/CustomModal/CustomModal';

function LatestRelease(props) {
    const [showModal, setShowModal] = useState(false);
    const music = props.music;

    function openModal() {
        setShowModal(true);
    }

    function closeModal() {
        setShowModal(false);
    }

    useEffect(() => {
        
    }, [])
 
    return (
        <div className='LatestRelease'>
            {/* <audio src="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/09/d1/ed/09d1ed07-6245-7914-3653-fe1e41e4c9b5/mzaf_15099062207784150369.plus.aac.p.m4a" controls="" class="d--none"></audio> */}
            {music ?
            <>
                <img className='musicLR' src={props.img} alt='music' />
                <div className='containerInfoMusicLR'>
                    <p className='titleLR'>{music.name} </p>
                    <p className='singerLR'>{music.artists.length >= 2 ? music.artists.map((artist, index) => (artist.name)).join(' feat ') : music.artists[0].name} </p>             
                </div>
                <div className='linkPlateform' style={{backgroundColor: props.bgd}}>
                    <a className='linkImgPlateform' href={`https://open.spotify.com/intl-fr/track/${music.id}`} target="_blank" rel="noreferrer">
                        <img src={Spotify} alt='plateform streaming music' />
                        <p style={{color: props.color}}>Spotify</p>
                    </a>
                    <div className='lineLR'></div>
                    <a className='linkImgPlateform' href={props.itunes} target='_blank' rel="noreferrer">
                        <img src={Itunes} alt='plateform streaming music' />
                        <p style={{color: props.color}}>Itunes</p>
                    </a>
                    <div className='lineLR'></div>
                    <div className='containerMorePlateform'>
                        <button onClick={openModal} className='morePlateform' style={{color: props.color}}>more</button>
                    </div>
                </div>    
                <CustomModal
                    isOpen={showModal}
                    onClose={closeModal}
                    content={props.modal}
                    title={music.name}
                    singer={music.artists.length >= 2 ? music.artists.map((artist, index) => (artist.name)).join(' feat ') : music.artists[0].name}
                    img={props.img}
                    color={props.color}
                    bgd={props.bgd}
                    spotifyLink={music.id}
                    deezerLink={props.deezer.link}
                />
            </>
            :
                null
            }
            
            
        </div>
    );
}

export default LatestRelease;