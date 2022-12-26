import React, { Component } from 'react'

class LoginForm extends Component {
   state = {
    account : {username : "", password : ""},
    error : {}
   }


  validate = () => {
    const error = {}
    if(this.state.account.username.trim() === ""){
      error.username = "username is required"
    }
    if (this.state.account.password.trim() === ""){
      error.password = "password is required"
    }
    return Object.keys(error).length === 0 ? null : error
  }
  


    handleSubmit = (e) => {
      e.preventDefault()
     const error = this.validate();
     console.log(error)
      this.setState({error})
      if(error) return
      // Call the server
      console.log("submitted")
    }


    handleChange = (e) => {
      const account = {...this.state.account}
      account[e.target.name]= e.target.value
      this.setState({account})
    } 



    render() { 
        return (
            <div>
               <h1>Login</h1> 
               <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor ="username">Username</label>
            <input autoFocus 
            id = "username" 
            type = "text" 
            name = "username"
            onChange={this.handleChange}
            value = {this.state.account.username} 
            className='form-control' placeholder='Enter username' />
          </div>
          <div className ="form-group">
            <label htmlFor ="password">Password</label>
            <input id = "password" 
            type = "password" 
            value={this.state.account.password}
            name = "password"
            onChange = {this.handleChange}
            placeholder='Enter password' 
            className='form-control' />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
      </form>
            </div>
        );
    }
}
 
export default LoginForm;