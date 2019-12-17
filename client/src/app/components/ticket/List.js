import React from 'react'
import axios from '../../config/axios'
// import axios from 'axios'

class TicketList extends React.Component{
    constructor(){
        super()
        this.state={
            tickets:[]       
         }
        // console.log("constructor")
    }

    componentDidMount(){
        console.log("comp")
        
        axios.get('/tickets',{
            headers:{
                "x-auth":localStorage.getItem("authToken")
            }
        })
        .then(response=>{
            console.log(response)
            const tickets=response.data
            this.setState({tickets})
        })
        .catch(err=>{
           alert(err)
        })
    }
    render(){
        // console.log("render")
        return(
            <div>
              <h2>Listing tickets</h2>
              {this.state.tickets &&
                <ul>{this.state.tickets.map((ticket)=>{
                    return (
                    <li>{ticket.name}></li>
                    )
                })}</ul>
              }
            </div>
        )
    }
}
export default TicketList