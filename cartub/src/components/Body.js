import React from 'react';
import {SideArea} from "./SideArea";
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div className="flex mt-16 mx-2 o bg-gray-100 py-6">
      <SideArea/>
      <Outlet/>
    </div>
  )
};

export default Body;