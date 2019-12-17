import React from 'react'
import Form from './Form'
import axios from '../../config/axios';
// import "./css/bootstrap.css"

class EmployeeNew extends React.Component {
    constructor(props) {
        super(props) 
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleSubmit(formData){
        console.log(formData)
        axios.post('/employees',formData,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
            .then(response=>{
                if(response.data.hasOwnProperty('errors')){
                    alert(response.data.message)
                }else{
                    this.props.history.push('/employees')
                }
                })
                .catch(err=>{
                    console.log(err)
                })
            }
    
    

    render() {
        return (
            <div>
                <h2>Add Employee</h2>
                <Form handleSubmit={this.handleSubmit} formTitle="adding employee"/>
            </div>
        )
    }
}
export default EmployeeNew