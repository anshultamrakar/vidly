import React, { Component } from 'react'

class NavBar extends Component {
    state = {  } 
    render() { 
        return (
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
             <p className ="navbar-brand" Navbar > <span className='btn btn-warning'>{this.props.totalLength}</span></p>
            </nav>
        );
    }
}
 
export default NavBar;