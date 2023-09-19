import React, { useEffect, useState } from 'react';
import { closeMenu } from './utils/AppSlice';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import CommentSection from './CommentsArea';
import LiveChat from './LiveChat';

const Watch = () => {
  const [searchParams] = useSearchParams();
  const [videoInfo, setVideoInfo] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());

    // Fetch video information from YouTube API
    const apiKey = 'AIzaSyD8WrBRsXo0KN-XtXh7M5cDhsrmsfN9BdU';
    const videoId = searchParams.get("v");

    fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet,statistics&key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        setVideoInfo(data.items[0]);
      })
      .catch(error => console.error('Error fetching video information:', error));
  }, [dispatch, searchParams]);

  if (!videoInfo) {
    return <div>Loading...</div>; // You may want to display a loading indicator while fetching data.
  }

  return (
    <>
    <div className="flex w-full">
      <div classname="flex-1 w-full">
        <div className="px-2 border border-gray-400 rounded-lg  ">
          <iframe width="900" height="450" src={`https://www.youtube.com/embed/${searchParams.get("v")}`} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>

       
        <h2 className="font-bold">{videoInfo.snippet.title}</h2>
        <div className="flex flex-wrap font-bold">
        <p>Channel: {videoInfo.snippet.channelTitle}</p>
        <span className="mx-36 flex fleex-wrap">
        <p>Likes: {videoInfo.statistics.likeCount}</p>
        <p className="mx-5">Views: {videoInfo.statistics.viewCount}</p>
        </span>
        </div>
      
       
        <div className="shadow-lg bg-white mx-6">
        <h2 className="font-bold"><u>Comments</u></h2>
          <CommentSection/></div>        
        
      </div>
      <div className="flex-1 w-full">
        <LiveChat />
      </div>
      </div>
    </>
  )
};

export default Watch;
