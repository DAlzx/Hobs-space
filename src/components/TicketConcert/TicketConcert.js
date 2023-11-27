import React from 'react'
import './TicketConcert.css';

function TicketConcert(props) {

 
    return (
        <a className='TicketConcert' style={{border: `${props.bgd} 1px solid`, color: props.color}} href={props.link} rel="noreferrer" target='_blank'>
            <div className='containerInfoConcert'>
                <p className='event'>{props.event} </p>
                <p className='where'>{props.where} </p>
                {props.ticket ? 
                    <a className='ticketOk' style={{color: props.color}} href={props.link} rel="noreferrer" target='_blank'>Tickets</a>
                    :
                    <p className='ticketSoldout'>Sold out</p>
                }                
            </div>
            <div className='separationTicket'>
                <div className='bulle top' style={{backgroundColor: props.bgd}}></div>
                <div className='bulles'>
                    <div className='bul' style={{backgroundColor: props.bgd}}></div>
                    <div className='bul' style={{backgroundColor: props.bgd}}></div>
                    <div className='bul' style={{backgroundColor: props.bgd}}></div>
                    <div className='bul' style={{backgroundColor: props.bgd}}></div>
                    <div className='bul' style={{backgroundColor: props.bgd}}></div>
                    <div className='bul' style={{backgroundColor: props.bgd}}></div>
                    <div className='bul' style={{backgroundColor: props.bgd}}></div>
                    <div className='bul' style={{backgroundColor: props.bgd}}></div>
                    <div className='bul' style={{backgroundColor: props.bgd}}></div>
                    <div className='bul' style={{backgroundColor: props.bgd}}></div>
                </div>
                <div className='bulle bottom' style={{backgroundColor: props.bgd}}></div>
            </div>
            <div className='dateConcert'>
                <div className='containerDateConcert'>
                    <p className='mounth'>{props.mounth} </p>
                    <p className='day'>{props.day} </p>
                    <p className='year'>{props.year} </p>
                </div>
            </div>
            
        </a>
    );
}

export default TicketConcert;