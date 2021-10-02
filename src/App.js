//styles
import "./stylesheet/App.css";
import "./stylesheet/form.css";

import { Route, Switch } from "react-router-dom";

//data
import taskData from "./data/tasks.json";
import farmData from "./data/farms.json";
import employeData from "./data/employees.json";
import abattoirData from "./data/abattoirs.json";

//components
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./components/Home/Home";

import FarmForm from "./components/Farms/FarmForm";
import FarmsList from "./components/Farms/FarmsList";

import AbattoirsList from "./components/Abattoirs/AbattoirsList";
import AbattoirForm from "./components/Abattoirs/AbattoirForm";

import EmployeeForm from "./components/Employees/EmployeeForm";
import EmployeesList from "./components/Employees/EmployeesList";

import TaskDetail from "./components/Tasks/TaskDetail";
import TasksList from "./components/Tasks/TasksList";
import TaskForm from "./components/Tasks/TaskForm";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home taskData={taskData} />
        </Route>
        <Route path="/granjas">
          <FarmsList farmData={farmData} />
        </Route>
        <Route path="/tareas">
          <TasksList taskData={taskData} />
        </Route>
        <Route path="/mataderos">
          <AbattoirsList abattoirData={abattoirData} />
        </Route>
        <Route path="/empleados">
          <EmployeesList employeeData={employeData} />
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
