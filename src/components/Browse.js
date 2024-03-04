import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
const Browse = () => {
  // Fetch data TMDB api and update the store
  useNowPlayingMovies();

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
  )
}

export default Browse