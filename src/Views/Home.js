import React, {useState, useEffect} from 'react'
import '../App.css';
import Cover from '../assets/cliqueLogo.jpg';
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
import { getChannelData, fetchLatestVideos, fetchVideo } from '../services/api/youtube';
import { fetchSpotifyInfo } from '../services/api/spotify';
import { fetchArtistInfo, fetchArtistAlbum, fetchAlbum, fetchBestTracks } from '../services/api/deezer';
import OneVideo from '../components/OneVideo/OneVideo';


function Home() {

    const bgdContainer = "#000";
    const colorFont = "#fff";
    const logo = Cover;
    const insta = {bool: true, link: "https://www.instagram.com/cliquetv/"};
    const youtube = {bool: true, link: "https://www.youtube.com/c/cliquecanal"};
    const tiktok = {bool: true, link: "https://www.tiktok.com/@clique_tv?is_from_webapp=1&sender_device=pc"};
    const x = {bool: true, link: "https://twitter.com/cliquetv"};
    const facebook = {bool: true, link: "https://www.facebook.com/Cliquetv"};
    const spfy = {bool: false, link: "https://www.facebook.com/Cliquetv"};
    const itunes = {bool: false, link: "https://www.facebook.com/Cliquetv"};
    const linkedin = {bool: false, link: "https://www.facebook.com/Cliquetv"};
    const web = {bool: true, link: "https://www.clique.tv/"};
    const menu = ["Dernières Vidéos", "Une journée avec Hamza", "Clique x Aya Nakamura", "Clique x Mbappé", "Clique Wembanyama", "Clique x Elodie Costa", "Clique x Francis Cabrel", "Clique x Albert Dupontel", "Clique x Daniel Ek"];
    
    const ticketConcert = [
        <TicketConcert event={"Les vieilles charrues"} where={"Carhaix, Bretagne"} ticket={false} mounth={"Juillet"} day={"1"} year={"2024"} color={colorFont} bgd={bgdContainer} link={insta.link} />,
        <TicketConcert event={"Les vieilles charrues"} where={"Carhaix, Bretagne"} ticket={true} mounth={"Juillet"} day={"2"} year={"2024"} color={colorFont} bgd={bgdContainer} link={insta.link} />,
        <TicketConcert event={"Les vieilles charrues"} where={"Carhaix, Bretagne"} ticket={true} mounth={"Juillet"} day={"3"} year={"2024"} color={colorFont} bgd={bgdContainer} link={insta.link} />,
        <TicketConcert event={"Les vieilles charrues"} where={"Carhaix, Bretagne"} ticket={false} mounth={"Juillet"} day={"4"} year={"2024"} color={colorFont} bgd={bgdContainer} link={insta.link} />,
        <TicketConcert event={"Les vieilles charrues"} where={"Carhaix, Bretagne"} ticket={true} mounth={"Juillet"} day={"5"} year={"2024"} color={colorFont} bgd={bgdContainer} link={insta.link} />,
                
    ];
    const [isLoaded, setIsLoaded] = useState(false);
    const [videos, setVideos] = useState(null);
    const [videosLR, setVideosLR] = useState(null);
    const [spotify, setSpotify] = useState(null);
    const [deezer, setDeezer] = useState([]);

    const formatAncre = (text) => {
        return text.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-');
    };

    const transformerChaine = (chaine) => {
        const chaineMinuscules = chaine.toLowerCase();
        const positionFeat = chaineMinuscules.indexOf('feat');
        let chaineSansFeat;
        if (positionFeat !== -1) {
            chaineSansFeat = chaineMinuscules.substring(0, positionFeat);
        } else {
            chaineSansFeat = chaineMinuscules;
        }
        const chaineSansSpeciaux = chaineSansFeat.replace(/[^a-zA-Z0-9\s]/g, '');
        const chaineTransformee = chaineSansSpeciaux.replace(/ /g, '%20');
        return chaineTransformee;
    }

    useEffect(() => {
        async function fetchData() {
            const channelVideos = await fetchLatestVideos(6);
            const videoLR = await fetchLatestVideos(2);
            const spotifyData = await fetchSpotifyInfo();
            const deezerArtistAlbum = await fetchArtistAlbum();
            const deezerArtistInfo = await fetchArtistInfo();
            const deezerAlbum = await fetchAlbum();
            const spotifyTracksObject = {};
            for (let track in spotifyData.spotifyTracks.data.tracks) {
                const object = spotifyData.spotifyTracks.data.tracks[track];
                spotifyTracksObject[transformerChaine(object.name)] = transformerChaine(object.artists[0].name);
            }
            const deezerBestTrack = await fetchBestTracks(spotifyTracksObject);
            setVideos(channelVideos.data.items);
            setVideosLR(videoLR.data.items);
            setDeezer([deezerBestTrack, deezerAlbum, deezerArtistAlbum, deezerArtistInfo, spotifyData.spotifyTracks.data.tracks]);
            setSpotify(spotifyData);
            setIsLoaded(true);
            fetchVideo();
        }
        fetchData();
    }, []);
 
    return (
        <div className='Home' style={{background: bgdContainer}}>
            <img className='backgroundHome' src={Cover} alt='profile flouté'/>
                {isLoaded ?
                    <div className='containerHome' style={{backgroundColor: bgdContainer, color: colorFont}}>
                        <Logo image={logo} bdg={bgdContainer} imgLogo={false} title={""} />
                        <ReseauxSociaux instagram={insta} facebook={facebook} x={x} youtube={youtube} tiktok={tiktok} spotify={spfy} itunes={itunes} linkedin={linkedin} web={web} />
                        <Menu color={colorFont} menu={menu} />
                        {/* <Ticket title={"Le title du ticket"} price={"$109.99"} img={Cover} color={colorFont} link={insta.link} /> */}
                        <SliderYoutube title={'Dernières vidéos'} color={colorFont} videos={videos} link={insta.link} /> 
                        <div className='lineSeparation'></div>
                        <OneVideo ancre={formatAncre("Une journée avec Hamza")} id={"Jd5YhQWzDmU"} title={"Une journée avec Hamza"} />
                        <div className='lineSeparation'></div>
                        {/*<LatestRelease id={formatAncre("Latest Release")} title={"Latest Release"} bgd={bgdContainer} color={colorFont} videos={videosLR} music={spotify ? spotify.spotifylatestAlbumTracks.data.items[0] : null} deezer={deezer ? deezer : null} img={spotify ? spotify.spotifyAlbums.data.items[0].images[1].url : null}/>
                        <div className='lineSeparation'></div>
                         <SliderColumn id={"Maroon 5 Live"} column={true} title={"Maroon 5 Live"} tickets={ticketConcert} color={colorFont} link={insta.link} bgd={bgdContainer}  /> */}
                        <OneVideo ancre={formatAncre("Clique x Aya Nakamura")} id={"u2joGVSpetw"} title={"Clique x Aya Nakamura"} />
                        <div className='lineSeparation'></div>
                        {/* <Shop id={formatAncre("Shop")} title={"Shop"} bgd={bgdContainer} color={colorFont} img={Cover} video={Cover} link={insta.link} /> */}
                        <OneVideo ancre={formatAncre("Clique x Mbappé")} id={"L12yzLjyn8E"} title={"Clique x Mbappé"} />
                        <div className='lineSeparation'></div>
                        {/*<Fan id={formatAncre("S.I.N. Fan Club")} title={"S.I.N. Fan Club"} color={colorFont} img={Cover} link={insta.link} />
                        <div className='lineSeparation'></div>
                         <SliderYoutube color={colorFont} videos={videos} link={insta.link} /> */}
                        <OneVideo ancre={formatAncre("Clique Wembanyama")} id={"is8Si8eG2TA"} title={"Clique Wembanyama"} />
                        <div className='lineSeparation'></div>
                        {/* <SliderColumn id={formatAncre("More Music")} column={true} title={"More Music"} musics={spotify ? spotify.spotifyTracks.data.tracks : null} deezer={deezer ? deezer : null} color={colorFont} bgd={bgdContainer} /> */}
                        <OneVideo ancre={formatAncre("Clique x Elodie Costa")} id={"wXUGY4KuiIA"} title={"Clique x Elodie Costa"} />
                        <div className='lineSeparation'></div>
                        <OneVideo ancre={formatAncre("Clique x Francis Cabrel")} id={"tBWT-XZebjA"} title={"Clique x Francis Cabrel"} />
                        <div className='lineSeparation'></div>
                        <OneVideo ancre={formatAncre("Clique x Albert Dupontel")} id={"caxChJXENco"} title={"Clique x Albert Dupontel"} />
                        <div className='lineSeparation'></div>
                        <OneVideo ancre={formatAncre("Clique x Daniel Ek")} id={"OzPGGiEi-dY"} title={"Clique x Daniel Ek"} />
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