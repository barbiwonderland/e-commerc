import React, { useContext, useEffect } from "react";
import "../assets/css/Home.css";
import Contexto from "../context/Contexto";
import ItemProducto from "../components/ItemProducto";
import Loading from "../components/Loading";
function Home() {
  const { getProducts, productos, loading } = useContext(Contexto);
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <div className="container">
        {loading ? (
          <>
            {" "}
            <div className="row mt-5">
              {productos.map((item) => (
                <ItemProducto {...item} key={item.id} />
              ))}
            </div>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
}

export default Home;
