import React from 'react';
import "./CSS/card.css"
const VideoCard = ({info}) => {
    console.log(info);
    if (!info) {
        return null; // Or render a placeholder
      }
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
   
  return (
    <div className="p-2 m-2 w-80 shadow-lg">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <div style={{ width: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        <ul>
          <li className="font-bold py-2 title" style={{  maxWidth: '100%' }} >{title}</li>
          <li>{channelTitle}</li>
          <li>{statistics.viewCount} Views</li>
        </ul>
      </div>
    </div>
  );
};


export default VideoCard;
