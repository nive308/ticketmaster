import React from 'react';
import axios from '../../config/axios';
import EmployeeForm from './Form'
// import "./css/bootstrap.css"

class EmployeeEdit extends React.Component{
    constructor(props){
        super(props)
        this.state={
            employee:{}
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`/employees/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response =>{
            const employee = response.data
            this.setState({employee})
        })
        .catch(err=>{
            console.log(err)
        })
    }
    handleSubmit(formData){
        const id = this.props.match.params.id
        axios.put(`/employees/${id}`,formData, {
                headers:{
                    'x-auth':localStorage.getItem('authToken')
                }
            })
            .then(response =>{
                if(response.data.hasOwnProperty('error')){
                    alert(response.data.message)
                }else{
                    this.props.history.push(`/employees/${response.data._id}`)
                }
            })
            .catch(err =>{
                console.log(err)
            })
        }        
    render(){
        return(
            <div>
                <h2>Employee Edit</h2> 
                {(Object.keys(this.state.employee).length !== 0) && <EmployeeForm employee={this.state.employee} 
                handleSubmit={this.handleSubmit}/>}
            </div>
        )
    }
}
export default EmployeeEdit