import React, { useState } from "react";
import TeamImg01 from '../Media/teamImg01.jpg';
import TeamImg02 from '../Media/teamImg02.jpg';
import TeamImg03 from '../Media/teamImg03.jpg';
import TeamImg04 from '../Media/teamImg04.jpg';
import TeamImg05 from '../Media/teamImg05.jpg';

{/* gallery.js component displays photos of team members and additional info text once picture is selected

Copyright free media sources (in order of appearance):
teamImg01 Photo by Ashford Marx: https://www.pexels.com/photo/male-with-mustache-and-hat-in-sunny-park-6501761/ 
teamImg02 Photo by Monstera Production: https://www.pexels.com/photo/handsome-young-ethnic-guy-looking-at-camera-and-smiling-5384445/ 
teamImg03 Photo by Laker : https://www.pexels.com/photo/black-man-in-hat-looking-at-camera-5792641/ 
teamImg04 Photo by Ketut Subiyanto: https://www.pexels.com/photo/positive-bearded-young-indian-guy-in-turban-4307869/ 
teamImg05 Photo by Erik Mclean: https://www.pexels.com/photo/stylish-young-bearded-man-looking-away-4110881/ */}


const TheTeam = () => {
  const [value,setValue]=useState(0);

  const teamItems = [
    <img className="imgPreview" src={TeamImg01} onClick={() => { setValue(0); }} alt="Image of Coxsawin - Johnny"/>, 
    <img className="imgPreview" src={TeamImg02} onClick={() => { setValue(1); }} alt="Image of Stroke - Edmond"/>, 
    <img className="imgPreview" src={TeamImg03} onClick={() => { setValue(2); }} alt="Image of 2nd Seat - Tristen"/>, 
    <img className="imgPreview" src={TeamImg04} onClick={() => { setValue(3); }} alt="Image of 3rd Seat - Gav"/>, 
    <img className="imgPreview" src={TeamImg05} onClick={() => { setValue(4); }} alt="Image of 4th Seat - Alex"/>, 
  ];
  const teamList = teamItems.map((teamPhoto,index) => <li key={index}>{teamPhoto}</li>);

  const teamNames = [
    <p className="teamNames">Coxsawin - Johnny</p>, 
    <p className="teamNames">Stroke - Edmond</p>, 
    <p className="teamNames">2nd Seat - Tristen</p>, 
    <p className="teamNames">3rd Seat - Gav</p>, 
    <p className="teamNames">4th Seat - Alex</p>, 
  ];
  const teamNamesList = teamNames.map((teamNames,index) => <li key={index}>{teamNames}</li>);

  const teamInfo = [
    <p className="teamInfo">The Coxsawin is Johnny who...</p>, 
    <p className="teamInfo">The Stroke Edmond is a...</p>, 
    <p className="teamInfo">The 2nd Seat Tristen...</p>, 
    <p className="teamInfo">The 3rd Seat Gav begun...</p>, 
    <p className="teamInfo">The 4th Seat Alex found...</p>, 
  ];
  const teamInfoList = teamInfo.map((team,index) => <li key={index}>{team}</li>);


  return (
    <div className="theTeam">
      <h2>The Team</h2>
      <ul className="imgPreviewRow">{teamList}</ul>
      <ul className="teamNamesRow">{teamNamesList}</ul>
      <div className="teamInfoRow">
        {teamInfo[value]}
      </div>
    </div>
    );
};

export default TheTeam;