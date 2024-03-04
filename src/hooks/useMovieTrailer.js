import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_CONSTANTS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const getMovieVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId.id + "/videos?language=en-US", API_CONSTANTS);
        const json = await data.json();

        const filteredData = json.results.filter((video) => video.type === 'Trailer');
        const trailer = filteredData.length ? filteredData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
        console.log(trailer);
    };

    useEffect(() => {
        getMovieVideos();
    }, []);
};

export default useMovieTrailer;