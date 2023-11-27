import React from 'react'
import './Fan.css';
import Title from '../../components/Title/Title';
import Ticket from '../../components/Ticket/Ticket';

function Fan(props) {
 
    return (
        <div className='Fan'>
            <Title title={"S.I.N. Fan Club"} marginBottom={true}/>
            <Ticket title={"Le title du ticket"} img={props.img} color={props.color} link={props.link} />
        </div>
    );
}

export default Fan;