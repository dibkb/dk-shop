import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductContainer from "./components/ProductContainer";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";
function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Route path="/" component={ProductContainer} exact />
        <Route path="/product/:id" component={ProductPage}/>
        <Route path="/cart" component={Cart}/>
      </div>
    </Router>
  );
}

export default App;
