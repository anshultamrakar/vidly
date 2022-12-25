import React, { Component } from 'react'
import { getMovies }  from '../services/fakeMovieService';


class Movies extends Component {
    state = { 
        movies : getMovies()
     } 

 handleDelete = (id) => {
   const newItems = this.state.movies.filter(movie => movie._id !== id)
   this.setState({movies : newItems})
 }

    render() { 
        return (
  <div>
{this.state.movies.length === 0 ? <p>There are no movie in the databases</p> : 
<>
<p>Showing {this.state.movies.length}  movies now</p>
<table className="table">
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Genre</th>
      <th scope="col">Quantity</th>
      <th scope="col">Rating</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
   {this.state.movies.map(movie => 
      <tr key = {movie._id}>
        <td>{movie.title}</td>
        <td>{movie.genre.name}</td>
        <td>{movie.numberInStock}</td>
        <td>{movie.dailyRentalRate}</td>
        <td><button className='btn btn-danger' onClick={() => this.handleDelete(movie._id)}>Delete</button></td>
      </tr>
      )}
  </tbody>
</table>
</>
 
}

  </div>
);
    }
}
 
export default Movies;