import React from 'react'
import axios from '../../config/axios';
import { Link } from 'react-router-dom'
// import "./css/bootstrap.css"


class EmployeeList extends React.Component {
    constructor() {
        super()
        this.state = {
            employees: []
        }
    }
    handleRemove =(id)=>{
        const confirmRemove=window.confirm("Are you sue?")
        if(confirmRemove){
            axios.delete(`/employees/${id}`,{
                headers:{
                    'x-auth':localStorage.getItem('authToken')
                }
            })
            .then(response =>{
                console.log(response.data)
                this.setState(prevState=>({
                    employees:prevState.employees.filter(employee=>
                        employee._id != response.data._id)
                }))
            })
        }
    }
    componentDidMount() {
        axios.get('/employees', {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
        .then(response => {
            console.log(response.data)
            const employees = response.data
            this.setState({ employees })
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        console.log(this.state.employees)
        return (
            <div>
                <h2>List of Employees - {this.state.employees.length}</h2>
                <table border="1">
                    <thead>
                        <tr>
                            <th> # </th>
                            <th> Name </th>
                            <th> Email </th>
                            <th> Mobile </th>
                            <th> Department </th>
                            <th> Action </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map((employee, index) => {
                            return (
                                <tr key={employee._id}>
                                    <td> {index + 1} </td>
                                    <td><Link to={`/employees/${employee._id}`}>{employee.name}</Link></td>
                                    <td> {employee.email} </td>
                                    <td> {employee.mobile} </td>
                                    <td> {employee.departmentId} </td>
                                    <button onClick={()=>{
                            this.handleRemove(employee._id)
                        }}>Remove</button>
                                </tr>
                            )
                        })}
                    </tbody>

                </table>
                {/* <ul>
                    {this.state.employees.map(employee => {
                        return <li key={employee._id}>{employee.name}</li>
                    })}
                </ul> */}
                <Link to="/employees/new">Add Employee</Link>
            </div>
        )
    }

}
export default EmployeeList
