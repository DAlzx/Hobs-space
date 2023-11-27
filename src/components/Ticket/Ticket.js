import React from 'react'
import './Ticket.css';

function Ticket(props) {

 
    return (
        <a className='Ticket' href={props.link} style={{color: props.color}}>
            <img className='imgTicket' src={props.img} alt="icon produit" />
            <div className='infoTicket'>
                <p className='titleTicket'>{props.title}</p>
                {props.price !== "" ? <p className='priceTicket'>{props.price}</p> : null }
            </div>
        </a>
    );
}

export default Ticket;