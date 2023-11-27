import React from 'react'
import './LatestRelease.css';
import Title from '../../components/Title/Title';
import LatestReleaseComponent from '../../components/LatestRelease/LatestRelease';
import Slider from '../../components/Slider/Slider';
import Video from '../../components/Video/Video';

function LatestRelease(props) {

    const videos = [
        <Video title={"Une video sur youtube"} miniature={props.video} link={props.link} />,
        <Video title={"Une video sur youtube"} miniature={props.video} link={props.link} />,
    ];

 
    return (
        <div className='LatestReleaseLayout'>
            <Title title={"Latest Release"} marginBottom={true}/>
            <LatestReleaseComponent title={"Le title d'une music vraiment bien"} singer={"Un ptn de chanteur"} music={props.music} bgd={props.bgd} color={props.color} />
            <Slider link={props.link} components={videos} color={props.color} />
        </div>
    );
}

export default LatestRelease;