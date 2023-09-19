import React,{useState, useEffect}from 'react';
import {YOUTUB_VIDEO_API} from "./utils/constants";
import VideoCard, { AdVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';

export const VideoContainer = () => {
  const [videos, setvideos]=useState([]);
  useEffect(()=>{
    getVideos();
  },[]);
  const getVideos = async ()=>{
    const data= await fetch(YOUTUB_VIDEO_API);
    const json=await data.json();  
    setvideos(json.items);
   
  };
 
  return (
    <div className="flex flex-wrap">
      {videos.map(video => <Link to={"/watch?v="+video.id} key={video.id}><VideoCard  info={video} /></Link>)}

    </div>
  )
};

