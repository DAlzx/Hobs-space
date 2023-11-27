import React from 'react'
import '../App.css';
import Cover from '../assets/cover.jpg';
import Logo from '../Layouts/Logo/Logo';
import ReseauxSociaux from '../Layouts/ReseauxSociaux/ReseauxSociaux';
import Menu from '../Layouts/Menu/Menu';
import Ticket from '../components/Ticket/Ticket';
import Article from '../components/Article/Article';
import TicketConcert from '../components/TicketConcert/TicketConcert';
import TicketMusic from '../components/TicketMusic/TicketMusic';
import LatestRelease from '../Layouts/LatestRelease/LatestRelease';
import Video from '../components/Video/Video';
import Shop from '../Layouts/Shop/Shop';
import Fan from '../Layouts/Fan/Fan';
import SliderYoutube from '../Layouts/SliderYoutube/SliderYoutube';
import SliderColumn from '../Layouts/SliderColumn/SliderColumn';

function Home() {

    const bgdContainer = "#263010";
    const colorFont = "#f1f1f1";
    const linkTest = "http://instagram.com/";
    const ticketConcert = [
        <TicketConcert event={"Les vieilles charrues"} where={"Carhaix, Bretagne"} ticket={false} mounth={"Juillet"} day={"1"} year={"2024"} color={colorFont} bgd={bgdContainer} link={linkTest} />,
        <TicketConcert event={"Les vieilles charrues"} where={"Carhaix, Bretagne"} ticket={true} mounth={"Juillet"} day={"2"} year={"2024"} color={colorFont} bgd={bgdContainer} link={linkTest} />,
        <TicketConcert event={"Les vieilles charrues"} where={"Carhaix, Bretagne"} ticket={true} mounth={"Juillet"} day={"3"} year={"2024"} color={colorFont} bgd={bgdContainer} link={linkTest} />,
        <TicketConcert event={"Les vieilles charrues"} where={"Carhaix, Bretagne"} ticket={false} mounth={"Juillet"} day={"4"} year={"2024"} color={colorFont} bgd={bgdContainer} link={linkTest} />,
        <TicketConcert event={"Les vieilles charrues"} where={"Carhaix, Bretagne"} ticket={true} mounth={"Juillet"} day={"5"} year={"2024"} color={colorFont} bgd={bgdContainer} link={linkTest} />,
                
    ];
    const ticketMusic = [
        <TicketMusic music={Cover} singer={"Alex le grand blond"} title={"Jt'ai cassé"} color={colorFont} link={linkTest} />,
        <TicketMusic music={Cover} singer={"Alex le grand blond"} title={"Jt'ai cassé"} color={colorFont} link={linkTest} />,
        <TicketMusic music={Cover} singer={"Alex le grand blond"} title={"Jt'ai cassé"} color={colorFont} link={linkTest} />,
        <TicketMusic music={Cover} singer={"Alex le grand blond"} title={"Jt'ai cassé"} color={colorFont} link={linkTest} />,
        <TicketMusic music={Cover} singer={"Alex le grand blond"} title={"Jt'ai cassé"} color={colorFont} link={linkTest} />,
        <TicketMusic music={Cover} singer={"Alex le grand blond"} title={"Jt'ai cassé"} color={colorFont} link={linkTest} />,
                
    ]
 
    return (
        <div className='Home' style={{background: bgdContainer}}>
            <img className='backgroundHome' src={Cover} alt='profile flouté'/>
            <div className='containerHome' style={{backgroundColor: bgdContainer, color: colorFont}}>
                <Logo bdg={bgdContainer} imgLogo={true} title={"Maroon 5"} />
                <ReseauxSociaux instagram={true} facebook={true} twitter={true} youtube={true} tiktok={true} spotify={true} itunes={true} linkedin={true} web={true} />
                <Menu color={colorFont} />
                <Ticket title={"Le title du ticket"} price={"$109.99"} img={Cover} color={colorFont} link={linkTest} />
                <div className='lineSeparation'></div>
                <LatestRelease bgd={bgdContainer} color={colorFont} music={Cover} video={Cover} link={linkTest} />
                <div className='lineSeparation'></div>
                <SliderColumn column={true} title={"Maroon 5 Live"} ticket={ticketConcert} color={colorFont} link={linkTest} bgd={bgdContainer}  />
                <Shop bgd={bgdContainer} color={colorFont} img={Cover} video={Cover} link={linkTest} />
                <div className='lineSeparation'></div>
                <Fan color={colorFont} img={Cover} link={linkTest} />
                <div className='lineSeparation'></div>
                <SliderYoutube color={colorFont} video={Cover} link={linkTest} />
                <div className='lineSeparation'></div>
                <SliderColumn column={true} title={"More Music"} ticket={ticketMusic} color={colorFont} link={linkTest} bgd={bgdContainer}  />
                <div className='lineSeparation'></div>
            </div>
        </div>
    );
}

export default Home;