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

    

    return (
        <div className="landing">
            <div className="brandName">
                <h1 className="brand">Movies</h1>
                <p className="brand">Find your favourite movies</p>
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
        <h3 className="Movies">Movies</h3>
        <div className="movies">
            {movies.map(movies => (
                <div className="movie-card" key={movies.show.id}>{movies.show.name}</div>
            ))}
        </div>
        </div>
    )
}

export default landing
