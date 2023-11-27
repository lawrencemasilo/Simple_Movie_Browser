import React from 'react'


/*
{
    "Title": "James Bond 007: Everything or Nothing",
    "Year": "2003",
    "imdbID": "tt0366629",
    "Type": "game",https://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@github.com/lawrencemasilo/Simple_Movie_Browser.git
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzhiNjgxNGMtMzg0ZS00ODMwLTk5MTYtYzI0NDBmOThlZjY3XkEyXkFqcGdeQXVyNTEwNDY2MjU@._V1_SX300.jpg"
}
*/

export default function Movie({ movie }) {
  return (
    <div className='movieContainer'>
      <div>
        <img src={movie.Poster}/>
        <div className='description'>
          <h3 className='title'>{movie.Title}</h3>
          <p>{movie.Year}</p>
        </div>
      </div>
        
    </div>
  )
}
