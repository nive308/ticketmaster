import React from 'react'
import {BrowserRouter,Route,Link, Switch} from 'react-router-dom'
import axios from './config/axios'
// import axios from 'axios'

import Home from "./components/common/Home"

import Register from "./components/users/Register"
import Login from "./components/users/Login"

import TicketList from "./components/ticket/List "

function App(){
    function handleClick(){
        axios.delete('/users/logout',{
            headers:{
                'x-auth':localStorage.getItem('authToken')
            }
        })
        .then(response=>{
            console.log(response.data)
            localStorage.removeItem('authToken' )
            window.location.reload()
            window.location.href = "/"
         })
         .catch(err=>{
             alert(err)
         })
    }

    return(
        <BrowserRouter>
            <div>
                <h2>Ticket Master</h2>

                <ul>
                    <li><Link to="/">Home</Link></li>
                    {localStorage.getItem('authToken')?
                        (
                            <div>
                                <li><Link to="/tickets">tickets</Link></li>
                                <li><Link to= "#" onClick={handleClick}>Logout</Link></li>
                            </div>
                        ):(
                            <div>
                                <li><Link to="/users/register">Register</Link></li>
                                <li><Link to="/users/login">Login</Link></li>
                            </div>
                        )
                    }

                </ul>
                <Switch>
                    <Route exact path="/" component={Home}/>

                    <Route path="/users/register" component={Register} exact={true}/>
                    <Route path="/users/login" component={Login} exact={true}/>
                    <Route path="/tickets" component={ticketList}/>
                </Switch>

            </div>
        </BrowserRouter>
       )
            }
            
        
export default App