import React from 'react'
import './Shop.css';
import Title from '../../components/Title/Title';
import Slider from '../../components/Slider/Slider';
import Article from '../../components/Article/Article';
import Ticket from '../../components/Ticket/Ticket';

function Shop(props) {

    const videos = [
        
        <Article title={'le title du produit un peu long sah'} price={"$30.00"} img={props.video} color={props.color} link={props.link} />,
        <Article title={'le title du produit un peu long sah'} price={"$30.00"} img={props.video} color={props.color} link={props.link} />,
        <Article title={'le title du produit un peu long sah'} price={"$30.00"} img={props.video} color={props.color} link={props.link} />,
        <Article title={'le title du produit un peu long sah'} price={"$30.00"} img={props.video} color={props.color} link={props.link} />,
        <Article title={'le title du produit un peu long sah'} price={"$30.00"} img={props.video} color={props.color} link={props.link} />,
        <Article title={'le title du produit un peu long sah'} price={"$30.00"} img={props.video} color={props.color} link={props.link} />
    ];

 
    return (
        <div className='Shop'>
            <Title title={"Shop"} marginBottom={true}/>
            <Ticket title={"Le title du ticket"} price={"$109.99"} img={props.img} color={props.color} link={props.link} />
            <Ticket title={"Le title du ticket"} price={"$109.99"} img={props.img} color={props.color} link={props.link} />
            <Ticket title={"Le title du ticket"} price={"$109.99"} img={props.img} color={props.color} link={props.link} />    
            <Slider link={props.link} components={videos} video={props.video} img={props.video} color={props.color} />
        </div>
    );
}

export default Shop;