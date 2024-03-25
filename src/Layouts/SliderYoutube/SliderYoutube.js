import React, { useState, useEffect } from 'react';
import './SliderYoutube.css';
import Title from '../../components/Title/Title';
import Slider from '../../components/Slider/Slider';
import Video from '../../components/Video/Video';

function SliderYoutube(props) {

  useEffect(() => {
    console.log(props.video);
  }, []);

  const videos =
    props.videos
      ? props.videos.map((video, index) => (
          <Video
            key={index}
            title={video.snippet.title}
            miniature={video.snippet.thumbnails.medium.url}
            link={`https://www.youtube.com/watch?v=${video.id.videoId}`}
            id={video.id.videoId}
          />
        ))
      : null;

  return (
    <div className="SliderYoutube">
      <Title id={props.ancre} title={props.title} marginBottom={true} />
      {props.videos ?
        <Slider link={props.link} components={videos} color={props.color} />
      : 
        null
      }
      
    </div>
  );
}

export default SliderYoutube;
