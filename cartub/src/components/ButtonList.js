import React from 'react';
import Button from './Button';

export const ButtonList = () => {
  
  return (
    <div className="flex">
      <Button name="All"/>
      <Button name="Live"/>
      <Button name="Cricket"/>
      <Button name="Videos"/>
      <Button name="Soccer"/>
      <Button name="Songs"/>
      <Button name="Games"/>
      <Button name="News"/>
      <Button name="Videos"/>
      <Button name="Soccer"/>
      <Button name="Songs"/>
      <Button name="Games"/>
      <Button name="News"/>
   
     
      {/*  
      Thhis is laternative code for passing props
      import React from 'react';
import Button from './Button';

const buttonNames = [
  "All", "Live", "Cricket", "Videos", "Soccer",
  "Songs", "Games", "News", "Videos", "Soccer",
  "Songs", "Games", "News", "Videos", "Soccer",
  "Songs", "Games", "News"
];

export const ButtonList = () => {
  return (
    <div className="flex">
      {buttonNames.map((name, index) => (
        <Button key={index} name={name} />
      ))}
    </div>
  )
};

      
      */}
    </div>
  )
};

