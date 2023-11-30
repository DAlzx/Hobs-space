import React from 'react'
import './LatestRelease.css';
import Title from '../../components/Title/Title';
import LatestReleaseComponent from '../../components/LatestRelease/LatestRelease';
import Slider from '../../components/Slider/Slider';
import Video from '../../components/Video/Video';

function LatestRelease(props) {

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
        <div className='LatestReleaseLayout'>
            <Title id={props.id} title={props.title} marginBottom={true}/>
            <LatestReleaseComponent music={props.music} bgd={props.bgd} color={props.color} img={props.img} />
            {props.videos ?
                <Slider link={props.link} components={videos} color={props.color} />
            :
                null
            }
            
        </div>
    );
}

export default LatestRelease;