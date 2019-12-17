import React from 'react'
import axios from '../../config/axios';
// import TicketsForm from '../tickets/Form'
import { Link } from 'react-router-dom'
// import "./css/bootstrap.css"

class TicketList extends React.Component {
    constructor() {
        super()
        this.state = {
            tickets: []
       }
       
    }
    handleRemove =(id)=>{
        const confirmRemove=window.confirm("Are you sue?")
        if(confirmRemove){
            axios.delete(`/tickets/${id}`,{
                headers:{
                    'x-auth':localStorage.getItem('authToken')
                }
            })
            .then(response =>{
                console.log(response.data)
                this.setState(prevState=>({
                    tickets:prevState.tickets.filter(ticket=>
                        ticket._id != response.data._id)
                }))
            })
        }
    }
    componentDidMount() {
        axios.get('/tickets', {
            headers: {
                'x-auth': localStorage.getItem('authToken')
            }
        })
            .then(response => {
                console.log(response.data)
                const tickets = response.data
                this.setState({tickets})
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        console.log("render")
        return (
            <div className="container">
                <h1>Listing tickets - {this.state.tickets.length}</h1>
                <table border="1">
                <thead>
                        <tr>
                            <th> Code </th>
                            <th> Name </th>
                            <th> Department </th>
                            <th> Priority </th>
                            <th> Message </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tickets.map((ticket, index) => {
                            return (
                                <tr key={ticket._id}>
                                    <td> {ticket.code} </td>
                                    <td><Link to={`/tickets/${ticket._id}`}>{ticket.name}</Link></td>
                                    <td> {ticket.department} </td>
                                    <td>{ticket.priority}</td>
                                    <td>{ticket.message}</td>
                                    <button onClick={()=>{this.handleRemove(ticket._id)
                                    }}>Remove</button>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <Link to="/tickets/new">Add Tickets</Link>

                {/* <div>
                <TicketsForm handleSubmit={this.handleSubmit}/>
                </div> */}
                
            </div>
        )
    }
}
export default TicketList
