import React from 'react'
// import "./css/bootstrap.css"

class CustomerForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name: props.customer? props.customer.name : '',
            email: props.customer? props.customer.email:'',
            mobile: props.customer? props.customer.mobile:''
        }  
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
handleChange(e){
    this.setState({
        [e.target.name]:e.target.value
    })
}


handleSubmit(e){
        e.preventDefault()
        const formData={
            name:this.state.name,
            email:this.state.email,
            mobile:this.state.mobile
            }
         console.log(formData)
         this.props.handleSubmit(formData)
    }

render(){
    
    return(
        <div>
            <form>
                <label>Name
                    <input type="text" value={this.state.name} onChange={this.handleChange} name="name"/>
                </label><br/>

                <label>email
                    <input type="text" value={this.state.email} onChange={this.handleChange} name="email"/>  
                </label><br/>

                <label>Mobile
                    <input type="text" value={this.state.mobile} onChange={this.handleChange} name="mobile"/>
                </label><br/>
                
                <button onClick={this.handleSubmit}>Submit</button>
            </form>
        </div>
    )
}
}
export default CustomerForm