import React from 'react'
import CustomerForm from './Form'
import axios from '../../config/axios'
// import "./css/bootstrap.css"

class CustomerNew extends React.Component{
constructor(){
    super()
    this.handleSubmit=this.handleSubmit.bind(this)
}

handleSubmit(formData){
    axios.post('/customers',formData,{
    headers:{
        'x-auth':localStorage.getItem('authToken')
    }
   })
    .then(response=>{
        if(response.data.hasOwnProperty('errors')){
            alert(response.data.message)
        }else{
            this.props.history.push('/customers')
        }
        })
        .catch(err=>{
            console.log(err)
        })
    }


    render(){
        return(
            <div>
                <h2>Add Customer</h2>
                <CustomerForm handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}
export default CustomerNew