import React from 'react'
import './ReseauxSociaux.css';
import ReseauSocial from '../../components/ReseauSocial/ReseauSocial';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/insta.png';
import linkedin from '../../assets/linkedin.png';
import twitter from '../../assets/twitter.png';
import youtube from '../../assets/youtube.png';
import web from '../../assets/web.png';
import spotify from '../../assets/spotify.png';
import itunes from '../../assets/itunes.png';
import tiktok from '../../assets/tiktok.png';



function ReseauxSociaux(props) {

 
    return (
        <div className='ReseauxSociaux'>
            {props.instagram.bool ? <ReseauSocial img={instagram} link={props.instagram.link} /> : null}
            {props.facebook.bool ? <ReseauSocial img={facebook} link={props.facebook.link} /> : null}
            {props.x.bool ? <ReseauSocial img={twitter} link={props.x.link} white={true} /> : null}
            {props.youtube.bool ? <ReseauSocial img={youtube} link={props.youtube.link} white={true} /> : null}
            {props.tiktok.bool ? <ReseauSocial img={tiktok} link={props.tiktok.link} /> : null}
            {props.spotify.bool ? <ReseauSocial img={spotify} link={props.spotify.link} /> : null}
            {props.itunes.bool ? <ReseauSocial img={itunes} link={props.itunes.link} /> : null}
            {props.linkedin.bool ? <ReseauSocial img={linkedin} link={props.linkedin.link} white={true} /> : null}
            {props.web.bool ? <ReseauSocial img={web} link={props.web.link} /> : null}
        </div>
    );
}

export default ReseauxSociaux;