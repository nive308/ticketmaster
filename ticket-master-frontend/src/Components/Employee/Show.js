import React from 'react';
import axios from '../../config/axios';
import {Link} from 'react-router-dom'
// import "./css/bootstrap.css"

class EmployeShow extends React.Component{
    constructor(){
        super()
        this.state={
            employee:{}
        }
    }
    handleRemove=()=>{
        const id=this.props.match.params.id
        const confirmRemove=window.confirm('are you sure?')
        if(confirmRemove){
        axios.delete(`/employees/${id}`,{
            headers:{
            'x-auth':localStorage.getItem('authToken')
                } 
           }).then (response=> {
              this.props.history.push('/employees')
               
           })
        }
    }
    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`/employees/${id}`,{
            headers:{
            'x-auth':localStorage.getItem('authToken')
                } 
           }).then (response=> {
               const employee=response.data
               this.setState({employee})
           })
           .catch(err =>{
               console.log(err)
           })
    }
    render(){
        return(
            <div>
                <h2>employee show page</h2>
                <p>
                    {this.state.employee.name},
                    {this.state.employee.mobile},
                    {this.state.employee.email},
                    {this.state.employee.department}
                </p>
                <button onClick={this.handleRemove}>delete</button>
                <Link to="/employees">Back</Link>
            </div>
        )
    }
  
}
export default EmployeShow

