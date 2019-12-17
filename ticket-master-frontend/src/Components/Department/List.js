import React from 'react'
import axios from '../../config/axios'
import DepartmentForm from './Form'
// import "./css/bootstrap.css"

class DepartmentList extends React.Component{
    constructor(){
        super()
        this.state={
     departments:[]
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    
    
    handleSubmit=(formData)=>{
        // console.log("formData",formData)
        axios.post('/departments',formData,{
        headers:{
            'x-auth':localStorage.getItem('authToken')
        }
       })
            .then(response=>{
               if(response.data.hasOwnProperty('errors')){
                   alert(response.data.message)
               }else{
                   const department=response.data
                   this.setState(prevState=>({
                       departments:prevState.departments.concat(department)
                   }))
                   
               }
            })
        }


    componentDidMount(){
        axios.get(`/departments`,{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then (response=>{
            const departments=response.data 
            this.setState({departments})
        })
        .catch(err=>{
            console.log(err)
        })
    }

    handleRemove=(id)=>{
       const confirmRemove=window.confirm("Are you sure?")
       if(confirmRemove){
           axios.delete(`/departments/${id}`,{
           headers:{
               'x-auth':localStorage.getItem('authToken')
           }
          })
          .then(response=>{
            console.log(response.data) 
           this.setState(prevState=>({
            departments:prevState.departments.filter(department=>
                  department._id!==response.data._id)
           }))
         } )
              }
            } 


render(){
    return(
        <div>
        <h2>Listing department-{this.state.departments.length}</h2>
        <h2>Add departments</h2>
        <DepartmentForm handleSubmit={this.handleSubmit}/>
        <table border="2px" >
         <thead>
             <tr>
                <th>id</th>
                <th>name</th>
                <th>action</th>
             </tr>
                </thead>
                <tbody>
                        
            { this.state.departments.map(department =>{
            return (
                <tr  key={department._id}>
                <td>{department._id}</td>
                <td>{department.name}</td>
                <td><button onClick={()=>{
                    this.handleRemove(department._id)
                }} >Remove</button></td>
                
                </tr>)
            })}
                   
        </tbody>
        </table>
        </div>
    )
  }
}
export default DepartmentList 