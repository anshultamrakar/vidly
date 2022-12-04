import React, { Component } from 'react'

class Counter extends Component {
  
    render() { 
     console.log(this.props)
        return (
            <div>
                <span className= {this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)}  className='btn btn-primary m-4'>Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)}  className='btn btn-danger m-2'>Delete</button>
            </div>
        );
    }


    formatCount(){
        const { value } = this.props.counter    
        return value === 0 ? "Zero" : value 
    }

    getBadgeClasses(){
        let classes = "btn btn-"
        classes += this.props.counter.value === 0 ? "warning" : "danger"
        return classes
    }
}
 
export default Counter;