//styles
import "./App.css";

//components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

import { Route, Switch } from "react-router-dom";
import CreateFarm from "./components/CreateFarm";
import CreateTask from "./components/CreateTask";

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
        <Route path="/nueva-tarea">
          <CreateTask />
        </Route>
      </Switch>

      <Footer />
    </>
  );
}

export default App;
