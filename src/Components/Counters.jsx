import React, { Component } from 'react'
import Counter from './Counter';

class Counters  extends Component {
 
    render() { 
        return (
            <div>
               <button onClick={this.props.onReset} className='btn btn-primary m-4'>Reset</button>
               {this.props.counters.map(counter => <Counter 
               key = {counter.id}  
               onDelete = {this.props.onDelete} 
               counter = {counter}
               onIncrement = {this.props.onIncrement}
               onDecrement = {this.props.onDecrement}
               />)}
            </div>
        );
    }
}
 
export default Counters;