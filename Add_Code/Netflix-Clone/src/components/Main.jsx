import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Requests";

const Main = () => {
  //set movie state to empty array using useState hook
  const [movies, setMovies] = useState([]);

  // movie variable to hold the value a random movie from the array that is being returned in the api call
  const movie = movies[Math.floor(Math.random() * movies.length)];

  //console logging random movie variable value
  //console.log(movie);

  //axios api call using useEffect hook to render page and dependency [] to only load once
  useEffect(() => {
    //You use axios.get(url) with a URL from an API endpoint to get a promise which returns a response object
    axios.get(requests.requestPopular).then((response) => {
      //inside the response object, there is data that is then assigned the state in movies
      setMovies(response.data.results);
    });
    //[] is a dependency to only load once
  }, []);

  //console logging array from response object
  //console.log(movies);

  //truncate function to return new string value with ellipse after length parameter indicated
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        {/* div for gradient effect on backdrop image */}
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>

        {/* backdrop image object using base url with sizing and template literal with optional chaining(?.) to read nested value in object */}
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />

        <div className="absolute w-full top-[20%] p-4 md:p-8">
          {/* title object */}
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="my-4">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
              Play
            </button>
            <button className="border text-white border-gray-300 py-2 px-5 ml-4">
              Watch Later
            </button>
          </div>
          {/* release date object */}
          <p className="text-gray-400 text-sm">
            Released: {movie?.release_date}
          </p>
          {/* overview object with truncate function to limit characters to 150 */}
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncateString(movie?.overview, 150)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
