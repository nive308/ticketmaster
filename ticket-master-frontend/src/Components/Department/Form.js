import React from 'react';
// import "./css/bootstrap.css"

class DepartmentForm extends React.Component{
    constructor(props){
     super(props)
         this.state={
             name:""
         }
     }   
      
     handleChange=(e)=>{
         this.setState({
             [e.target.name]:e.target.value
         })
     }

handleSubmit=(e)=>{
    e.preventDefault()
    const formData={
        name:this.state.name
    }
    this.props.handleSubmit(formData)
}
     render(){
         return(
             <div>
                 <form onSubmit={this.handleSubmit}>
                    <label>Name<input type="text" value={this.state.name} onChange={this.handleChange} name="name"/>
                    </label>
                    <input type="submit"/>
                 </form>
             </div>
         )
     }
    }
export default DepartmentForm