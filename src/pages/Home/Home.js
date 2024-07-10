import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <div className="info">
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
      <div className="pic"></div>
      </div>
      <Footer/>
    </div>
  );
}
