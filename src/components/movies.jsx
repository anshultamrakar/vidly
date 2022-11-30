import React, { Component } from 'react'
import { getMovie } from '../services/fakeMovieService';

class Movies extends Component {
    state = { 
        movies : getMovie()
     } 
    render() { 
        return (
            <div>
               <p>There are 9 movies in the list</p>
               <table class="table">
               <thead>
                 <tr>
                   <th scope="col">Title</th>
                   <th scope="col">Genre</th>
                   <th scope="col">Anshu</th>
                   <th scope="col">SS</th>
                 </tr>
               </thead>
               <tbody>
                {this.state.movies.map(movie => (
                   <tr>
                   <td>{movie.title}</td>
                   <td>{movie.genre}</td>
                   <td>{movie.genre}</td>
                   <td>{movie.genre}</td>
               </tr>
                ))}
              
               </tbody>
             </table>
            </div>
        );
    }
}
 
export default Movies;