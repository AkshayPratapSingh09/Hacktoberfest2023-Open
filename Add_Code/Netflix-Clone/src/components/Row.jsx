import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

//props recieved from Home component
const Row = ({ rowId, title, fetchURL }) => {
  //set movie state to empty array using useState hook
  const [movies, setMovies] = useState([]);
  //set trailer state to empty array using useState hook
  const [trailerUrl, setTrailerUrl] = useState("");

  //axios api call using useEffect hook to render page on load
  useEffect(() => {
    //You use axios.get(url) with a URL from an API endpoint to get a promise which returns a response object
    axios.get(fetchURL).then((response) => {
      //inside the response object, there is data that is then assigned the state in movies array
      setMovies(response.data.results);
    });
    //[fetchURL] dependency to rerender the page when the url changes
  }, [fetchURL]);

  //console log reponse data array
  //console.log(movies);

  //event listener function to manipulate DOM slider elements to scroll when clicked using the unique id for each row
  const slideLeft = () => {
    let slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  //event listener function to manipulate DOM slider elements to scroll when clicked using the unique id for each row
  const slideRight = () => {
    let slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  //youtube player parameters
  const opts = {
    height: "480",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  //event handler function for trailer url state handling
  const handleClick = (item) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(
        item.name || item.title || item.original_title || item?.source || ""
      )
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      {/* title object */}
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        {/* onClick react-icon to execute event listener slide function to the left */}
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
        <div
          id={"slider" + rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {/* map function to create a new array populated with the results from the movies api call state and a key to identify which items have changed in the array */}
          {movies.map((item, id) => (
            <Movie key={id} item={item} handleClick={handleClick} />
          ))}
        </div>

        {/* onClick react-icon to execute event listener slide function to the right */}
        <MdChevronRight
          onClick={slideRight}
          size={40}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </>
  );
};

export default Row;
