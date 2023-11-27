import React from 'react'
import './SliderColumn.css';
import Title from '../../components/Title/Title';
import Slider from '../../components/Slider/Slider';
import TicketConcert from '../../components/TicketConcert/TicketConcert';

function SliderColumn(props) {

    const videos = props.ticket;

    return (
        <div className='SliderColumn'>
            <Title title={props.title} marginBottom={true}/>
            <Slider link={props.link} column={props.column} components={videos} color={props.color} />
        </div>
    );
}

export default SliderColumn;