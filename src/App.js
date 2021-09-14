//styles
import "./stylesheet/App.css";

import { Route, Switch } from "react-router-dom";

import taskData from "./data/pending-tasks.json";

//components
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/Home/Home";

import Farms from "./components/Farms/Farms";
import FarmForm from "./components/Farms/FarmForm";

import Tasks from "./components/Tasks/Tasks";
import TaskForm from "./components/Tasks/TaskForm";

import Abattoirs from "./components/Abattoirs/Abattoirs";
import AbattoirForm from "./components/Abattoirs/AbattoirForm";

import Employees from "./components/Employees/Employees";
import EmployeeForm from "./components/Employees/EmployeeForm";
import TaskDetail from "./components/Tasks/TaskDetail";

function App() {
  console.log(taskData);
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home taskData={taskData} />
        </Route>
        <Route path="/granjas">
          <Farms />
        </Route>
        <Route path="/tareas">
          <Tasks taskData={taskData} />
        </Route>
        <Route path="/mataderos">
          <Abattoirs />
        </Route>
        <Route path="/empleados">
          <Employees />
        </Route>
        <Route path="/nueva-granja">
          <FarmForm />
        </Route>
        <Route path="/nuevo-matadero">
          <AbattoirForm />
        </Route>
        <Route path="/nuevo-empleado">
          <EmployeeForm />
        </Route>
        <Route path="/nueva-tarea">
          <TaskForm />
        </Route>
        <Route path="/detalle-tarea">
          <TaskDetail />
        </Route>
      </Switch>

      <Footer />
    </>
  );
}

export default App;
