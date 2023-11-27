import React from 'react'
import './SliderYoutube.css';
import Title from '../../components/Title/Title';
import Slider from '../../components/Slider/Slider';
import Video from '../../components/Video/Video';

function SliderYoutube(props) {

    const videos = [
        <Video title={"Une video sur youtube"} miniature={props.video} link={props.link} />,
        <Video title={"Une video sur youtube"} miniature={props.video} link={props.link} />,
        <Video title={"Une video sur youtube"} miniature={props.video} link={props.link} />,
        <Video title={"Une video sur youtube"} miniature={props.video} link={props.link} />,
        <Video title={"Une video sur youtube"} miniature={props.video} link={props.link} />,
        <Video title={"Une video sur youtube"} miniature={props.video} link={props.link} />,
        <Video title={"Une video sur youtube"} miniature={props.video} link={props.link} />,
        <Video title={"Une video sur youtube"} miniature={props.video} link={props.link} />,
        <Video title={"Une video sur youtube"} miniature={props.video} link={props.link} />
    ];

 
    return (
        <div className='SliderYoutube'>
            <Title title={"Official Music Videos"} marginBottom={true}/>
            <Slider link={props.link} components={videos} color={props.color} />
        </div>
    );
}

export default SliderYoutube;