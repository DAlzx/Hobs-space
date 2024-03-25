import React, {useState} from 'react'
import './DashboardPage.css';
import TitleMenuButton from '../../components/TitleMenuButton/TitleMenuButton';
import General from './General';
import LinkSocial from './LinkSocial';
import ContentPage from './ContentPage';

function DashboardPage(props) {

    const [activeButton, setActiveButton] = useState("Général");

    const handleButtonClick = (title) => {
        setActiveButton(title);
        console.log(activeButton);
    };
 
    return (
        <div className='DashboardPage'>
            <div className='menuLeft'>
                <TitleMenuButton title={"Général"} active={activeButton === "Général" ? true : false} onClick={() => handleButtonClick("Général")} color={props.color} icon={"fa-solid fa-gear"} />
                <TitleMenuButton title={"Liens réseaux sociaux"} active={activeButton === "LinkSocial" ? true : false} onClick={() => handleButtonClick("LinkSocial")} color={props.color} icon={"fa-solid fa-link"} />
                <TitleMenuButton title={"Contenu de votre page"} active={activeButton === "ContentPage" ? true : false} onClick={() => handleButtonClick("ContentPage")} color={props.color} icon={"fa-solid fa-table-columns"} />
            </div>
            <div className='settings'>
                {activeButton === "Général" ? (<General color={props.color} namespace={"Maroon 5"} />):(null)}
                {activeButton === "LinkSocial" ? (<LinkSocial />):(null)}
                {activeButton === "ContentPage" ? (<ContentPage color={props.color}/>):(null)}
            </div>
        </div>
    );
}

export default DashboardPage;