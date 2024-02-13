import React, {useState} from 'react'
import './TicketMusic.css';
import CustomModal from '../Modal/CustomModal/CustomModal';

function TicketMusic(props) {
    const [showModal, setShowModal] = useState(false);

    function openModal() {
        setShowModal(true);
    }

    function closeModal() {
        setShowModal(false);
    }
 
    return (
        <div className='TicketMusic'>
            <div className='containerInfoMusic'>
                <p className='title'>{props.title} </p>
                <p className='singer'>{props.singer} </p>
                <button onClick={openModal} className='play' style={{color: props.color}}>Play</button>             
            </div>
            <img className='music' src={props.music} alt='music' />
            <CustomModal
                isOpen={showModal}
                onClose={closeModal}
                content={props.modal}
                title={props.title}
                singer={props.singer}
                img={props.music}
                color={props.color}
                bgd={props.bgd}
                spotifyLink={props.spotify}
                deezerLink={props.deezer}
            />
        </div>
    );
}

export default TicketMusic;