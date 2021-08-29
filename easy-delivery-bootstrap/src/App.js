//styles
import "./App.css";

//components
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";

import { Route, Switch } from "react-router-dom";
import CreateFarm from "./CreateFarm";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/nueva-granja">
          <CreateFarm />
        </Route>
      </Switch>

      <Footer />
    </>
  );
}

export default App;
