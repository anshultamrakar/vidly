import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        value : this.props.counter.value,
     } 

     handleClick = () => {
      this.setState({ value : this.state.value + 1})
     }

    render() { 
        return (
            <div>
               <span  style = {{marginLeft : "2rem"}} className = {this.getBadgeClass()} >{this.formatCount()}</span>
               <button onClick = {() => this.handleClick()} className='btn btn-primary m-4'>Increment</button>
               <button  onClick = {() => this.props.onDelete(this.props.counter.id)} className = "btn btn-danger">Delete</button>
            </div>
        );
    }

    formatCount(){
        const  { value }  = this.state;
        return value === 0 ? "Zero" : value
     }

     getBadgeClass(){
        let classes = "btn btn-"
         classes += this.state.value === 0 ? "primary" : "warning"
         return classes;
     }
    }  


    
export default Counter;