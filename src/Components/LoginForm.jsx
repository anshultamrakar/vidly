import { errors } from 'ethers';
import React, { Component } from 'react';
import Joi from "joi-browser"



class LoginForm extends Component {
  state = { 
    accounts : {username : "", password : ""},
    errors : {}
   } 

schema = {
  username : Joi.string().required(),
  password : Joi.string().required()  
}
   



 validate = () => {
  const result = Joi.validate(this.state.accounts , this.schema, {abortEarly : false})
  console.log(result)
   const errors = {}
   if(this.state.accounts.username.trim() === ""){
    errors.username = "username is required"
   }
   if(this.state.accounts.password.trim() === ""){
    errors.password = "password is required"
   }
   return Object.keys(errors).length === 0 ? null : errors
 }


 validateProperty = (e) => {
   if(e.target.name === "username"){
     if(e.target.value.trim() === ""){
      return "username is required"
     }
   }
   if(e.target.name === "password"){
    if(e.target.value.trim() === ""){
      return "Password is required"
    }
  }
 }

  handleSubmit = (e) => {
   e.preventDefault()
   const errors = this.validate();
   this.setState({errors})
   if(errors) return;
   console.log("Submitted")
  }


  handleChange = (e) => {
   const errors = {...this.state.errors}
   const errorMessage = this.validateProperty(e);
   if(errorMessage){
    errors[e.target.name] = errorMessage
   }else {
    delete errors[e.target.name]
   }
    const accounts = {...this.state.accounts}
    accounts[e.target.name]  = e.target.value
    this.setState({accounts, errors})
  }


  render() { 
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div className ="form-group">
            <label htmlFor='username'>Username</label>
            <input type = "text" 
            value = {this.state.accounts.username} 
            id = "username"
            name = "username"
            onChange={this.handleChange}
            className ="form-control" />
             {this.state.errors && <div className='alert alert-danger'>{this.state.errors.username}</div>}
          </div> 
         
        <div className ="form-group">
          <label htmlFor='password'>Password</label> 
          <input type="password" id = "password"  
          value = {this.state.accounts.password} 
          name = "password"
          onChange={this.handleChange}
          className ="form-control" />
            {this.state.errors &&  <div className='alert alert-danger'>{this.state.errors.password}</div>}
        </div>
      <button type="submit" className="btn btn-primary">Submit</button>
       </form>
      </div>
    );
  }
}
 
export default LoginForm;