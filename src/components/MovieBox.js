import React from 'react'

function MovieBox({movies}) {
    console.log(movies)
  return (
    <div>{
        movies.map((movie)=>
        (
            <div className="main_content">
                <p>{movie.name}</p>
            <img src={movie.poster_path} alt="" />

            </div>
            
        ))}</div>
  )
}

export default MovieBox