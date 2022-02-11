import React, { useContext } from "react";
import "../assets/css/ItemCarrito.css";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import Contexto from "../context/Contexto";

function ItemCarrito(props) {
  const { title, price, image, id, quantity } = props[0];
  const { incrementCart, reduceCart } = useContext(Contexto);

  return (
    <>
      <div className="card-cart p-1" key={id}>
        <div className="card-img">
          <img src={image} alt="" />{" "}
        </div>
        <div className="card-name">{title}</div>
        <div className="quantity text-center d-flex justify-content-center align-items-center">
          <FaMinusCircle
            onClick={() => {
              reduceCart(id);
            }}
            size={20}
          />{" "}
          <span className="mx-1">{quantity}</span>{" "}
          <FaPlusCircle
            onClick={() => {
              incrementCart(id);
            }}
            size={20}
          />
        </div>
        <div className="card-price"> $ {(price * quantity).toFixed(1)}</div>
      </div>
    </>
  );
}

export default ItemCarrito;
