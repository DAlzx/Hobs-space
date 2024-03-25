import React, {useState} from 'react'
import './NavigationDashboard.css';
import ButtonMenu from '../../components/ButtonMenu/ButtonMenu';
import DashboardPage from '../DashboardPage/DashboardPage';

function NavigationDashboard(props) {
    const [activeButton, setActiveButton] = useState("Compte");

    const handleButtonClick = (title) => {
        setActiveButton(title);
        console.log(activeButton);
    };

    return (
        <>
        <div className='NavigationDashboard' style={{borderColor: `rgba(${props.color}, 0.3)`}}>
            <ButtonMenu title={"Compte"} active={activeButton === "Compte" ? true : false} onClick={() => handleButtonClick("Compte")} color={props.color} icon={"fa-regular fa-user"} />
            <ButtonMenu title={"Pages"} active={activeButton === "Pages" ? true : false} onClick={() => handleButtonClick("Pages")} color={props.color} icon={"fa-solid fa-table-columns"}/>
            <ButtonMenu title={"Settings"} active={activeButton === "Settings" ? true : false} onClick={() => handleButtonClick("Settings")} color={props.color} icon={"fa-solid fa-gear"} />
        </div>
        {activeButton === "Pages" ? (<DashboardPage color={props.color} />):(null)}
        
        </>
    );
}

export default NavigationDashboard;