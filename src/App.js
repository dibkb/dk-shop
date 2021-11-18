import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import ProductContainer from "./components/ProductContainer";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";
function App() {
  return (
    <Router>
      {/* <div className="container"> */}
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route component={Header} />
        </Switch>
      {/* </div> */}

      <div className="container">
        <Route path="/items" component={ProductContainer} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/cart" component={Cart} />
      </div>
    </Router>
  );
}

export default App;
