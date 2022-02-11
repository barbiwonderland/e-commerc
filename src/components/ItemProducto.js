import React, { useContext } from "react";
import { FaCartPlus, FaImages } from "react-icons/fa";
import Contexto from "../context/Contexto";
import "../assets/css/ProductItem.css";
function ItemProducto(props) {
  const { addToCart } = useContext(Contexto);
  const { title, price, image, id } = props;
  return (
    <>
      {" "}
      <div className="col-md-3">
        <div className="card  " id={id}>
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text fs-4 ">$ {price}</p>
          </div>
          <div className="card-footer">
            <button
              className=" shadow-none btn btn-dark mx-auto d-flex p-2 add-icon"
              onClick={() => {
                addToCart(id);
              }}
            >
              <FaCartPlus size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemProducto;
