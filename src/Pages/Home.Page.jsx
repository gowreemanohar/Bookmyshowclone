/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState, useEffect } from "react";
import HeroCarousel from "../components/HeroCarousel/Herocarousel.component";
import EntertainmentCardSlider from "../components/Entertainment/EntertainmentCard.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import axios from "axios";

function HomePage() {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premiereMovies, setPremiereMovies] = useState([]);
  const [onlineStreamEvents, setOnlineStreamEvents] = useState([]);

  useEffect(() => {
    const requestPopularMovie = async () => {
      const getPopularMovies = await axios.get("/movie/popular");
      setRecommendedMovies(getPopularMovies.data.results);
    };
    requestPopularMovie();
  }, []);

  useEffect(() => {
    const requestTopRatedMovie = async () => {
      const getTopRatedMovie = await axios.get("/movie/top_rated");
      setPremiereMovies(getTopRatedMovie.data.results);
    };
    requestTopRatedMovie();
  }, []);

  useEffect(() => {
    const requestUpComingMovie = async () => {
      const getUpComingMovie = await axios.get("/movie/upcoming");
      setOnlineStreamEvents(getUpComingMovie.data.results);
    };
    requestUpComingMovie();
  }, []);

  return (
    <>
      <HeroCarousel />
      <div className="container mx-auto px-4 md:px-20 my-8 ">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-8">
          The Best of Entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>

      <div className="container mx-auto px-4 my-8 md:px-20 md:my-20 ">
        <img
          src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/lead-in-v3-collection-202102040828.png"
          alt="handpick poster"
          className=" w-full h-full"
        />
      </div>

      <div className="container mx-auto px-4 md:px-20 ">
        <PosterSlider
          title="Recommended Movies"
          subtitle="List of recommended movies"
          posters={recommendedMovies}
          isDark={false}
        />
      </div>
      <div className="bg-Premiere-700 py-12">
        <div className="container mx-auto px-4 md:px-20 my-8 flex flex-col gap-3">
          <div className=" hidden md:flex ">
            <img
              src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              alt="rupay"
              className="w-full h-full "
            />
          </div>
          <PosterSlider
            title="Premiere"
            subtitle="Watch new movies at home, every friday"
            posters={premiereMovies}
            isDark={true}
          />
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-20 my-8">
        <PosterSlider
          title="Online streaming events"
          subtitle=""
          posters={onlineStreamEvents}
          isDark={false}
        />
      </div>
    </>
  );
}

export default HomePage;
