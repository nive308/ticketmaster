import React from 'react'
import axios from '../../config/axios';
import {Link} from 'react-router-dom'
// import "./css/bootstrap.css"

export default class TicketShow extends React.Component {
    constructor(){
        super()
        this.state = {
            ticket:{}
        }
    }
    handleRemove=()=>{
        const id=this.props.match.params.id
        const confirmRemove=window.confirm('are you sure?')
        if(confirmRemove){
        axios.delete(`/tickets/${id}`,{
            headers:{
            'x-auth':localStorage.getItem('authToken')
                } 
           }).then (response=> {
              this.props.history.push('/tickets')
               
           })
        }
    }
    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`/tickets/${id}`,{
            headers:{
            'x-auth':localStorage.getItem('authToken')
                } 
           }).then (response=> {
               const ticket=response.data
               this.setState({ticket})
           })
           .catch(err =>{
               console.log(err)
           })
    }
    render(){
        return (
            <div>
                <h3>Ticket show page</h3>
                Code
                <h5>{this.state.ticket.code}</h5>
                Department
                <h5>{this.state.ticket.department}</h5>
                Message
                <h5>{this.state.ticket.message}</h5>
                Priority
                <h5>{this.state.ticket.priority}</h5><br/>
                <button onClick={this.handleRemove}>delete</button>
                <Link to="/tickets">Back</Link>
            </div>
        )
    }
}
