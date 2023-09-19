import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const SideArea = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  console.log(isMenuOpen);
  if (!isMenuOpen) return null;
  return  (
    <div className="pl-2 pr-3 fixed  bg-white shadow-md ">
      <ul>
          <li><Link to={"/"}>Home</Link></li>   
          <li>Shorts</li>
          <li>Live</li>
          <li>Videos</li>
      </ul>
      <h1 className="font-bold pt-2">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Games</li>
        <li>Movies</li>
        <li>Sports</li>
      </ul>
      <h1 className="font-bold pt-2">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Games</li>
        <li>Movies</li>
        <li>Sports</li>
      </ul>
    </div>
  )
};
