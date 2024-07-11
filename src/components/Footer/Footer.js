import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const quotes = [
    {
      id: 1,
      text: "You can never be overdressed or over educated.",
    },
    {
      id: 2,
      text: "Style leads -it's a way to say who you are without having to speak",
    },
    {
      id: 3,
      text: "Good style is as little as possible while saying as mush you possible.",
    },
    {
      id: 4,
      text: "People will stare. Make it worth their while",
    },

    {
      id: 5,
      text: "The joy of dressing is an art.",
    },
  ];

  let num = Math.floor(Math.random() * quotes.length);
  let arr = quotes[num].text;
  console.log(arr);
  return (
    <>
      <div className="footer bg-dark">
        <div className="social">
          <a href="https://www.instagram.com/gwach_shop/">
            <i className="fa fa-instagram "></i>
          </a>
          <a href="https://github.com/geekcoldhand">
            <i className="fa fa-github "></i>
          </a>
          <a href="https://www.youtube.com/channel/UCcesTsu0RH9FxMKHbFh9RWA">
            <i className="fa fa-youtube "></i>
          </a>
          <a href="https://www.linkedin.com/in/horatious-harris-41970a159/">
            <i className="fa fa-linkedin "></i>
          </a>
        </div>
        <p className="copyright">Copyright &copy; 2024 GWACH <span><svg xmlns="http://www.w3.org/2000/svg" height="10px" className="icon" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m226-559 78 33q14-28 29-54t33-52l-56-11-84 84Zm142 83 114 113q42-16 90-49t90-75q70-70 109.5-155.5T806-800q-72-5-158 34.5T492-656q-42 42-75 90t-49 90Zm178-65q-23-23-23-56.5t23-56.5q23-23 57-23t57 23q23 23 23 56.5T660-541q-23 23-57 23t-57-23Zm19 321 84-84-11-56q-26 18-52 32.5T532-299l33 79Zm313-653q19 121-23.5 235.5T708-419l20 99q4 20-2 39t-20 33L538-80l-84-197-171-171-197-84 167-168q14-14 33.5-20t39.5-2l99 20q104-104 218-147t235-24ZM157-321q35-35 85.5-35.5T328-322q35 35 34.5 85.5T327-151q-25 25-83.5 43T82-76q14-103 32-161.5t43-83.5Zm57 56q-10 10-20 36.5T180-175q27-4 53.5-13.5T270-208q12-12 13-29t-11-29q-12-12-29-11.5T214-265Z"/></svg> </span></p>
      {/* <h3 className="quotes">{arr}</h3> */}
      </div>
    </>
  );
};
export default Footer;
