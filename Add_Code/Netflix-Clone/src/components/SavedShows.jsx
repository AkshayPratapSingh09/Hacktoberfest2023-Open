import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";

const SavedShows = () => {
  //set movie state to empty array using useState hook
  const [movies, setMovies] = useState([]);
  // user authentication state
  const { user } = UserAuth();

  //event listener function to manipulate DOM slider elements to scroll when clicked using the unique id for each row
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  //event listener function to manipulate DOM slider elements to scroll when clicked using the unique id for each row
  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  // create a firestore database document snapshot of current contents
  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      // set movies state to data retrieved from firestore database document
      setMovies(doc.data()?.savedShows);
    });
    // dependency to rerender snapshot on email change
  }, [user?.email]);

  // referencing user email in firestore database under users document
  const movieRef = doc(db, "users", `${user?.email}`);
  // function to delete show from firestore database document with id reference
  const deleteShow = async (passedID) => {
    // attempt code block
    try {
      // filter new array without id from event handler
      const result = movies.filter((item) => item.id !== passedID);
      // wait for resolved promise to proceed with update
      await updateDoc(movieRef, {
        // render new array
        savedShows: result,
      });
      //handle any error
    } catch (error) {
      //console log error if any
      console.log(error);
    }
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">Watchlist</h2>
      <div className="relative flex items-center group">
        {/* onClick react-icon to execute event listener slide function to the left */}
        <MdChevronLeft
          onClick={slideLeft}
          className="bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={"slider"}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {/* map function populated with the results from the firestore database */}
          {movies.map((item) => (
            <div
              key={item.id}
              className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
            >
              <img
                className="w-full h-auto block"
                src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                alt={item?.title}
              />
              <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                  {item?.title}
                </p>
                {/* event handler to perform deleteShow function with passedID parameter */}
                <p
                  onClick={() => deleteShow(item.id)}
                  className="absolute text-gray-300 top-4 right-4"
                >
                  <AiOutlineClose />
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* onClick react-icon to execute event listener slide function to the right */}
        <MdChevronRight
          onClick={slideRight}
          className="bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </>
  );
};

export default SavedShows;
