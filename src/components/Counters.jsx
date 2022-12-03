import React, { Component } from 'react'
import Counter from './Counter';
import Navbar from './Navbar';




class Counters extends Component {
    state = { 
        counters : [
            {id : 1 , value : 3},
            {id : 2 , value : 2},
            {id : 3 , value : 0},
            {id : 4 , value : 0},
        ]
     }

     handleIncrement = (counter) => {
       const counters = [...this.state.counters]
       const index = counters.indexOf(counter)
       counters[index] = {...counter}
       counters[index].value++
       this.setState({counters})
     }

     handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId)
        this.setState({counters})
     }


     handleReset = () => {
         const counters =  this.state.counters.map(c => {
            c.value = 0 ;
            return c;
        })
        this.setState({counters})
     }

    render() { 
        return (
            <div>
                <Navbar/>
                <button onClick={this.handleReset} className='btn btn-secondary'>Reset</button>
                 {this.state.counters.map(counter => <Counter 
                 key = {counter.id} 
                 onDelete = {this.handleDelete} 
                 onIncrement = {this.handleIncrement}
                 value = {counter.value} 
                 counter = {counter}/>)}
            </div>
        );
    }
}
export default Counters;