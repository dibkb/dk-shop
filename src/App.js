import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import ProductContainer from "./components/ProductContainer";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Route path = '/' component = {ProductContainer} exact/>
      </div>
    </Router>
  );
}

export default App;
