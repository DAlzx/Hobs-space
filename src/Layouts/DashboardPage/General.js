import React, {useState} from 'react'
import './DashboardPage.css';
import InputFieldText from '../../components/InputField/InputFieldText';
import InputFieldFile from '../../components/InputField/InputFieldFile';
import InputFieldColor from '../../components/InputField/InputFieldColor';

function General(props) {

    const [logoFile, setLogoFile] = useState();
    const [photoProfile, setPhotoProfile] = useState();

    const handleLogoFile = (event) => {
        setLogoFile(event.target.files[0]);
        console.log("oui");
      };

    return (
        <div className='SectionSettings'>
            <div className='containerTitleSettings'>
                <h2 className='titleSectionSettings' style={{color: `rgba(${props.color}, 1)`}}>Général</h2>
                <div className='lineTitleSectionSettings'></div>
                <p>OPSEC! 0x6A7eFF1e2c355AD6eb91BEbB5ded49257F3FED98,<br/>BNB NMT 0x03AA6298F1370642642415EDC0db8b957783e8D6,<br/> TATSU! 0x92f419fb7a750aed295b0ddf536276bf5a40124f</p>
            </div>
            <div className='containerSettingsGeneral'>
                <InputFieldText title={"Nom Hob's space"} placeholder={props.namespace} color={props.color} />
                <InputFieldColor title={"Couleur du fond"} color={props.color} />
                <InputFieldColor title={"Couleur du text"} color={props.color} />
                <InputFieldFile title={"Photo de profile"} id={"inputFilePP"} color={props.color} selectedFile={photoProfile} onChange={setPhotoProfile}  />
                <InputFieldFile title={"Logo"} id={"inputFileLogo"} color={props.color} selectedFile={logoFile} onChange={setLogoFile}/>
                <div className='containerInputBackgroundcolor'>
                    <input type='color' className='inputBackgroundcolor'/>
                    <p className='colorSelect'></p>
                </div>
            </div>
        </div>
    );
}


export default General;