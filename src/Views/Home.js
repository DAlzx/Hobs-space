import React, {useState, useEffect} from 'react'
import '../App.css';
import Cover from '../assets/cover.jpg';
import Logo from '../Layouts/Logo/Logo';
import ReseauxSociaux from '../Layouts/ReseauxSociaux/ReseauxSociaux';
import Menu from '../Layouts/Menu/Menu';
import Ticket from '../components/Ticket/Ticket';
import TicketConcert from '../components/TicketConcert/TicketConcert';
import LatestRelease from '../Layouts/LatestRelease/LatestRelease';
import Shop from '../Layouts/Shop/Shop';
import Fan from '../Layouts/Fan/Fan';
import SliderYoutube from '../Layouts/SliderYoutube/SliderYoutube';
import SliderColumn from '../Layouts/SliderColumn/SliderColumn';
import { getChannelData, fetchLatestVideos } from '../data/api/youtube';
import { fetchSpotifyInfo } from '../data/api/spotify';


function Home() {

    const formatAncre = (text) => {
        return text.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-');
    };

    const bgdContainer = "#263010";
    const colorFont = "#f1f1f1";
    const linkTest = "http://instagram.com/";
    const menu = ["Latest Release", "Maroon 5 Live", "Shop", "S.I.N. Fan Club", "Official Music Videos", "More Music"];
    
    const ticketConcert = [
        <TicketConcert event={"Les vieilles charrues"} where={"Carhaix, Bretagne"} ticket={false} mounth={"Juillet"} day={"1"} year={"2024"} color={colorFont} bgd={bgdContainer} link={linkTest} />,
        <TicketConcert event={"Les vieilles charrues"} where={"Carhaix, Bretagne"} ticket={true} mounth={"Juillet"} day={"2"} year={"2024"} color={colorFont} bgd={bgdContainer} link={linkTest} />,
        <TicketConcert event={"Les vieilles charrues"} where={"Carhaix, Bretagne"} ticket={true} mounth={"Juillet"} day={"3"} year={"2024"} color={colorFont} bgd={bgdContainer} link={linkTest} />,
        <TicketConcert event={"Les vieilles charrues"} where={"Carhaix, Bretagne"} ticket={false} mounth={"Juillet"} day={"4"} year={"2024"} color={colorFont} bgd={bgdContainer} link={linkTest} />,
        <TicketConcert event={"Les vieilles charrues"} where={"Carhaix, Bretagne"} ticket={true} mounth={"Juillet"} day={"5"} year={"2024"} color={colorFont} bgd={bgdContainer} link={linkTest} />,
                
    ];
    const [isLoaded, setIsLoaded] = useState(false);
    const [videos, setVideos] = useState(null);
    const [videosLR, setVideosLR] = useState(null);
    const [spotify, setSpotify] = useState(null);
    const [img, setImg] = useState(null);

    useEffect(() => {
        async function fetchData() {
            //const channelVideos = await fetchLatestVideos(6);
            //const videoLR = await fetchLatestVideos(2);
            const spotifyData = await fetchSpotifyInfo();
            //setVideos(channelVideos.data.items);
            //setVideosLR(videoLR.data.items);
            setSpotify(spotifyData);
            console.log("----------",spotifyData.spotifyAlbums.data.items[0].images[1].url);
            setImg(spotifyData.spotifyAlbums.data.items[0].images[1].url);
            setIsLoaded(true);
        }
        fetchData();
    }, []);
 
    return (
        <div className='Home' style={{background: bgdContainer}}>
            <img className='backgroundHome' src={Cover} alt='profile flouté'/>
                {isLoaded ?
                    <div className='containerHome' style={{backgroundColor: bgdContainer, color: colorFont}}>
                        <Logo bdg={bgdContainer} imgLogo={true} title={"Maroon 5"} />
                        <ReseauxSociaux instagram={true} facebook={true} twitter={true} youtube={true} tiktok={true} spotify={true} itunes={true} linkedin={true} web={true} />
                        <Menu color={colorFont} menu={menu} />
                        <Ticket title={"Le title du ticket"} price={"$109.99"} img={Cover} color={colorFont} link={linkTest} />
                        <div className='lineSeparation'></div>
                        <LatestRelease id={formatAncre("Latest Release")} title={"Latest Release"} bgd={bgdContainer} color={colorFont} music={spotify ? spotify.spotifylatestAlbumTracks.data.items[0] : null} img={spotify ? spotify.spotifyAlbums.data.items[0].images[1].url : null}/>
                        <div className='lineSeparation'></div>
                        <SliderColumn id={"Maroon 5 Live"} column={true} title={"Maroon 5 Live"} ticket={ticketConcert} color={colorFont} link={linkTest} bgd={bgdContainer}  />
                        <div className='lineSeparation'></div>
                        <Shop id={formatAncre("Shop")} title={"Shop"} bgd={bgdContainer} color={colorFont} img={Cover} video={Cover} link={linkTest} />
                        <div className='lineSeparation'></div>
                        <Fan id={formatAncre("S.I.N. Fan Club")} title={"S.I.N. Fan Club"} color={colorFont} img={Cover} link={linkTest} />
                        <div className='lineSeparation'></div>
                        <SliderYoutube color={colorFont} videos={videos} link={linkTest} />
                        <div className='lineSeparation'></div>
                        <SliderColumn id={formatAncre("More Music")} column={true} title={"More Music"} musics={spotify ? spotify.spotifyTracks.data.tracks : null} color={colorFont} bgd={bgdContainer} />
                        <div className='lineSeparation'></div>
                    </div>
                    :
                    <div className='containerSpinner'>
                        <svg className='spinner' viewBox="25 25 50 50">
                            <circle r="20" cy="50" cx="50"></circle>
                        </svg>
                    </div>                    
                }
        </div>
    );
}

export default Home;