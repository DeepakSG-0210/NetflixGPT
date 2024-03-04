import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ( movieId) => {
    // Fetch Trailer Video and updating the store with the trailer video
    const trailerVideo = useSelector((state) => state.movies?.trailerVideo);
    useMovieTrailer(movieId);

    // https://www.youtube.com/watch?v=e1k1PC0TtmE
    return (
        <div className="">
            <iframe className="w-screen aspect-video"src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </div>
    )
}

export default VideoBackground