import React from 'react'
import axios from '../../config/axios';
import TicketForm from './Form'
// import "./css/bootstrap.css"

 class TicketNew extends React.Component {
    constructor(props){
        super(props)
            this.handleSubmit = this.handleSubmit.bind(this)
        
    }

    handleSubmit(formData) {
        axios.post('/tickets', formData, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
        .then(response => {
            console.log(response.data)
            this.props.history.push('/tickets')
        })
        .catch(err => {
            console.log(err)
        })
    }
    render() {
        return (
            <div>
                <h2>Add Ticket</h2>
                
                <TicketForm handleSubmit={this.handleSubmit} formTitle="adding ticket"/>
            </div>
        )
    }
}
export default TicketNew
