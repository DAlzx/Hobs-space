import React, {useState} from 'react'
import './DashboardPage.css';
import TitleMenuButton from '../../components/TitleMenuButton/TitleMenuButton';

function LinkSocial(props) {

    const [activeButton, setActiveButton] = useState("Compte");

    const handleButtonClick = (title) => {
        setActiveButton(title);
        console.log(activeButton);
    };
 
    return (
        <div className='LinkSocial'>
            <div className='containerTitleLinkSocial'>
                <h2>Liens réseaux sociaux</h2>
                <div className='lineTitleGeneral'></div>
            </div>
            <div className='containerSettingsGeneral'>
                <h4 className='titleSectionSettingsGeneral'>Instagram</h4>
                <div className='containerInputNamespace'>
                    <input type='text' className='inputNamespace' placeholder={props.linkInsta}/>
                </div>
                <h4 className='titleSectionSettingsGeneral'>Facebook</h4>
                <div className='containerInputNamespace'>
                    <input type='text' className='inputNamespace' placeholder={props.linkFacebook}/>
                </div>
                <h4 className='titleSectionSettingsGeneral'>X</h4>
                <div className='containerInputNamespace'>
                    <input type='text' className='inputNamespace' placeholder={props.linkX}/>
                </div>
                <h4 className='titleSectionSettingsGeneral'>Youtube</h4>
                <div className='containerInputNamespace'>
                    <input type='text' className='inputNamespace' placeholder={props.linkYoutube}/>
                </div>
                <h4 className='titleSectionSettingsGeneral'>Tiktok</h4>
                <div className='containerInputNamespace'>
                    <input type='text' className='inputNamespace' placeholder={props.linkTiktok}/>
                </div>
                <h4 className='titleSectionSettingsGeneral'>Spotify</h4>
                <div className='containerInputNamespace'>
                    <input type='text' className='inputNamespace' placeholder={props.linkSpotify}/>
                </div>
                <h4 className='titleSectionSettingsGeneral'>Itunes</h4>
                <div className='containerInputNamespace'>
                    <input type='text' className='inputNamespace' placeholder={props.linkItunes}/>
                </div>
                <h4 className='titleSectionSettingsGeneral'>Linkedin</h4>
                <div className='containerInputNamespace'>
                    <input type='text' className='inputNamespace' placeholder={props.linkLinkedin}/>
                </div>
                <h4 className='titleSectionSettingsGeneral'>Site web</h4>
                <div className='containerInputNamespace'>
                    <input type='text' className='inputNamespace' placeholder={props.linkWebsite}/>
                </div>
            </div>
        </div>
    );
}

export default LinkSocial;