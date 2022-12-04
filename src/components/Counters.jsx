import React, { Component } from 'react'

import Counter from './Counter'


class Counters extends Component {
    render() { 
        const  {onDelete , onIncrement , onReset} = this.props
        return (
            <div>
                <button  onClick = {onReset}  className='btn btn-secondary'>Reset</button>
             {this.props.counters.map(counter => 
             <Counter 
             key = {counter.id} 
             counter = {counter} 
             onIncrement = {onIncrement} 
             onDelete = {onDelete} />)
             }
            </div>
        );
    }
}
 
export default Counters;