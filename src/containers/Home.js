import React, { useContext, useEffect } from "react";
import "../assets/css/Home.css";
import Contexto from "../context/Contexto";
import ItemProducto from "../components/ItemProducto";
import Loading from "../components/Loading";
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';;
function Home() {
  const { getProducts, productos, loading } = useContext(Contexto);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <ToastContainer
      theme="dark"
      position="bottom-right"
      autoClose={2000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover={false}
      />
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
