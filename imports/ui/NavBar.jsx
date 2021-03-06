import React, { Component } from "react";
import AccountsUIWrapper from "./AccountsUIWrapper.jsx";
import { Meteor } from "meteor/meteor";
import { NavLink } from "react-router-dom";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    const userPage = (
      <ul className="navbar-nav ml-auto navbar-expand-lg ">
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/About">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/gifts">PickGifts</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/myWishes">MyWishes</NavLink>
        </li>
      </ul>
    );
    
    const guestPage = (
      <ul className="navbar-nav ml-auto navbar-expand-lg">
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/About">About</NavLink>
        </li>
      </ul>
    );

    return (
      <div className="container navbar-container">
        <nav className="navbar navbar-expand-lg ml-auto">
          <div className="navbar-brand" >
            <a href="/" id="navbar-brand-title"><span>🎅🏻</span> Santa's Elf Factory</a>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {Meteor.userId()? userPage : guestPage}
            <AccountsUIWrapper />
          </div>
        </nav>
      </div>
    );
  }
}