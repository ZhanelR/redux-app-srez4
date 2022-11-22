import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";
import "./Navigation.scss"

const Navigation = () => {

  const location = useLocation();
  const {pathname} = location;
  const splitLocation = pathname.split("/");

  return (
    <nav className="menu">
      <ul className="menu__list">
        <Link to="/" className={splitLocation[1] === "" ? "menu__list-item active" : "menu__list-item "}>Articles</Link>
        <Link to="users" className={splitLocation[1] === "users" ? "menu__list-item active" : "menu__list-item "}>Users</Link>
        <Link to="photos" className={splitLocation[1] === "photos" ? "menu__list-item active" : "menu__list-item "}>Photos</Link>
      </ul>
    </nav>
  )
}

export default Navigation