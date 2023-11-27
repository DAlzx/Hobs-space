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
            {props.instagram ? <ReseauSocial img={instagram} link={"https://www.instagram.com/"} /> : null}
            {props.facebook ? <ReseauSocial img={facebook} link={"https://www.instagram.com/"} /> : null}
            {props.twitter ? <ReseauSocial img={twitter} link={"https://www.instagram.com/"} white={true} /> : null}
            {props.youtube ? <ReseauSocial img={youtube} link={"https://www.instagram.com/"} white={true} /> : null}
            {props.tiktok ? <ReseauSocial img={tiktok} link={"https://www.instagram.com/"} /> : null}
            {props.spotify ? <ReseauSocial img={spotify} link={"https://www.instagram.com/"} /> : null}
            {props.itunes ? <ReseauSocial img={itunes} link={"https://www.instagram.com/"} /> : null}
            {props.linkedin ? <ReseauSocial img={linkedin} link={"https://www.instagram.com/"} white={true} /> : null}
            {props.web ? <ReseauSocial img={web} link={"https://www.instagram.com/"} /> : null}
        </div>
    );
}

export default ReseauxSociaux;