import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import DragZone from "../../components/DragZone/DragZone";

export default function Home() {
  return (
    <div className="info">
    <span id="banner">
        <div class="banner-message"> 
        Shop our new collection!
    </div> 
    </span>

      <div className="hero">

      <div className="content">
        <div className="head">
          <h1>Ready for new stuff</h1>
          <p>Buy new stock at reasonable cost</p>

          <Link to="/products">
            <button>Get Started</button>
          </Link>
        </div>

      </div>
      <div className="pic toggle"></div>
      </div>
      <DragZone/>
      <Footer/>
    </div>
  );
}
