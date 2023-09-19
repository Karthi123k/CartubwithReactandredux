import React, { useState, useEffect } from 'react';
import menu from './img/menu.png';
import user from './img/user.png';
import { useDispatch,useSelector} from 'react-redux';
import { toggleMenu } from './utils/AppSlice';
import { SEARCH_API } from './utils/constants.js';
import {cacheResults } from './utils/SearchSlice';

const Head = () => {
  const dispatch = useDispatch();
const searchcache=useSelector((store)=>store.search);
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const [searchQuery, setSearchQuery] = useState([]);
  const [suggestion, setsuggestion] = useState([]);
  const[showsuggestion, setshowsugesstion]=useState(false);

  console.log(searchQuery);
  const handleClear = () => {
    setSearchQuery('');
  };

  useEffect(() => {
    const timer = setTimeout(() => { 
      if(searchcache[searchQuery]) { // Check if searchQuery is truthy and if searchcache exists in it
        setsuggestion(searchcache[searchQuery]);
      } else {
        getSearchQuery(); 
      }
          
      
    }, 100); // Change the delay time (in milliseconds) as needed
  
    return () => clearTimeout(timer); // This will clean up the timer when the component unmounts or when searchQuery changes again
  }, [searchQuery]); // Added searchcache as a dependency


  const getSearchQuery = async () => {
    console.log("APICALL"+searchQuery);
    const data = await fetch(SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setsuggestion(json[1]);
   dispatch(cacheResults(
    {
    [searchQuery]:json[1],
  },
   ));
  };

  return (
    <>
      <div className="fixed grid grid-flow-col top-0 left-0 right-0 bg-white p-3 shadow-md ">
      
        <div className="flex col-span-1">
          <img onClick={toggleMenuHandler} alt="Menu" className="h-8 cursor-pointer" src={menu} />
          <span className="text-2xl mx-5 font-bold">CarTub</span>
        </div>
        <div className="col-span-10 ">
          <div>
          <input
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={()=>setshowsugesstion(true)}
            onBlur={()=>setshowsugesstion(false)}
                
          
          />
          {searchQuery && (
        <button onClick={handleClear} className="border border-gray-400 py-2">❌</button>
      )}
          <button className="border border-gray-400 p-2 rounded-r-full">🔍</button>
        </div>
        {showsuggestion &&(
        <div className="fixed bg-white opx-1 w-[28rem] shadow-lg border border-gray">
          <ul>
            {suggestion.map((s)=> <li className="py-2 px-3 shadow-sm hover:bg-gray-200" key={s}>🔍{s}</li>)}
          </ul>
        </div>)} 
        </div>
        <div className="col-span-1">
          <img alt="user-info" className="h-8" src={user} />
        </div>
      
      </div>
    </>
  );
};

export default Head;
