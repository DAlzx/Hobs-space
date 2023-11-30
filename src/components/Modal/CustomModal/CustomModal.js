import React, { useEffect } from 'react';
import Modal from 'react-modal';
import "./CustomModal.css";
import ModalMusic from '../ModalMusic/ModalMusic';

function CustomModal(props) {
    useEffect(() => {
        if (props.isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [props.isOpen]);

    return (
		<div>
			<Modal
				isOpen={props.isOpen}
				onRequestClose={props.onClose}
				contentLabel='Exemple de modal'
				className='modal'
				style={{
					overlay: {
						backgroundColor: 'rgba(0, 0, 0, 0.7)',
						zIndex: 1000,
					},
					content: {
						width: props.width,
						height: props.height,
					},
				}}
			>
				<ModalMusic 
                    spotify={props.spotifyLink} 
                    itunes={props.itunesLink} 
                    deezer={props.deezerLink} 
                    bgd={props.bgd}
                    title={props.title}
                    singer={props.singer}
                    img={props.img}
                    color={props.color}
                />
			</Modal>
		</div>
	)
}

export default CustomModal;

