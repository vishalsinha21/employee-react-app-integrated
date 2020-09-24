import React from 'react';
import EmployeeList from "./components/EmployeeList";
import AddEmployee from "./components/AddEmployee";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EditEmployee from "./components/EditEmployee";


function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={EmployeeList}/>
          <Route path="/add" component={AddEmployee}/>
          <Route path="/edit/:id" component={EditEmployee}/>
        </Switch>
      </Router>
  );
}

export default App;
