import React, { Component } from 'react';


class NavBar extends Component {
    state = {  } 
    render() { 
        return (
            <nav className ="navbar navbar-light bg-light">
               <h2>Navbar <span className='badge badge-secondary'>{this.props.totalLength}</span></h2>
            </nav>
        );
    }
}
 
export default NavBar;