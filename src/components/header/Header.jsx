import React from "react";
import Navigation from "../navigation/Navigation";
import './Header.scss'

const Header = () => {
  return (
    <div className="header">
      <p className="logo">React Example</p>
      <div className="menu"><Navigation/></div>
    </div>
  )
}

export default Header