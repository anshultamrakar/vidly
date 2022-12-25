import React, { Component } from 'react';
// import Movies from './Components/Movies';
import Counters from './Components/Counters';
import NavBar from './Components/Navbar';

class App extends Component {
  
  state = {  
    counters : [
        {id : 0 , value : 5},
        {id : 1, value : 0},
        {id : 2 , value : 0},
        {id : 3 , value : 0},
    ]
} 

handleIncrement = (counter) => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = {...counter}
    counters[index].value++
    this.setState({counters})
}


handleReset = () => {
 const counters = this.state.counters.map(c => {
    c.value = 0 ;
    return c;
 })
 this.setState({counters})
}


handleDelete = (id) => {
    const counters = this.state.counters.filter(counter => counter.id !== id)
    this.setState({counters})
}

  
  render() { 
    return (
      <> 
      <NavBar totalLength = {this.state.counters.filter(c => c.value > 0 ).length}/>
      <main className='container'>
        <Counters 
        counters = {this.state.counters}
        onReset = {this.handleReset}
        onIncrement = {this.handleIncrement}
        onDelete = {this.handleDelete}
        />
        {/* <Movies/> */}
      </main>
      </>
    );
  }
}
 
export default App;