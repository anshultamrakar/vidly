import React, { Component } from 'react';
import Counters from './components/Counters';
// import Movies from './components/movies';
import Navbar from './components/Navbar';


class App extends Component {
  state = { 
    counters : [ 
        {id : 1 , value : 0},
        {id : 2 , value : 4},
        {id : 3 , value : 0},
        {id : 4 , value : 8},
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
   const counters =  this.state.counters.map(c => {
        c.value = 0 
        return c;
    })
    this.setState({counters})
 }



 handleDelete = (counterId) => {
  const counters = this.state.counters.filter(c => c.id !== counterId)
  this.setState({counters})
 }



 render(){ 
  return (
    <React.Fragment>
      <Navbar totalLength = {this.state.counters.length}/>
      <main className="container">
      <Counters 
      counters = {this.state.counters}
      onReset = {this.handleReset} 
      onIncrement = {this.handleIncrement} 
      onDelete = {this.handleDelete}/>
     </main>
    </React.Fragment>
  );
 }
}

export default App;
