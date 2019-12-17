import React from 'react'
import axios from '../../config/axios'
import CustomerForm from './Form'
// import "./css/bootstrap.css"


class CustomerEdit extends React.Component{
    constructor(){
        super()
        this.state={
            customer: {}
            }
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    
    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`/customers/${id}`,{
           headers:{
              'x-auth' : localStorage.getItem('authToken')
           }
        })

        .then(response => {
        const customer = response.data
        this.setState({customer})
       })
       .catch((err)=>{
           alert(err)
       })
   }

 handleSubmit(formData){
        const id = this.props.match.params.id
        axios.put(`/customers/${id}`,formData,{
        headers:{
            'x-auth':localStorage.getItem('authToken')
        }
    })
    .then(response => {
        if(response.data.hasOwnProperty('errors')){
            alert(response.data.message)
        }else{
            this.props.history.push(`/customers/${response.data._id}`)
        }
        //console.log(response.data)
    })
    .catch((err)=>{
        alert(err)
    })
}
    render(){
        return(
            <div>
                <h2>Edit customer</h2>
                {(Object.keys(this.state.customer).length !== 0) && <CustomerForm customer={this.state.customer} 
                handleSubmit={this.handleSubmit}/>}
                
            </div>
        )}
    }

        

export default CustomerEdit