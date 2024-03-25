import React, {useState} from 'react'
import './DashboardPage.css';
import TitleMenuButton from '../../components/TitleMenuButton/TitleMenuButton';
import ButtonAction from '../../components/ButtonAction/ButtonAction';

function ContentPage(props) {

    const [activeButton, setActiveButton] = useState("Compte");

    const handleButtonClick = (title) => {
        setActiveButton(title);
        console.log(activeButton);
    };
 
    return (
        <div className='ContentPage'>
            <div className='containerTitleGeneral'>
                <h2 className='titleSectionSettings' style={{color: `rgba(${props.color}, 1)`}}>Contenu de votre page</h2>
                <div className='lineTitleGeneral'></div>
            </div>
            <div className='containerSettingsGeneral'>
                <h4 className='subtitleGeneral'>Choisissez les menus de votre page</h4>
                <div className='containerButtonActionContentPage'>
                    <ButtonAction title={"Ajouter"} onClick={() => {}} color={props.color} icon={"fa-solid fa-plus"}  />  
                    <ButtonAction title={"Supprimer"} onClick={() => {}} color={"255, 0, 0"} icon={"fa-solid fa-trash"}  />  
                </div>
                               
            </div>
        </div>
    );
}

export default ContentPage;