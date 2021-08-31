//styles
import "./App.css";

//components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

import { Route, Switch } from "react-router-dom";
import CreateFarm from "./components/CreateFarm";
import CreateTask from "./components/CreateTask";
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
          <CreateFarm />
        </Route>
        <Route path="/tareas">
          <CreateTask />
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
