import React, {useState, useEffect} from 'react'
import '../App.css';
import SpaceName from '../components/SpaceName/SpaceName';
import Cover from '../assets/cover.jpg';
import NavigationDashboard from '../Layouts/NavigationDashboard/NavigationDashboard';

function Dashboard() {

    const bgdContainer = "#263010";
    const colorFont = "255, 255, 255";
    const spacename = "maroon-5";

    useEffect(() => {
       
    }, []);
 
    return (
        <div className='Dashboard' style={{background: bgdContainer}}>
            <div className='menuDashboard'>
                <SpaceName imgProfil={Cover} spacename={spacename} color={colorFont}/>
            </div>
            <NavigationDashboard color={colorFont} />
            
        </div>
    );
}

export default Dashboard;