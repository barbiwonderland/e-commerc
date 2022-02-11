import React, { useContext, useEffect } from "react";
import "../assets/css/Home.css";
import Contexto from "../context/Contexto";
import ItemProducto from "../components/ItemProducto";

function Home() {
  const { getProducts, productos } = useContext(Contexto);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          {productos.map((item) => (
            <ItemProducto {...item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
