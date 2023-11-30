import React, {useEffect} from 'react'
import './SliderColumn.css';
import Title from '../../components/Title/Title';
import Slider from '../../components/Slider/Slider';
import TicketConcert from '../../components/TicketConcert/TicketConcert';
import TicketMusic from '../../components/TicketMusic/TicketMusic';

function SliderColumn(props) {


    const musics = props.musics ? props.musics.map((music, index) => (
        <TicketMusic
            key={index}
            music={music.album.images[1].url} 
            singer={music.artists.length >= 2 ? music.artists.map((artist, index) => (artist.name)).join(' feat ') : music.artists[0].name} 
            title={music.name} 
            color={props.color} 
            spotify={music.id} 
            bgd={props.bgd}
        />
    )) : null;
    

    useEffect(() => {
        console.log("+++++",musics);
    }, [])

    return (
        <div className='SliderColumn'>
            <Title id={props.id} title={props.title} marginBottom={true}/>
            {props.musics ?
                <Slider column={props.column} components={musics} color={props.color} />
            :
                null
            }
        </div>
    );
}

export default SliderColumn;