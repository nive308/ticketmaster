import React from 'react'
import {Link} from 'react-router-dom'
import axios from '../../config/axios'
// import "./css/bootstrap.css"

class CustomerShow extends React.Component{
    constructor(){
        super()
        this.state={
            customer:{}
        }
    }
    handleRemove=()=>{
        const id=this.props.match.params.id
        const confirmRemove=window.alert("Are you sure?")
        if(confirmRemove){
        axios.delete(`/customers/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
         this.props.history.push('/customers')
        })
    }}

    componentDidMount(){
        const id = this.props.match.params.id
        
        axios.get(`/customers/${id}`,{
            headers:{
                "x-auth":localStorage.getItem("authToken")
            }
        })
        .then(response=>{
            const customer=response.data
            console.log(customer)
            this.setState({customer})
        })
        .catch(err=>{
            console.log(err)
        })
    }
    

    render(){
        return(
            <div>
                <h2>Customer show page</h2>
                <p>
                    {this.state.customer.name},
                    {this.state.customer.email},
                    {this.state.customer.mobile}
                </p>
                <Link to={`/customers/edit/${this.state.customer._id}`}>edit</Link>
                <button onClick={this.handleRemove}>delete</button>
                <Link to="/customers">back</Link>
            </div>
        )
    }
 }
export default CustomerShow