import React from 'react';
import {ButtonList} from "./ButtonList";
import {VideoContainer} from "./VideoContainer";


export const MainContainer = () => {
  return (
    <div className="pl-8 mx-24 bg-gray-100 px-6"><ButtonList/>
    <VideoContainer/></div>
  )
};

