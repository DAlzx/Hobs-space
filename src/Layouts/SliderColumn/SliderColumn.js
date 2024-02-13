import React, {useEffect} from 'react'
import './SliderColumn.css';
import Title from '../../components/Title/Title';
import Slider from '../../components/Slider/Slider';
import TicketMusic from '../../components/TicketMusic/TicketMusic';

function SliderColumn(props) {

    function formatString(inputString) {
        let formattedString = inputString.toLowerCase().replace(/[()-\s]/g, '');
        const featIndex = formattedString.indexOf('feat');
        if (featIndex !== -1) {
            formattedString = formattedString.substring(0, featIndex).trim();
        }
        return formattedString;
    }

    const deezerMusic = (deezer, name, index) => {
        let i = 0;
    
        while (i < deezer[0][index].data.length) {
            const formattedTitle = formatString(deezer[0][index].data[i].title);
            console.log(formattedTitle, formatString(name));
            if (formattedTitle === formatString(name)) {
                console.log(deezer[0][index].data[i].link, formattedTitle, i);
                return deezer[0][index].data[i].link;
            }
            i++;
        }
        return null;
    };
    

    const musics = props.musics ? props.musics.map((music, index) => (
        <TicketMusic
            key={index}
            music={music.album.images[1].url} 
            singer={music.artists.length >= 2 ? music.artists.map(artist => artist.name).join(' feat ') : music.artists[0].name} 
            title={music.name} 
            color={props.color} 
            spotify={music.id} 
            deezer={props.deezer ? deezerMusic(props.deezer, music.name, index) : null}
            bgd={props.bgd}
        />

    )) : null;
    

    useEffect(() => {
        
    }, [])

    return (
        <div className='SliderColumn'>
            <Title id={props.id} title={props.title} marginBottom={true}/>
            {props.musics ?
                <Slider column={props.column} components={musics} color={props.color} />
            :
                null
            }
            {props.tickets ?
                <Slider column={props.column} components={props.tickets} color={props.color} />
            :
                null
            }
        </div>
    );
}

export default SliderColumn;