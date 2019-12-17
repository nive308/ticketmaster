import React from 'react';
import axios from '../../config/axios'
// import "./css/bootstrap.css"

class TicketForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name :props.ticket ? props.ticket.name:'',
            code:props.ticket ? props.ticket.code:'',
            department:props.ticket ? props.ticket.department:'',
            departments:props.ticket ? props.ticket.departments: [],
            priority:props.ticket ? props.ticket.priority: 'High',
            message: props.ticket ? props.ticket.message:''
        }    
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    componentDidMount() {
        axios.get('/departments',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response => {
            //console.log(response.data)
            const departments = response.data
            this.setState({departments})
        })
        .catch(err => {
            console.log(err)
        })
}


    handleChange(e){
        //console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit(e){
       e.preventDefault()
       const formData={
           name:this.state.name,
           code:this.state.code,
           department:this.state.department,
           priority:this.state.priority,
           message:this.state.message
       }
       console.log(formData)
       this.props.handleSubmit(formData)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name </label>
                       <label>Code 
                       <input type="text" value={this.state.code} onChange={this.handleChange} name="code"/>
                    </label><br/>
                  
                    Department:
                    <select value={this.state.department} onChange={this.handleChange} name="department">
                        <option value="">select</option>
                        {
                            this.state.departments.map(department => {
                                return <option value={department._id} key={department._id}>{department.name}</option>
                            })
                        }
                    </select><br/>

                    <label>priority
                    <div>
                        <input type="radio" value="High" onChange={this.handleChange} name="priority"/> High<br/>
                        <input type="radio" value="Medium" onChange={this.handleChange} name="priority"/> Medium<br/>
                        <input type="radio" value="Low" onChange={this.handleChange} name="priority"/> Low<br/>
                     </div>
                    </label>

                    <label>message<br/>
                        <textarea value={this.state.message} onChange={this.handleChange}  name="message"/>
                    </label><br/>
                  
                  <input type="submit" />
                </form>
            </div>
        )
    }
}
export default TicketForm

