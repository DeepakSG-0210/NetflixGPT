import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTrendingMovies from "../hooks/useTrendingMovies";
const Browse = () => {
  // Fetch data TMDB api and update the store
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/*
        Main Container
          - Video Background
          - Title
        Secondary Container
          - Movie List * n
          - Cards * n
      */}
    </div>
  );
};

export default Browse;
