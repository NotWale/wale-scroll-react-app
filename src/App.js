import "./App.css";
import Home from "./pages";
import TipsPage from "./pages/tip";
import Contact from "./pages/contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/tips" component={TipsPage} exact />
        <Route path="/contact" component={Contact} exact />
      </Switch>
    </Router>
  );
}

export default App;
