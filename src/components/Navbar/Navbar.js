import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useGlobalContext } from "../../context/cart_context";
import "./Navbar.css";
import logo from "../../images/logoBlue.png";

export default function Navbar() {
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();
  const isUser = isAuthenticated && user;
  const { amount } = useGlobalContext();
  return (
    <div className="nav">
        <img src={logo} className="nav-logo"></img>
      <div className="nav-container">

        <ul className="links">
          <Link to="/">
            <li >
              <svg xmlns="http://www.w3.org/2000/svg" id="home" fill="currentColor" class="bi bi-house"
                viewBox="0 0 16 16"> <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 
                .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0
                .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13
                7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
              </svg>
              <label className="nav-link" htmlFor="home">Home</label>            
            </li>
          </Link>
          <Link to="/products">
            <li  >
            <svg xmlns="http://www.w3.org/2000/svg" id="shop"  fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
              </svg>
              <label  className="nav-link" htmlFor="shop">Shop</label>
              
            </li>
          </Link>
        </ul>

        <div className="user">
          {isUser ? (
            <button
              id="user-login"
              className="login"
              onClick={() => logout({ returnTo: window.location.origin })}
            >
                              <svg xmlns="http://www.w3.org/2000/svg" id="login"
                  width="24" height="24" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg>
              Log out
            </button>
          ) : (
            <button id="user-login" className="login" onClick={loginWithRedirect}>
                <svg xmlns="http://www.w3.org/2000/svg" id="login"
                   fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg>
            </button>
          )}
          <div className="nav-item">
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z" />
            </svg> */}
            <div className="amount-container">
              <p className="total-amount">{amount}</p>
            </div>
          <Link to="/cart">
            <i className="fa fa-shopping-cart fa-2x cart-icon"></i>{" "}
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
