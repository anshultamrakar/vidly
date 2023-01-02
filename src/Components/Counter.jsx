import React, { Component } from 'react'

class Counter  extends Component {


    render() { 
      console.log(this.props , "props")
        return (
            <div>
              <span  className= {this.getBadgeClasses()}>{this.formatCount()}</span>
              <button className='btn btn-secondary' onClick={() => this.props.onIncrement(this.props.counter)}> + </button>
              <button className='btn btn-primary m-4' onClick={() => this.props.onDecrement(this.props.counter)} 
              disabled = {this.props.counter.value === 0 ? 'disabled' : ""} > - </button>
              <button onClick={() => this.props.onDelete(this.props.counter.id)} className='btn btn-danger m-3'>Delete</button>
            </div>
        );
    }

    getBadgeClasses(){
     let classes = "badge m-4 badge-"
     classes += this.props.counter.value === 0 ? "primary" : "secondary"
     return classes;
    }
 
    formatCount(){
      return this.props.counter.value === 0 ? "Zero" : this.props.counter.value
    }
}
 
export default Counter ;