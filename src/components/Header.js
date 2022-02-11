import React from "react";
import "../assets/css/Header.css";
import { ReactComponent as Carrito } from "../assets/statics/carrito.svg";
import Arrows from "../assets/statics/arrows.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Header() {
  let history = useHistory();
  return (
    <>
      <div className="menu-header">
        <div className="item-menu-header">
          <img src={Arrows} alt="" onClick={history.goBack} />
        </div>
        <div className="item-menu-header">
          <Link to="/">
            <h3 className="titles">Tienda Wonderland</h3>
          </Link>
        </div>
        <Link to="/Cart">
          {" "}
          <div className="item-menu-header">
            <Carrito />
          </div>
        </Link>
      </div>
    </>
  );
}

export default Header;
