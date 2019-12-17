import React from 'react'
import {Link} from 'react-router-dom'
import axios from '../../config/axios'
// import "./css/bootstrap.css"
// import "../../css/bootstrap.css"

class CustomersList extends React.Component{
    constructor(){
        super()
        this.state={
            customers:[]
        }
    }
handleRemove=(id)=>{
       const confirmRemove=window.confirm("Are you sure?")
       if(confirmRemove){
           axios.delete(`/customers/${id}`,{
           headers:{
               'x-auth':localStorage.getItem('authToken')
           }
          })
          .then(response=>{
            console.log(response.data) 
           this.setState(prevState=>({
              customers:prevState.customers.filter(customer=>
                  customer._id!==response.data._id)
           }))
         } )
              }
            }
    
componentDidMount(){
       // console.log('quotation',localStorage.getItem('authToken'))              
        
        axios.get('/customers',{
            headers:{
                "x-auth": localStorage.getItem("authToken")
            }
        })
        .then(response=>{
            //console.log("response", response)
            const customers=response.data
            this.setState({customers})
            })
        
        .catch(err=>{
            console.log(err)
        })
    }

render(){
  return(
    <div>
        
       <h2>Listing customers-{this.state.customers.length}</h2>
       <ul>
           {this.state.customers.map(customer=>{
               return <li key={customer._id}><Link to={`customers/${customer._id}`}>{customer.name}</Link>
           <button onClick={()=>{
         this.handleRemove(customer._id)
           }}>remove</button></li>
           })}
       </ul>
       <Link to="/customers/new">Add customer</Link>
    </div>
)
    }
}
export default CustomersList;
