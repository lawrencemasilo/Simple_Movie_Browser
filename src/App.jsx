import { useEffect, useState } from 'react';
import React from 'react';
import './App.css';
import Movie from './Movie';

const API_URL = 'http://www.omdbapi.com?apikey=d1076c8c';



function App() {
  const [movies, setMovies] = useState([]);
  const [titles, setTitles] = useState('');

  async function searchMovie (title) {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    if (data.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
  }

  useEffect(() => {
    searchMovie(titles)
  }, [titles])

  const handleChange = event => {
    setTitles(event.target.value);
  }
  
  
  return (
    <div className='appContainer'>
      <div className='header'>
        <h1>Movsite</h1>
      </div>
      <div className='search'>
        <input type='text' onChange={handleChange} value={titles} placeholder='Search your favorite Movie/Show' />
      </div>
      <div className='movieContainer'>
        {
          movies.map(movie => <Movie movie={movie} />)
        }
      </div>
    </div>
  )
}

export default App