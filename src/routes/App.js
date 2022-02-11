import Layout from "../containers/Layout";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../assets/css/app.css";
import Home from "../containers/Home";
import UseContext from "../context/UseContext";
import Cart from "../containers/Cart";
function App() {
  return (
    <>
      {/* Bootstrap */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
      <BrowserRouter>
        <UseContext>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Cart" component={Cart} />
            </Switch>
          </Layout>
        </UseContext>
      </BrowserRouter>
    </>
  );
}

export default App;
