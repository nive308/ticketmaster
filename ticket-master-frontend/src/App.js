import React from 'react';
import "./css/bootstrap.css"

import CustomersList from './Components/Customers/List'
import CustomerNew from'./Components/Customers/New'
import CustomerForm from'./Components/Customers/Form'
import CustomerShow from'./Components/Customers/show'
import CustomerEdit from'./Components/Customers/Edit'

import DepartmentList from'./Components/Department/List'

import EmployeeList from'./Components/Employee/List'
import EmployeeNew from'./Components/Employee/New'
import EmployeeForm from'./Components/Employee/Form'
import EmployeeShow from'./Components/Employee/Show'
import EmployeeEdit from'./Components/Employee/Edit'

import TicketList from'./Components/Tickets/List'
import TicketNew from'./Components/Tickets/New'
import TicketForm from'./Components/Tickets/Form'
import TicketShow from'./Components/Tickets/Show'

import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    
    <div>
    
      <Link to="/Customers">Customers</Link>|
      <Link to="/Department">Department</Link>|
      <Link to="/Employees">Employees</Link>|
      <Link to="/Tickets">Tickets</Link>

    
      <Switch>
      <Route path="/Customers" component={CustomersList} exact={true}/> 
      <Route path="/Customers/new" component={CustomerNew}/>
      <Route path="/Customers/form" component={CustomerForm}/>
      <Route path="/Customers/edit/:id" component={CustomerEdit}/>
      <Route path="/Customers/:id" component={CustomerShow}/>

      <Route path="/Department" component={DepartmentList}/>

      <Route path="/Employees" component={EmployeeList} exact={true}/>
      <Route path="/Employees/new" component={EmployeeNew}/>
      <Route path="/Employees/form" component={EmployeeForm}/>
      <Route path="/Employees/edit/:id" component={EmployeeEdit}/>
      <Route path="/Employees/:id" component={EmployeeShow}/>
      
      <Route path="/Employees" component={EmployeeList} exact={true}/>
      <Route path="/Employees/new" component={EmployeeNew}/>
      <Route path="/Employees/form" component={EmployeeForm}/>
      <Route path="/Employees/edit/:id" component={EmployeeEdit}/>
      <Route path="/Employees/:id" component={EmployeeShow}/>

      <Route path="/Tickets" component={TicketList} exact={true}/>
      <Route path="/Tickets/new" component={TicketNew}/>
      <Route path="/Tickets/form" component={TicketForm}/>
      <Route path="/Tickets/:id" component={TicketShow}/>




      </Switch>
      </div>
    
    </BrowserRouter>
  );
}

export default App;
