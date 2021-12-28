/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import Lottie from 'react-lottie';
import Animationdata from '../../Lotties/watch-a-movie.json';
import { useEffect , useState } from 'react';
import './landing.css'

const landing = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Animationdata,
        rendererSettings: {
          // preserveAspectRatio: "xMidYMid slice"
        }};

    const [movies , setMovies] = useState([]);    

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://api.tvmaze.com/search/shows?q=all')
            const data = await response.json();
            setMovies(data);
        }
        fetchData();
    }, []);

    const getDetails= (id,name,sumary,image) => {
        localStorage.setItem('movieId', id);
        localStorage.setItem('movieName', name);
        localStorage.setItem('movieSumary', sumary);
        localStorage.setItem('movieImage', image);
        window.location.href = '/shows/' + id;
    }


    

    return (
        <div className="landing">
            <div className="brandName">
                <h1 className="brand">Binge</h1>
                <p className="brand">The most favourite movie platform.</p>
            </div>
            <div className="landing-content">
                <div className="landing-content-text">
                    <h1>Watch Movies</h1>
                    <p>Find your favourite movies and watch them on your own device</p>
                </div>
                <div className="landing-content-lottie">
                    <Lottie options={defaultOptions} height={700} width={700} />
                </div>
            </div>
        <h3 className="scroll">Scroll down to see more</h3>
        <h3 className="Movies-section">Movies</h3>
        <div className="movies">
            {movies.map(movies => (
                <div className="movie-card" key={movies.show.id} onClick={()=>getDetails(movies.show.id, movies.show.name, movies.show.summary, movies.show.image.original)}>
                    <img className="movie-card-image" src={movies.show.image.original} alt="movieimage" ></img>
                    <div className="movie-card-title"> Movie Name : {movies.show.name}</div>
                    <div className='movie-card-rating'>Rating : {movies.show.rating.average}</div>
                    <button className="movie-card-button" >Learn More</button>
                </div>
            ))}
        </div>
        </div>
    )
}

export default landing
