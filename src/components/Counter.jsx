import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count : 0,
        tags : ["tag1", "tag2", "tag3", "tag4"]
     } 

   
     handleClick = () => {
      this.setState({count : this.state.count + 1})
     }

  

    render() { 
        return (
            <div>
               <span  style = {{marginLeft : "2rem"}} className = {this.getBadgeClass()} >{this.formatCount()}</span>
               <button onClick = {() => this.handleClick()} className='btn btn-primary m-4'>Increment</button>
                {this.renderTags()} 
            </div>
        );
    }

    renderTags(){
        if(this.state.tags.length === 0){
           return <p>There are no tags</p>
        }else{
           return <ul>{this.state.tags.map(tag => <li key = {tag}>{tag}</li>)}</ul>
        }
    }

    formatCount(){
        const  { count }  = this.state;
        return count === 0 ? "Zero" : count
     }

     getBadgeClass(){
        let classes = "btn btn-"
         classes += this.state.count === 0 ? "primary" : "warning"
         return classes;
     }
    }  

export default Counter;