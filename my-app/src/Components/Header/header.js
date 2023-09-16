import React from "react";
import TitleImg from './titleImg.jpg'; 

{/*Photo by Patrick Case: https://www.pexels.com/photo/people-riding-boat-on-water-3693081/ */}

const Header = () => {
  return (
    <div className="Header">
        <h1>Victorian Rowers Boathouse Club<br/>VRBC</h1>
        <img src={TitleImg} className="titleImg" alt="Title Image" />
    </div>
    );
};

export default Header;