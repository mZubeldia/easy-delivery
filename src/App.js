//styles
import "./App.css";

//components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

import { Route, Switch } from "react-router-dom";
import Farms from "./components/Farms";
import Tasks from "./components/Tasks";
import FarmForm from "./components/FarmForm";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/granjas">
          <Farms />
        </Route>
        <Route path="/tareas">
          <Tasks />
        </Route>
        <Route path="/nueva-granja">
          <FarmForm />
        </Route>
      </Switch>

      <Footer />
    </>
  );
}

export default App;
