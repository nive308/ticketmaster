import React from 'react'
import axios from '../../config/axios';
import {Link} from 'react-router-dom'
// import "./css/bootstrap.css"

class EmployeeForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: props.employee ? props.employee.name:'',
            email: props.employee ? props.employee.email:'',
            mobile: props.employee ? props.employee.mobile:'',
            department: props.employee ? props.employee.department:'',
            departments: []
        }

    }
    componentDidMount() {
        axios.get('/departments',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response => {
            const departments = response.data
            this.setState({departments})
        })
        .catch(err => {
            console.log(err)
        })
}

handleChange = (e) => {
    
    this.setState({
        [e.target.name]:e.target.value})
}
handleSubmit = e => {
    e.preventDefault()
    const formData = {
        name: this.state.name,
        email: this.state.email,
        mobile: this.state.mobile,
        departmentId: this.state.department
    }
    //console.log(formData)
    this.props.handleSubmit(formData)
}
render() {

    return (
        <form onSubmit={this.handleSubmit}>
            <label>name
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} name="name"/>
            </label><br/>

            <label>email
            <input type="text" name="email" value={this.state.email} onChange={this.handleChange} name="email"/>
            </label><br/>

            <label>mobile
            <input type="text" name="mobile" value={this.state.mobile} onChange={this.handleChange} name="mobile"/>
            </label><br/>

            department:
            <select value={this.state.department} onChange={this.handleChange} name="department">
                <option value="">select</option>
                {
                    this.state.departments.map(department => {
                        return <option value={department._id} key={department._id}>{department.name}</option>
                    })
                }
            </select>
            <br/>
            <input type="submit" /> or <Link to="/customers">back</Link>
        </form>
    )
}
}
export default EmployeeForm 
 